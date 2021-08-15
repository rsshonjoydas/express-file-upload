// ? external imports
const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const cors = require('cors');

// ? internal imports
// const postsRouter = require("./routes/postsRouter")

const app = express();
dotenv.config();

// ? request parser
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use(express.static('Users'));
app.use(fileUpload());

// TODO: mongodb database connection with mongoose
const client = new MongoClient(process.env.MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const UserCollection = client
    .db(`${process.env.DB_NAME}`)
    .collection('Users');

  app.post('/addAUser', (req, res) => {
    const file = req.files.file;
    const name = req.body.name;
    const email = req.body.email;
    const newImg = file.data;
    const encImg = newImg.toString('base64');

    var image = {
      contentType: file.mimetype,
      size: file.size,
      img: Buffer.from(encImg, 'base64'),
    };

    UserCollection.insertOne({ name, email, image }).then((result) => {
      res.send(result.insertedCount > 0);
    });
  });

  app.get('/Users', (req, res) => {
    UserCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });
});

app.get('/', (req, res) => {
  res.send('hello RS Shonjoy');
});

// app.listen(PORT, () => {
//   console.log(`app listing to port ${process.env.PORT}`);
// });

const PORT = process.env.PORT || '5000';
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log('Server listening on port', PORT);
});