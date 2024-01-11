const express = require('express');
const router = express.Router();
const skillsController = require('../controllers/skills');

// Index route
router.get('/', skillsController.index);

// Show route
router.get('/:id', skillsController.show);

// New route (display form)
router.get('/new', skillsController.new);

// Create route (handle form submission)
router.post('/', skillsController.create);

module.exports = router;
