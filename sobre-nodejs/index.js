const express = require('express');

const server = express();

server.use(express.json());

// Request Body = { nome: 'Nodejs', tipo: 'Backend' }
// CRUD = Create, Read, Update, Delete.

const cursos = ['Node JS', 'JavaScript', 'React native'];

// Middleware Global
server.use((req, res, next) => {
  console.log(`URL CHAMADA: ${req.url}`);

  return next();
});

// Função middleware que verifica se no post a requisição realmente mandou um nome. 
function checkCurso(req, res, next){
  if(!req.body.name){
    return res.status(400).json({ error: "Nome do curso é obrigatorio"});
  }

  return next();
}

// Função middleware que verifica se no get a requisição realmente mandou um curso existente. 
function checkIndexCurso(req, res, next){
  const curso = cursos[req.params.index];

  if(!curso){
    return res.status(400).json({ error: "O curso não existe"});
  }

  req.curso = curso;

  return next();
}

// Listando todos os cursos
server.get('/cursos', (req, res) => {
  return res.json(cursos);
})

// Route params = /curso/2 -  retornando um curso
server.get('/curso/:index', checkIndexCurso, (req, res) => {
  return res.json(req.curso);

})

// Query params = ?nome=nodeJS
// localhost: 3000/curso
/* server.get('/curso', (req, res) => {
     const nome = req.query.nome;

    return res.json({ curso: `Aprendendo ${nome}`});
 })*/

// Criando um novo curso.    
server.post('/cursos', checkCurso, (req, res) => {
  const { name } = req.body;
  cursos.push(name);

  return res.json(cursos);
});

// Atualizando um curso
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  cursos[index] = name;

  return res.json(cursos);
});

// Excluindo algum curso
server.delete('/cursos/:index', checkIndexCurso, (req, res) => {
  const { index } = req.params;

  //splice - adiciona ou remove objeto dentro de um array.
  cursos.splice(index, 1);
  return res.json(cursos);
});


// Indicando o localhost
server.listen(3000);