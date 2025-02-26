const express = require('express');

const server = express();

server.use(express.json());

// Request Body = { nome: 'Nodejs', tipo: 'Backend' }
// CRUD = Create, Read, Update, Delete.

const cursos = ['Node JS', 'JavaScript', 'React native'];

// Listando todos os cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos);
})

// Route params = /curso/2 -  retornando um curso
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

// Criando um novo curso.    
server.post('/cursos', (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizando um curso
server.put('/cursos/:index', (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Excluindo algum curso
server.delete('/cursos/:index', (req, res) => {
  const { index } = req.params;

  //splice - adiciona ou remove objeto dentro de um array.
  cursos.splice(index, 1);
  return res.json(cursos);
});


// Indicando o localhost
server.listen(3000);