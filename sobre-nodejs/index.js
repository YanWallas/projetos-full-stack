const express = require('express');

const server = express();

// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

// Route params = /curso/2
server.get('/curso/:id', (req, res) => {
  
  const id = req.params.id;
  return res.json({ curso: `Curso ${id}`});

})

// Query params = ?nome=nodeJS
// localhost: 3000/curso
/* server.get('/curso', (req, res) => {
     const nome = req.query.nome;

    return res.json({ curso: `Aprendendo ${nome}`});
 })*/

// Indicando o localhost
server.listen(3000);