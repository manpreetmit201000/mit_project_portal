const Staff = require("../models/staff.model");

exports.create = async (req, res) => {
  const newStaff = new Staff(req.body);

  try {
    const data = await newStaff.save();
    res.status(201).send(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.findStaff = async (req, res) => {
  try {
    let data = await Staff.find({});
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};

exports.findOneById = async (req, res) => {
  // retrive ID from the req
  const id = req.params.id;
  //
  try {
    let data = await Staff.findOne({ id: id });
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send("Error retriving staff");
  }
};
//find one and update
// update - PUT request
// find the record by id first and update it.
exports.update = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedstaff = await Staff.findByIdAndUpdate(id, req.body, {
      new: true,
    }); // req.body = { departmentName: sdfsdf  }

    res.status(203).send(updatedstaff);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Department not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

// delete
// find it first and delete.

exports.delete = async (req, res) => {
  const { id } = req.params;

  try {
    const staff = await Staff.findByIdAndRemove(id);
    return res.status(200).send("Staff deleted");
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Staff not found with id ${id}`,
      });
    }
    console.log(err);
    return res.status(500).send({
      message: `Internal server error.`,
    });
  }
};

//find one and update
