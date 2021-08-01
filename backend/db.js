const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  "mongodb://localhost:27017/meanDB",
  { useNewUrlParser: true },
  (err) => {
    if (!err) {
      console.log("DB Connection Successful");
    } else {
      console.log("Error in Connection" + err);
    }
  }
);

module.exports = mongoose;
