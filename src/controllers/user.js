import user from "../models/user.js";
import bcrypt from "bcrypt";
import { registerSchema } from '../validations/user.js'

const register = async (req, res) => {
    try {
      const reqData = req.body; //password: Sanu@123 //reqData.password
  
      const result = registerSchema.validate(reqData);
      if (result.error) {
        return res
          .status(400)
          .send({ status: false, message: result.error.details[0].message });
      }
  
      const duplicateData = await user.findOne({
        $or: [{ email: reqData.email }, { phone: reqData.phone }],
      });
      if (duplicateData) {
        return res
          .status(400)
          .send({ status: false, message: "Email or Phone is already register" });
      }
  
      const salt = await bcrypt.genSalt(10);
      reqData.password = await bcrypt.hash(reqData.password, salt);
  
      const savedData = await user.create(reqData);
      return res
        .status(201)
        .send({ status: true, message: "Success", data: savedData });
    } catch (error) {
      return res.status(500).send({ status: false, message: error });
    }
  };

const login = (req, res) => {
   
}

export default { login, register };

