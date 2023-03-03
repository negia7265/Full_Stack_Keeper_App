const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const uri =
  "mongodb+srv://negia7265:7300789205@cluster0.ws32dt9.mongodb.net/KeepersApp?retryWrites=true&w=majority";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(uri, options)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Error connecting to MongoDB Atlas:", err));

const noteSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const Keeper = mongoose.model("keeper", noteSchema);
//Keeper.find({}).then((data) => console.log(data));
module.exports = Keeper;
