import mongoose, { Schema, models } from "mongoose";

const contactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // automatically gives each message: (( createdAt, updatedAt  ))
  }
);

const ContactMessage =
  models.ContactMessage ||
  mongoose.model("ContactMessage", contactMessageSchema);

export default ContactMessage;