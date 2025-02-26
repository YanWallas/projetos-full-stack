const express = require('express');

const server = express();

// Request Body = { nome: 'Nodejs', tipo: 'Backend' }

const cursos = ['Node JS', 'JavaScript', 'React native'];

// Route params = /curso/2
server.get('/curso/:index', (req, res) => {
  
  const { index } = req.params;
  return res.json(cursos[index]);

})

// Query params = ?nome=nodeJS
// localhost: 3000/curso
/* server.get('/curso', (req, res) => {
     const nome = req.query.nome;

    return res.json({ curso: `Aprendendo ${nome}`});
 })*/

// Indicando o localhost
server.listen(3000);