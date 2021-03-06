const express = require('express');
const router = express.Router();
const solicitationController = require('../app/api/controllers/solicitationsController');

router.post('/', solicitationController.create);
router.get('/', solicitationController.findAll);
router.get('/:id', solicitationController.findOne);
router.put('/:id', solicitationController.update);
router.delete('/:id', solicitationController.delete);

module.exports = router;