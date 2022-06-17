const express = require('express');
const personaRoute = require('./src/persona');

const app = express();
const port = process.env.PORT || 50000;

//Definicion de Middleware
app.use(express.json());

//Rutas
app.use('/persona', personaRoute);

app.get('/', (req, res) => {
  res.send("ESTA ES UNA PRUEBA DE JENKINS");
});

app.listen(port, () => {
  console.log(`Server corriendo en: http://localhost:${port}`);
});
