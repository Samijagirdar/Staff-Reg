const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("Connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

User.insertMany([
  { name: "Tony", email: "tony@gmail.com", age: 48 },
  { name: "Bruce", email: "bruce@gmail.com", age: 48 },
  { name: "Inayat", email: "inayat@gmail.com", age: 48 },
]).then((res) => {
  console.log(res);
});

// const user3 = new User({
//   name: "Moin",
//   email: "moin@yahoo.com",
//   age: 50,
// });

// user3
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
