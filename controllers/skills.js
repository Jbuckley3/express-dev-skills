// controllers/skills.js
const skillModel = require('../models/skill');

module.exports = {
  index: (req, res) => {
    const allSkills = skillModel.getAllSkills();
    res.render('skills/index', { skills: allSkills });
  },
};