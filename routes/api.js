const router = require("express").Router();

// fetching db(stickie) 
const { stickie } = require("../db/db");

router.get("/notes", (req, res) => {
  res.json(stickie);
});

// fetching newNote to post a new note
const { newNote } = require("../routes/notes");

router.post("/notes", (req, res) => {
  req.body.id = stickie.length.toString();
  res.json(newNote(req.body, stickie));
});

module.exports = router;
