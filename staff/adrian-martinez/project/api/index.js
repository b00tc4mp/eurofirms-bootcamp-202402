import mongoose from "mongoose"
import express from "express"
import logic from "./logic/index.js"
import cors from "cors"
import { errors } from "com"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const { JsonWebTokenError, TokenExpiredError } = jwt;

const { ContentError, DuplicityError, MatchError } = errors;

//Le cambiamos el puerto a la App de esta forma
const { PORT, MONGO_URL, JWT_SECRET } = process.env;

mongoose.connect(MONGO_URL)
    .then(() => {

        console.log(`DB connected at ${MONGO_URL}`);

        const server = express();

        //URL por defecto
        server.get("/", (req, res) => res.json({ hello: "Bienvenido a mi API, client" }));
        
        const jsonBodyParser = express.json();

        //Usando la librería cors para que se pueda llamar a la API desde otro servidor (le damos permiso a ese puerto)
        server.use(cors());

        //Le pasamos los datos del registro a la ruta de la API si se validó todo correctamente
        //TEST PASADO
        server.post("/users", jsonBodyParser, (req, res) => {
            try {
                const { name, surnames, age, email, password } = req.body;

                logic.registerStudent(name, surnames, age, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {

                        let status = 500;

                        if (error instanceof DuplicityError) status = 409;

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    })
            }
            catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400;

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })
        //TEST PASADO
        server.post("/users", jsonBodyParser, (req, res) => {
            try {
                const { name, address, activity, email, password } = req.body;

                logic.registerCompany(name, address, activity, email, password)
                    .then(() => res.status(201).send())
                    .catch(error => {

                        let status = 500;

                        if (error instanceof DuplicityError) status = 409;

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    })
            }
            catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
                    status = 400;

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //Creamos el token del usuario con un ID existente en la base de datos
        //TEST PASADO
        server.post('/users/auth', jsonBodyParser, (req, res) => {
            try {
                const { email, password } = req.body

                logic.autenticateUser(email, password)
                    .then(user => {

                        const token = jwt.sign(
                            { sub: user.id, role: user.role },
                            "esta app va ser disrruptiva en la forma de encontrar trabajo",
                            { expiresIn: "30m" }
                        )
                        res.status(200).json(token);
                    })
                    .catch(error => {
                        let status = 500;

                        if (error instanceof MatchError) status = 401;

                        res.status(status).json({ error: error.constructor.name, message: error.message })
                    })
            }
            catch (error) {
                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400;

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })
        //TEST PASADO
        server.post('/career', jsonBodyParser, (req, res) => {
            try {
                const { authorization } = req.headers
      
                const token = authorization.slice(7)
      
                const { sub: studentUserId } = jwt.verify(token, 'esta app va ser disrruptiva en la forma de encontrar trabajo')
      
                const { title, description, certification } = req.body
      
                logic.createCareer(studentUserId, title, description, certification)
                    .then(() => res.status(201).send())
                    .catch(error =>{
                      let status = 500;
      
                      if(error instanceof MatchError) status = 401;
      
                      res.status(status).json({ error: error.constructor.name, message: error.message })
                })
        } 
        catch(error){
          let status = 500;
      
          if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400;
      
          res.status(status).json({ error: error.constructor.name, message: error.message })
        }
      })
      //TEST PASADO
      server.post('/offer', jsonBodyParser, (req, res) => {
        try {
            const { authorization } = req.headers
  
            const token = authorization.slice(7)
  
            const { sub: offerCompanyId } = jwt.verify(token, 'esta app va ser disrruptiva en la forma de encontrar trabajo')
  
            const { title, description, minSalary, maxSalary, publishDate, expirationDate } = req.body
  
            logic.createOffer(offerCompanyId, title, description, minSalary, maxSalary, publishDate, expirationDate)
                .then(() => res.status(201).send())
                .catch(error =>{
                  let status = 500;
  
                  if(error instanceof MatchError) status = 401;
  
                  res.status(status).json({ error: error.constructor.name, message: error.message })
            })
    } 
    catch(error){
      let status = 500;
  
      if(error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) status = 400;
  
      res.status(status).json({ error: error.constructor.name, message: error.message })
    }
  })

  server.get('/users', (req, res) => {
    try {

        const { authorization } = req.headers

        const token = authorization.slice(7)

        const { sub: userId } = jwt.verify(token, JWT_SECRET)

        logic.retrieveUser(userId)
            .then(user => res.json(user))
            .catch(error => {

                let status = 500;

                if (error instanceof MatchError) {

                    status = 404;
                }

                res.status(status).json({ error: error.constructor.name, message: error.message });
            })
            } catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {

                    status = 400
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })
        //TEST PASADO
        server.get('/users/:targetUserId', (req, res) => {
            try {

                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveUser(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {

                        let status = 500;

                        if (error instanceof MatchError) {

                            status = 404;
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    })
            } catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {

                    status = 400
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.get('/users/:targetUserId/careers', (req, res) => {
            try {

                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                const { targetUserId } = req.params

                logic.retrieveCareersFromStudent(userId, targetUserId)
                    .then(user => res.json(user))
                    .catch(error => {

                        let status = 500;

                        if (error instanceof MatchError) {

                            status = 404;
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    })
            } catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {

                    status = 400
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        //TODO Mostrar offers de la cada company

        server.get('/offers/:targetUserId', (req, res) => {
            try {

                const { authorization } = req.headers

                const token = authorization.slice(7)

                const { sub: userId } = jwt.verify(token, JWT_SECRET)

                logic.retrieveOffers(userId)
                    .then(offers => res.json(offers))
                    .catch(error => {

                        let status = 500;

                        if (error instanceof MatchError) {

                            status = 404;
                        }

                        res.status(status).json({ error: error.constructor.name, message: error.message });
                    })
            } catch (error) {

                let status = 500;

                if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError) {

                    status = 400
                }

                res.status(status).json({ error: error.constructor.name, message: error.message })
            }
        })

        server.listen(PORT, () => console.log("API started"));
    })
    .catch((error) => console.error(error));