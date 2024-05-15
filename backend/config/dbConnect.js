const mongoose= require("mongoose");

const connectDB = async () =>{
    try {
        await mongoose.connect('mongodb+srv://Srijamp30:4eb426d8@cluster0.a8keswg.mongodb.net/Lecture-Scheduling').then(()=>console.log('DB is Connected'));
    } catch (error) {
        console.error("failed to connect",error);
    }
}

module.exports={connectDB};