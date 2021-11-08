const User = require("../models/user.model");

module.exports.createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then((data) => {
      return res.status(200).json({
        data: data,
        error: null,
        message: "User details saved successfuly",
      });
    })
    .catch((err) => {
      return res.status(400).json({
        data: null,
        error: err.message,
        message: "Something went wrong while saving User details",
      });
    });
};
 
module.exports.getUser = (req, res) => {
    User.find({}).then((data) => {
        return res.status(200).json({
          data: data,
          error: null,
          message: "User details fetched successfuly",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          data: null,
          error: err.message,
          message: "Something went wrong while geting User details",
        });
      });
}

module.exports.getUserbyId = (req, res) => {
    User.find({_id: req.params.id}).then((data) => {
        return res.status(200).json({
          data: data,
          error: null,
          message: "User details fetched successfuly",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          data: null,
          error: err.message,
          message: "Something went wrong while geting User details",
        });
      });
}

module.exports.updateUser = async (req, res) => {
    try{
        const id = req.params.id
        const {name, username} = req.body
            const updated= await User.findByIdAndUpdate(id, {name, username},  {new: true})
            res.json({ message: updated });
        }

     catch(err){
        return res.status(400).json({
            data: null,
            error: err.message,
            message: "Something went wrong while geting User details",
          });
    }
}

module.exports.deleteUser = (req, res) => {
    User.findOneAndDelete({_id: req.params.id}).then((data) => {
        return res.status(200).json({
          error: null,
          message: "User details deleted successfuly",
        });
      })
      .catch((err) => {
        return res.status(400).json({
          error: err.message,
          message: "Something went wrong while deleting User details",
        });
      });
}