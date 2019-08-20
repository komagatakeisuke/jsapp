var express = require('express');
var router = express.Router();
var pg = require('pg');


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  var pool = pg.Pool({
    database: 'postgres',
    user: 'postgres',
    password: 'koma0508',
    host: 'localhost',
    port: 5432,
  });
  pool.connect(function(err, client) {
    if (err) {
      console.log(err);
    } else {
      client.query('SELECT * FROM products', function (err, result) {
        res.render('index', {
          title: 'Express',
          datas: result.rows[1],
        });
        console.log(result.rows[1]);
      });
    };
  });
});

module.exports = router;
