const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://rsinghsahil91:KcCjfg6xEeBvqKTO@cluster0.s81ch.mongodb.net/GoFood?retryWrites=true&w=majority&appName=Cluster0";

mongoose.set("strictQuery", true);


const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
    if (!err) {
      console.log("connected");
      const fetchedData = mongoose.connection.db.collection("FoodList");

      fetchedData.find({}).toArray(async function (err, data) {
        const foodCategory = await mongoose.connection.db.collection("Category");
        foodCategory.find({}).toArray(function (err, catData){
          if(err) console.log(err);
          else global.Category = catData;
        })
        try{
          global.FoodList = data;
          // console.log(global.FoodList)
        }
        catch{
            console.log(err);
        }
      });
    } else {
      console.log(err);
    }
  });
};

module.exports = mongoDB;