const express = require('express')
const { connectToMongoDB, disconnectFromMongoDB } = require('./src/mongodb');
const dotenv = require('dotenv')
const path = require('path')
const app = express()
dotenv.config();
const port = 3008

app.use(express.static(path.join(__dirname, 'public/admin')));

app.use((req, res, next) => {
  res.header("Content-Type", "application/json; charset=utf-8");
  next();
});

app.get('/', (req, res) => {
  res.status(200).end(`welcome to the computacion home`)
});

app.get('/computacion', async (req, res) => {
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send('error al conectar a la base mongo DB');
    return;
  }
  const db = client.db('computacion');
  const computacion = await db.collection('computacion').find().toArray();
  await disconnectFromMongoDB();
  res.send(computacion);
});

app.get('/computacion/:id', async (req, res) => {
  const computacionId = parseInt(req.params.id) || 0;
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db('computacion');
  const computacion = await db.collection("computacion").findOne({ id: computacionId });
  await disconnectFromMongoDB();
  !computacion ? res.status(404).send(`no es posible encontrar la  con id: ${computacionId}`)
    : res.send(computacion);
    document.querySelector("#codigo").innerHTML=`${computacionId}`;
});

app.get('/computacion/:nombre', async (req, res) => {
  const computacionNombre = req.params.nombre;
  console.log(computacionNombre);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db('computacion');
  const computacion = await db.collection("computacion").findOne({ nombre: computacionNombre });
  await disconnectFromMongoDB();
  (!computacion) ? res.status(404).send(`no es posible encontrar la computacion con un nombre: ${computacionNombre}`)
    : res.send(computacion);
});

app.get('/computacion/:precio', async (req, res) => {
  const computacionPrecio = parseInt(req.params.precio) || 0;
  console.log(req.params.precio);
  const client = await connectToMongoDB();
  if (!client) {
    res.status(500).send("error al conectar a la base mongo DB");
    return;
  }
  const db = client.db("computacion");
  const computacion = await db.collection("computacion").find({ importe: { $gte: computacionPrecio } }).toArray();
  await disconnectFromMongoDB();
  computacion.length === 0 ? res.status(404).send(`no es posible encontrar computacion con un precio mayor o igual a $${computacionPrecio}`)
    : res.send(computacion);
});

app.listen(port || 3008, () => {
  console.log(`escuchando el puerto ${port}`);
});

