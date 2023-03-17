import mongoose, { InferSchemaType } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    publications: [
      {
        id: String,
        imgLink: String,
        description: String,
        likes: Array,
        comments: Array,
        date: Date,
        avatar: String,
        username: String,
        name: String,
      },
    ],
    followers: [
      {
        id: String,
        username: String,
        name: String,
        avatar: String,
      },
    ],
    following: [
      {
        id: String,
        username: String,
        name: String,
        avatar: String,
      },
    ],
    avatar: {
      type: String,
    },
    description: {
      type: String,
    },
    recentUsers: [
      {
        id: String,
        username: String,
        name: String,
        avatar: String,
      },
    ],
    notifications: [
      {
        id: String,
        username: String,
        name: String,
        avatar: String,
        notificationType: String,
        wasViewed: Boolean,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.methods.comparePassword = async function (password: string) {
  const validation = await bcrypt.compare(password, this.password);
  return validation;
};

userSchema.methods.generateHash = function (password: string) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};

interface userSchemaModel extends InferSchemaType<typeof userSchema> {
  comparePassword: (password: string) => boolean;
  generateHash: (password: string) => string;
}

export const UserModel = mongoose.model<userSchemaModel>("users", userSchema);
