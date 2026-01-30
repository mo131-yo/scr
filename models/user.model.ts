import { Model, model, models, Schema} from "mongoose";

enum UserRole {
    USER= "USER",
    ADMIN = "ADMIN",
}

    type User= {
    _id?:string;
    email: string;
    password: string
    phoneNumber?: string;
    address: string;
    name: string;
    role: UserRole;
    username: string;
    isVerified: boolean;
    };


    const UserSchema= new Schema<User>({
     _id: { type: Schema.Types.ObjectId },
    name: [{type: String, required: true}],
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    role: {type: String, enum: Object.values(UserRole), default: UserRole.USER, required: true},
    isVerified: { type: Boolean, default: false, required: true},
    phoneNumber: {type: String},
    address: {type: String, required: true}
   },
   {timestamps: true},
  );

export const UserModel= models["User"] || model("User", UserSchema);