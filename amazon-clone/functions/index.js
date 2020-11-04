const functions = require('firebase-functions');
const express =require('express');
const cors = require('cors');
const stripe = require('stripe')(
    "sk_test_51Hh6RVLM09v9FY07DJvss8B63s1MKxZOAIx2ceNYFYV6CQ4r0PLBRgG3h5qwH0ekgMCBLPBUeNIlZiCFOIEdfG7D00dKUPi17e"
);

//app config
const app = express();
//Middleware
app.use(cors({origin:true}))
app.use(express.json())

// - API routes
app.get("/", async (request, response) => response.status(200).send("hello world"));

app.post("/payments/create",async (request, response) => {
    const total = request.query.total
    console.log("total is "+ total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunit
        currency: "usd"
    })

    response.status(201).send({
        clientSecret = paymentIntent.client_secret
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);