const express = require('express');
const router = express.Router();
const { offcampusHire,oncampusHire } = require('../controllers/hireController'); // Ensure the path is correct

router.post('/offcampus', offcampusHire);
router.post('/oncampus', oncampusHire);

module.exports = router;