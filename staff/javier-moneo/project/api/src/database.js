import mongoose from 'mongoose';

//'mongodb://localhost:27017/companydb'
mongoose
  .connect(process.env.MONGO_URL)
  .then((db) => console.log('Db is connected'))
  .catch((error) => console.log(error));
