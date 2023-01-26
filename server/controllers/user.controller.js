// login

import { User } from "../model/user.model.js";

export const login = (req, res) => {
  const { userName, password } = req.body;

  try {
    // do something
  } catch (error) {
    // do something
  }
};

// register

export const registerUser = async (req, res) => {
  const { userName, password, email } = req.body;

  try {
    // check if user exists

    let userExists = await User.findOne({ email });

    if (userExists) {
      res.status(401).json({
        message: "user already exists. please login",
      });
    }

    let user = await User.create({
      name: userName,
      email,
      password, //todo- hash the password later
    });

    if (user) {
      res.status(201).json({
        message: "success",
        user, // dont send all data- edit this later. exclude password
        token: "abc", // will generate this later
      });
    } else {
      res.status(400).json({
        message: "something went wrong-invalid data",
      });
    }
  } catch (error) {
    res.json({
      status: "not ok", //-clear this shit
      message: error.message,
    });
  }
};

// profile

// update profile
