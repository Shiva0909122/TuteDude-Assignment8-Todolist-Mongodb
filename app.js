const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/dataFruit", { useNewUrlParser: true, useUnifiedTopology: true });

const fruitsSchema = new mongoose.Schema({
    name: String,
    rating: Number
});

const Fruit = mongoose.model("Fruit", fruitsSchema);

const element1 = new Fruit({
    name: "Apple",
    rating: 9
});

const element2 = new Fruit({
    name: "Banana",
    rating: 9
});

const element3 = new Fruit({
    name: "Red Apple",
    rating: 4
});

const element4 = new Fruit({
    name: "Green Apple",
    rating: 9
});

Fruit.insertMany([element1, element2, element3, element4])
    .then(() => {
        console.log("Documents inserted successfully");
        mongoose.connection.close(); // Closing the connection after successful insertion
    })
    .catch(err => {
        console.error(err);
    });
