const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const employeeController = require("../controllers/employeeController");

// POST route for adding employee with validation
router.post(
  "/add-emp",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email"),
    body("phone").isNumeric().withMessage("Phone number should be numeric"),
    body("city").notEmpty().withMessage("City is required"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
  employeeController.createEmployee
);

// GET route for all employees
router.get("/allemployees", employeeController.getEmployees);

// GET route for a single employee by ID
router.get("/:id", employeeController.singleEmployee);

// PUT route for updating an employee by ID
router.put("/:id", employeeController.updateEmployee);

// DELETE route for deleting an employee by ID
router.delete("/:id", employeeController.deleteEmployee);

module.exports = router;
