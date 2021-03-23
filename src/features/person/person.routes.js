const express = require('express');
const router = express.Router();
const personController = require('./person.controller');

router.get('/', personController.list);
router.get('/:email', personController.getByEmail);
router.post('/', personController.insert);
router.patch('/:email', personController.update);
router.delete('/:email', personController.remove);

module.exports = router;
