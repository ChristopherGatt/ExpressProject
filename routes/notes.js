const path = require("path");
const fs = require("fs");


// create new note
function newNote(info, stickieInfo) {
  stickieInfo.push(info);
  fs.writeFileSync(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(
      {
        stickie: stickieInfo,
      },
    )
  );
  return createNote;
}

module.exports = {
  newNote
};
