var Skills = require('../models/skills');

module.exports = {
  index,
  show,
  new: newSkills,
  create,
  delete: deleteSkills,
  edit,
  update
};

function update(req, res) {
  req.body.done = req.body.done === 'on';
  Skills.update(req.params.id, req.body);
  res.redirect('/skills');
}

function edit(req, res) {
  res.render('skills/edit', {
    skills: Skills.getOne(req.params.id),
    idx: req.params.id
  });
}

function deleteSkills(req, res) {
  Skills.deleteOne(req.params.id);
  // Skills.splice(0, req.params.id);
  console.log(req.body);
  res.redirect('/skills');
}

function create(req, res) {
  console.log(req.body);
  // req.body.done = false;
  Skills.create(req.body, 
    res.redirect('/skills')

  );
}

function newSkills(req, res) {
  res.render('skills/new');
}


function show(req, res) {
  res.render('skills/show', {
    skills: Skills.getOne(req.params.id),
    idx: req.params.id
  });
}

function index(req, res) {
  res.render('index', {
    skills: Skills.getAll(),
    title: "Dev SKills"
  });
}

function update(req, res) {
  res.redner("skills/update")
}

function edit(req, res) {
  res.render("skills/edit")
}