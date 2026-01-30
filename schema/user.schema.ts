import { models, model, Schema } from "mongoose";
 
type User ={
  name: string;
  email: string;
  password: string;
}
const userSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true},
},
{timestamps: true},
);
export const UserModel = models["User"] || model("User", userSchema);