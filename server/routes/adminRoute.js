const express = require('express');
const router = express.Router();
const { add } = require('../controllers/adminController'); // Ensure the path is correct

router.post('/add', add);

module.exports = router;
