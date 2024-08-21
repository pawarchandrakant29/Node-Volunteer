const generateUniqueId = require("generate-unique-id");

let volunteers = [];

const DefaultController = (req, res) => {
  res.render("index", { volunteers });
};
const AddController = (req, res) => {
  res.render("Add");
};
const AddVol = (req, res) => {
  const newVolunteer = {
    id: generateUniqueId({
      length: 4,
      useLetters: false,
    }),
    ...req.body,
  };
  volunteers = [...volunteers, newVolunteer];

  res.redirect("/");
};

const SingleVol = (req, res) => {
  const volunteer = volunteers.find((e) => e.id === req.params.id);
  res.render("Edit", { volunteer });
};

const UpdateVol = (req, res) => {
  volunteers = volunteers.map((e) =>
    e.id === req.params.id ? { id: e.id, ...req.body } : e
  );
  res.redirect("/");
};

const DeleteVol = (req, res) => {
  volunteers = volunteers.filter((e) => e.id !== req.params.id);
  res.redirect("/");
};

module.exports = {DefaultController,AddController,AddVol,SingleVol,UpdateVol,DeleteVol};
