const Employee = require("../models/Employee")
const createEmployee = async(req,res)=>{
    try{
        const {name, email, phone, city} = req.body
        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
       await employee.save()
       res.status(201).json(employee)

    }catch(error) {
        console.log("there is an error:",  error)
        res.status(500).json({message : 'Server error'})
    }
}
const getEmployees = async(req,res)=>
{
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.error("There is an error:", error)
        res.status(500).json({message: 'server error'})
    }
}
module.exports = {createEmployee, getEmployees}