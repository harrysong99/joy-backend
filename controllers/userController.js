const User = require("../models/userModel");

module.exports = {
  getUser: async (userEmail) => {
    const res = await User.findOne({ email: userEmail }).then((user) => {
      if (!user) {
        return { success: false, errmsg: "email not found in users" };
      } else {
        console.log("success!");
        return { success: true, userData: user };
      }
    });
    return res;
  },

  updateUser: async () => {},

  deleteUser: async () => {},
};
