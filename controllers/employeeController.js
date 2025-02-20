const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const employee = new Employee({
      name,
      email,
      phone,
      city,
    });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    console.log("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const singleEmployee = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(employee);
  } catch (error) {
    console.error("There is an error", error);
    res.status(500).json({ message: "Server error" });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const { name, email, phone, city } = req.body;
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      { name, email, phone, city },
      { new: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(200).json(updatedEmployee);
  } catch (error) {
    console.error("There is an error:", error);
    res.status(500).json({ message: "Server error" });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }
    res.status(204).send();
  } catch (error) {
    console.error("There is an error", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createEmployee,
  getEmployees,
  singleEmployee,
  updateEmployee,
  deleteEmployee,
};
