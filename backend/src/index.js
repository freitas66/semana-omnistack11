const express = require('express');
const express = require('cors');
const routes = require('./routes')
const app = express();

app.use(express.cors());
app.use(express.json());

/** 
 * Rota / Recurso
 */

 /**
  * Métodos HTTP:
  * 
  * GET: Buscar uma informação do back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DELETE: Deletar uma informação no back-end
  */

  /**
   * Tipos de parâmetros
   * 
   * Query params: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
   * Route params: parâmetros utilizados para identificar recursos
   * Request Body: corpo da requisição
   * 
   */

   /**
    * SQL: MySQL, SQLite, PostgreSQL, Oracle, MS SQL Server
    * NoSQL: MongoDB, CouchDB, etc
    */

    /**
     * Driver: SELECT * FROM users
     * Query Builder: table('users').select('*').where()
     */


app.use(routes);

app.listen(3333);

