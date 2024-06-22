const express = require('express');
const router = express.Router();
const { offcampusJobs,oncampusJobs } = require('../controllers/userController'); // Ensure the path is correct

router.get('/offcampus', offcampusJobs);
router.get('/oncampus', oncampusJobs);

module.exports = router;