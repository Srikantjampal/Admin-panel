import mongoose from "mongoose";
import { type } from "os";

const instructorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level:{type:String, required:trur},
  description: [{ type: String }],
  image: { type: String, default: "" },
});

const InstructorModel =
  mongoose.models.instructor || mongoose.model("instructor", instructorSchema);

export default InstructorModel;