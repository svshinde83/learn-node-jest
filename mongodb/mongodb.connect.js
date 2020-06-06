const mongoose = require("mongoose");

async function connect() {
    try {
        await mongoose.connect(
           // "mongodb://test:test@ds147079.mlab.com:47079/mongo-express-angular-node",
            "mongodb://node-jest:node-jest1@ds027628.mlab.com:27628/node-jest-todo",
            {useNewUrlParser: true}
            // {useUnifiedTopology: true}
        );
    } catch (error) {
        console.error("Error on connecting mongodb " + error);

    }
}

module.exports = {connect};