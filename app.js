const express = require("express");
const bodyparser = require("body-parser");

require("./models");
const studentCtrl = require("./Controller/studentsController");
const facultyCtrl = require("./Controller/facultyController");

const app = express();

app.use(bodyparser.json());

app.get("/", (req, resp) => {
  resp.send("Hello,Welcome to the Our World");
});
app.get("/student", studentCtrl.addstu);
app.get("/faculty", facultyCtrl.addfac);
app.get("/getdata", studentCtrl.getstu);
app.get("/gets/:id",studentCtrl.getstudent);
app.post("/posts",studentCtrl.poststu);
app.delete("/delete/:id",studentCtrl.deletestu);
app.put("/put/:id",studentCtrl.putstu);
// stu.sync();  //To Create a new Table
// fac.sync();
// console.log("Table Created.....");
// stu.drop();  //To Drop Table

app.listen(5000, () => {
  console.log("listining.....");
});
