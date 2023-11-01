import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const UiCompSchema = new Schema({
  html: {
    type: String,
    required: [true, "HTML code is required!"],
  },
  css: {
    type: String,
    required: [true, "CSS code is required!"],
  },
  type: {
    type: String,
    enum: ["button", "form", "loader", "inputs", "card"],
    required: [true, "Component type is required!"],
  },
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Referencing the User model
    required: true,
  },
});

const UiComp = models.UiComp || model("UiComp", UiCompSchema);

export default UiComp;
