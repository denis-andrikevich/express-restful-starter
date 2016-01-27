'use strict';

let TodosServices = autoload('./app/services/TodosService');

let controller =  {

  list(req, res) {

    let query = TodosServices.listAll();

    query.then(todos => {
      res.json(todos);
    });

    query.catch(err => {
      console.error(err);
    });
  },

  create(req, res) {

    let params = {
      text: req.body.texto
    };

    let query = TodosServices.create(params);

    query.then(() => {
      res.send('ok');
    });

    query.catch((err) => {
      console.error(err);
    });
  },

  index(req, res){
    res.send("I'm OK.");
  }
};

module.exports = controller;
