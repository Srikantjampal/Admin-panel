const {InstructorModel} = require("./InstructorController");


const instructor= async(req,res)=>{
    const {name} = req.body;

    if (!name) {
        return res.status(400).send({ error: 'Name is required' });
      }

    const newInstructor= new InstructorModel({
        name:name
    })
    newInstructor.save();
}

module.exports={instructor}