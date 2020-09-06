const User = require("../models/userModel");

module.exports = {
  getUserByEmail: async (userEmail) => {
    const createRes = await User.findOne({ email: userEmail }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "email not found in users" };
      } else {
        console.log("success!");
        return { success: true, userData: user };
      }
    });
    return createRes;
  },

  getUserByName: async (userName) => {
    const createRes = await User.findOne({ name: userName }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "name not found in users" };
      } else {
        console.log("success!");
        return { success: true, userData: user };
      }
    });
    return createRes;
  },

  updateUser: async () => {},

  deleteUser: async () => {},
};
