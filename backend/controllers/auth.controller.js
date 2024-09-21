import User from "../models/user.model";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exist" });
  }

  const user = await User.create({ name, email, password });

  res.send(201).json({ user, mesage: "User created successfully" });
};

export const login = async (req, res) => {
  res.send("sign up route called");
};
export const logout = async (req, res) => {
  res.send("sign up route called");
};
