import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    wishlist: [
      {
        propertyId: {
          type: ObjectId,
          ref: "Property",
          default: false,
        },
      },
    ],
    viewed: [
      {
        propertyId: {
          type: ObjectId,
          ref: "Property",
          default: false,
        },
      },
    ],
    enquired: [
      {
        propertyId: {
          type: ObjectId,
          ref: "Property",
          default: false,
        },
      },
    ],
    isAdmin:{
      type: Boolean,
      default: false,
    }
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
