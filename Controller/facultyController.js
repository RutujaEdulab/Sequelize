var db = require("../models");
var Faculty = db.faculty;
var addfac = async (req, resp) => {
  try {
    const data = await Faculty.create({
      firstName: "Vandana",
      lastName: "Pal",
      Address: "Mira-Road",
    });
    console.log(data instanceof Faculty);
    console.log(data.firstName);
    data.firstName = "Ada"; // the name is still "vandana" in the database
    await data.save(); // Now the name was updated to "Ada" in the database!
    console.log(" faculty Data was saved to the database!");
    console.log(data.toJSON());
    resp.status(200).json(data.toJSON());
  } catch (err) {
    console.log("catch error message ", err.message);
  }
};
module.exports = {
  addfac,
};
