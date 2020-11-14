const express = require('express');
const bodyParser = require('body-parser')
const mysql = require("mysql");
const path = require('path');
const app = express();
const helmet = require('helmet') // creates headers that protect from attacks (security)
const cors = require('cors')  // allows/disallows cross-site communication
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


const db = mysql.createPool({
  host: "vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "kfxrdtx1rv27ldd5",
  password: "m7xsrdbcpylcmygd",
  database: "hwm4rhnfhqiuliah",
});


// --> Add this
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8080']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(helmet())
// --> Add this
app.use(cors(corsOptions))

// app.get("/order/get/", (req, res) => {
//   const sqlSelect = "SELECT * FROM test";
//   db.query(sqlSelect, (err, result) => {
//     res.send(result);
//   });
// });

app.get('/api/', (req, res) => {
  res.send({ people: 'You want to see people I assume' });
});
app.get('/api/order/', (req, res) => {
  res.send("THIS WORKS COOL");
});
// app.post('/api/', (req, res) => {
//   res.send(
//     `Person created: ${req.body.person.name}`,
//   );
// });



////////////////////////////////////// NEW STUFF ///////////////////////////////////////////////////

app.post("/order/insert", (req, res) => {
  const orderGift = req.body.orderGift;
  const orderOccasion = req.body.orderOccasion;
  const orderType = req.body.orderType;
  const orderNumberMusicians = req.body.orderNumberMusicians;
  const orderSuprise = req.body.orderSuprise;
  const orderFirstName = req.body.orderFirstName;
  const orderLastName = req.body.orderLastName;
  const orderDateService = req.body.orderDateService;
  const orderTimeService = req.body.orderTimeService;
  const orderOffered = req.body.orderOffered;
  const orderNumber = req.body.orderNumber;
  const orderEmail = req.body.orderEmail;
  const orderAddress = req.body.orderAddress;
  const orderAddress2 = req.body.orderAddress2;
  const orderCity = req.body.orderCity;
  const orderState = req.body.orderState;
  const orderZip = req.body.orderZip;
  const orderComments = req.body.orderComments;
  const sqlInsert =
    "INSERT INTO ordering_table (gift, occasion, type, number_musicians, suprise, firstName, lastName, date_service, time_service, offered, number, email, address, address_2, city, state, zip, comments) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(
    sqlInsert,
    [
      orderGift,
      orderOccasion,
      orderType,
      orderNumberMusicians,
      orderSuprise,
      orderFirstName,
      orderLastName,
      orderDateService,
      orderTimeService,
      orderOffered,
      orderNumber,
      orderEmail,
      orderAddress,
      orderAddress2,
      orderCity,
      orderState,
      orderZip,
      orderComments,
    ],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

app.get("/order/get", (req, res) => {
  const sqlSelect = "SELECT * FROM ordering_table";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});








// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const PORT = process.env.PORT || 8080
app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`)
  });
