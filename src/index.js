// ---------------------------------
// Boilerplate Code to Set Up Server
// ---------------------------------
import express from "express" //Express framework used to build web servers and APIs
import fs from "fs/promises" //File system module with promise support (used to read files asynchronously)

// Creating an instance of the express module so that we can use all the methods that come with it
// This creates your Express application.
// app is now your server object where you define routes like app.get().
const app = express()

// Tell express which port to listen to to receive requests
// Defines the port number your server will run on.
// You access it in the browser at:http://localhost:3000
const port = 3000;

// This server will be receiving JSON and responding in JSON
// This middleware tells express "If the client sends JSON in the request body, 
// and automatically convert it into a JavaScript object."
// Without this line, Express cannot read JSON request bodies.
app.use(express.json())

// -----This Starts the server.-------
// Makes it listen for incoming requests. 
// and Logs a message to confirm the server is running.
// The Output in terminal: My server is listening on port: 3000
app.listen(port, () => {
  console.log(`My server is listening on port: ${port}`)
})

// ---------------------------------
// Helper Functions
// ---------------------------------

// ---------------------------------
// Our very first API Endpoints
// ---------------------------------

// --------------------------------
// 🚀 LEVEL 1 CHALLENGES 
// --------------------------------

// 1. 🏆 Add a /goodbye endpoint that responds with "Goodbye, see you later!"
app.get("/goodbye", (req, res) => {
    res.send("Goodbye, see you later!");
  });
  


// 2. 🏆 Add a /happy-birthday endpoint that responds with "Happy birthday!!!"
app.get("/happy-birthday", (req, res) => {
    res.send("Happy birthday!!!");
  });
  

// --------------------------------
// 🚀 LEVEL 2 CHALLENGES — ADDING DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /happy-birthday/:name endpoint says "Happy birthday, [name]!!!"
app.get("/happy-birthday/:name", (req, res) => {
    const name = req.params.name;
    res.send(`Happy birthday, ${name}!!!`);
  });


// 2. 🏆 Add a /say-hello/:name/:language endpoint that says hello in multiple languages. Examples:
//      - If language = "English", respond with "Hello, [name]!"
//      - If language = "Spanish", respond with "Hola, [name]!"
//      - If language = "Vietnamese", respond with "Xin chao, [name]!"
//      - If language = "Turkish", respond with "Merhaba, [name]!"
//      - Add as many languages as you want! 
//      - Otherwise, respond with "Language not supported."" 
app.get("/say-hello/:name/:language", (req, res) => {
    const name = req.params.name;
    const language = req.params.language;
  
    let greeting;
  
    if (language === "English") {
      greeting = `Hello, ${name}!`;
    } else if (language === "Spanish") {
      greeting = `Hola, ${name}!`;
    } else if (language === "Vietnamese") {
      greeting = `Xin chao, ${name}!`;
    } else if (language === "Turkish") {
      greeting = `Merhaba, ${name}!`;
    } else {
      greeting = "Language not listed.";
    }
  
    res.send(greeting);
  });


//    tested  http://localhost:3000/say-hello/Tee/English



// --------------------------------
// 🚀 LEVEL 3 CHALLENGES — EVEN MORE DYNAMIC PARAMETERS
// --------------------------------

// 1. 🏆 Add a /calculate-dog-years/:dogName/:humanYears endpoint that calculates a dog's age in dog years. Refer to your dogAgeCalculator.js file. 

// 2. 🏆 Add a /calculate-tip/:bill/:tipPercentage/:numGuests endpoint that calculates the amount each guests owes. Refer to your tipCalculator.js file. 

// --------------------------------
// LEVEL 4 CHALLENGES — USING THE FILE SYSTEM MODULE
// --------------------------------

// 1. 🏆 Add a /get-birthstone/:month endpoint that tells the user the birthstone for the inputted month using the fs module. Use the birthstones-data.json file in this folder.

// 2. 🏆 Add a /get-all-pizza-orders endpoint that responds with the array of pizza orders. Use the pizza-orders-data.json file in this folder.

// 3. 🏆 Add a /get-one-pizza-order/:index endpoint that responds with the specified pizza order. 

// --------------------------------
// 🚀 LEVEL 5 CHALLENGES — USING THIRD-PARTY MODULES
// --------------------------------

// 1. 🏆 Add a /is-leap-year/:year endpoint that responds with whether the specified year is a leap year. Use the moment third-party node module and refer to your leap-year.js file.

// 2. 🏆 Add a /get-signs/:month/:day/:year endpoint that responds with the user's astrological and zodiac signs based on their inputted birthday. Use the horoscope third-party node module and refer to your sign-finder.js file.

