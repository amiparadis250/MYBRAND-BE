const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

mongoose.connect("mongodb+srv://pishimweaime7:0722643071Is@mybrandcluster.ymb1wjj.mongodb.net", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        const app = express();
        app.use(express.json());
        
        // Use your routes
        app.use("/api", routes); // You can change "/api" to any base path you prefer

        const PORT = process.env.PORT || 5001;

        app.listen(PORT, () => {
            console.log(`Server has started on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });
