const burger = require('../models/burger.js');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>
  burger.selectAll(data => res.render('index', { burgers: data }))
);

router.post('/api/burgers', (req, res) =>
  burger.insertOne(req.body.burger_name, result =>
    res.json({ id: result.insertId })
  )
);

router.put('/api/burgers/:id', (req, res) =>
  burger.updateOne(req.params.id, 1, result =>
    result.changedRows ? res.status(200).end() : res.status(404).end()
  )
);

module.exports = router;