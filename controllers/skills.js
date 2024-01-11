const skills = require('../models/skill');

// Index functionality
exports.index = (req, res) => {
  res.render('skills/index', { skills });
};

// Show functionality
exports.show = (req, res) => {
  const skillId = parseInt(req.params.id);
  const skill = skills.find((s) => s.id === skillId);

  if (skill) {
    res.render('skills/show', { skill });
  } else {
    res.status(404).send('Skill not found');
  }
};

// Display form for adding a new skill
exports.new = (req, res) => {
  res.render('skills/new');
};

// Create a new skill
exports.create = (req, res) => {
  const { name, description } = req.body;

  const newSkill = {
    id: skills.length + 1, // Assign a new ID 
    name,
    description,
  };

  skills.push(newSkill);

  // Redirect to the index view after creating the skill
  res.redirect('/skills');
};
