let mongoose = require("mongoose");
const express = require("express");
const app = express();
const Person = require("./person/person");
mongoose
    .connect("mongodb://localhost:27017/person")
    .then(() => console.log("jawek fesfes .. "))
    .catch((err) => console.log(err));

//Create and Save a Record of a Model:
app.post("/person", (req, res) => {
    const person = new Person({
        name: "Fedi Jaaderi",
        age: 21,
        favoriteFoods: ["Gondi", "l7am l7louf", "Ojja fruit de mer"],
    });
    person.save(() => {
        console.log("Person Added successfully !!!");
    });
    res.send({ person: person, msg: "added" });
});
app.listen(5000, (err) => {
    err ? console.log(err) : console.log("server is runing");
});




persons = [
    {
        name: "marwen",
        age: 24,
        favoriteFoods: ["l7am larneb", "djej", "petitfour"]
    },
    {
        name: "feriel ",
        age: 32,
        favoriteFoods: ["pizza", "djej", "cheescake"]

    },
    {
        name: "mohamed",
        age: 29,
        favoriteFoods: ["couscous", "scalop", "3ejja mergeuzz"]

    },
    {
        name: "aymen",
        age: 28,
        favoriteFoods: ["3ejja fruit de mere", "cruvette ", "couscous"]

    },
    {
        name: "mihed",
        age: 31,
        favoriteFoods: ["spaghetti", "djej", "pizza 4 seson"]

    },
    {
        name: "marry",
        age: 22,
        favoriteFoods: ["l7am larneb", "3alouch", "jmal"]
    },
    {
        name: "marry",
        age: 60,
        favoriteFoods: ["rechta", "chorba", "broudou avec fruit"]
    }
]

// Create Many Records with model create:


// Person.create(persons, (err, data) => {
//     err ? console.log(err) : console.log("jaweek fessfess")
// })




// Use model find to Search Your Database : 

// Person.find({}, (err, data) => {
//     err ? console.log(err) : console.log(data)
// }
// )



// Use model findOne to Return a Single Matching Document from Your Database :


// Person.findOne({ favoriteFoods: "l7am l7louf" }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// }
// )

// Use model findById to Search Your Database By id :

// Person.findById({ _id: "61715e1c204217e91d7e17d8" }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// }
// )


// Perform Classic Updates by Running Find, Edit, then Save :

// Person.findByIdAndUpdate("61715e1c204217e91d7e17d4", { $push: { favoriteFoods: "hamburger" } }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// })


// Perform New Updates on a Document Using model findOneAndUpdate :

// Person.findOneAndUpdate({ name: "feriel " }, { age: 20 }, { new: true }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// })


// Delete One Document Using model findByIdAndRemove:

// Person.findByIdAndRemove({ _id: "61715e1c204217e91d7e17d2" }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// })


// MongoDB and Mongoose  Delete Many Documents with model remove:


// Person.deleteMany({ name: "marry" }, (err, data) => {
//     err ? console.log(err) : console.log(data)
// })



// Chain Search Query Helpers to Narrow Search Results :

// Person.find({ favoriteFoods: "couscous" })
//     .sort({ name: 1 })
//     .limit(2)
//     .select({ age: 0 })
//     .exec((err, data) => {
//         err ? console.log(err) : console.log(data)
//     })