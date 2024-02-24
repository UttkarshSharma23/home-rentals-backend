const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors");


//Handling the CORS policy issue: Giving access to CORS and acting as a middleware
const corsOptions = {
  origin:"http://localhost:3000",
  methods:"GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials:true,
}
app.use(cors(corsOptions));

/* MONGOOSE SETUP */
mongoose
  .connect('mongodb+srv://uttkarshsharma:EmkghhrQRLg9Batn@home.n8go9wm.mongodb.net/?retryWrites=true&w=majority&appName=home')
  .then(
    console.log("MongoDB Connected Successfully!")
  )
  .catch((error) => console.log("Error connecting to MongoDB", error));


const authRoutes = require("./routes/auth.js")
const listingRoutes = require("./routes/listing.js")
const bookingRoutes = require("./routes/booking.js")
const userRoutes = require("./routes/user.js")

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* ROUTES */
app.use("/auth", authRoutes)
app.use("/properties", listingRoutes)
app.use("/bookings", bookingRoutes)
app.use("/users", userRoutes)



  const PORT = 3001;

  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });