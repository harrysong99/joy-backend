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

  updateUserLocation: async (userEmail, userLocation) => {
    // find user and update location
    const user = await User.findOneAndUpdate(
      { email: userEmail },
      { location: userLocation },
      { useFindAndModify: false, returnOriginal: false }
    );
    // if successful, create response
    if (user) {
      return { success: true, userData: user };
    } else {
      return { success: false, errmsg: "update not valid!" };
    }
  },

  updateUserServiceTime: async (userEmail, userServiceTime) => {},

  updateUserDriver: async (userEmail, userDriver) => {},

  deleteUser: async () => {},
};
