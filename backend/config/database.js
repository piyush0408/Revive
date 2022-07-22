const mongoose = require("mongoose");

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;


// DB=mongodb+srv://lohiya_piyush04:Raghav1234$@cluster0.j1xxh.mongodb.net/ecommerce?retryWrites=true&w=majority