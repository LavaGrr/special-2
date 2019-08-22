const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host     : 'sql104.epizy.com',
  user     : 'epiz_24288586',
  password : '7wNBhjDYgL',
  database : 'epiz_24288586_abelhas_CEFET_bd'
});

const app = express();
// Criando uma rota GET que retorna os dados da tabela usuários.
app.get('/users', function (req, res) {
    // Conectando ao banco.
    connection.getConnection(function (err, connection) {
    
    // Executando a query MySQL (selecionar todos os dados da tabela usuário).
    connection.query('SELECT * FROM users', function (error, results, fields) {
      // Caso ocorra algum erro, não irá executar corretamente.if (error) throw error;
      
      // Pegando a 'resposta' do servidor pra nossa requisição. Ou seja, aqui ele vai mandar nossos dados.
      res.send(results)
    });
  });
});

// Iniciando o servidor.
    fetch('http://185.27.134.10/db_structure.php?db=epiz_24288586_abelhas_CEFET_bd');
      method: 'post',
      
