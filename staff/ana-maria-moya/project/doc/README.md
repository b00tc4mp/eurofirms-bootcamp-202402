# MI SOBRINO MANUEL

## INTRO

Esta web esta creada para dar visbilidad al síndrome Dandy-Walker, que es una enfermedad rara que sufre Manuel, nos gustaria recaudar dinero para invertir en la investigación de esta enfermedad, al igual que mostrar todos los recursos que necesita Manuel para su desarrollo personal y en los que trabaja día a día para superarse. Con todo esto queriamos formar una comunidad, para apoyar a Manuel paso a paso, por eso se ha creado el apartado galería para que en los posts subidos, la comunidad formada interactue.
![](./Logotipo%20MSM_verde.png)

## FUNCTIONAL DESCRIPTION

### Use Cases

admin user
- create post
- remove post
- edit post

regular user
- add comment
- edit comment
- remove comment

### UI Design

TODO Figma

## TECHNICAL DESCRIPTION

### technologies
- JavaScript
- React
- Node
- Express
- Mongo

### MODULES

- API (server)
- App (client)
- COM (errors, validators, utils)

### Data Model

User
- id (auto)
- name (string, required)
- surname (string, required)
- birthdate (string, required)
- email (string, required)
- password (string, required)
- role (string, required, enum: regular|admin, default: regular)

Post
- id (auto)
- title (string, required)
- image (string, optional)
- video (string, optional)
- text (string, required)
- date (date, required)
- likes ([userId, optional])

Comment
- id (auto)
- post (Post.id, required)
- author (User.id, required)
- text (string, required)
- date (date, required)