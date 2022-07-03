/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51LGt3tD8Xqz5qk8QomeFC4kSg4pgbuJttFbm71D56s4wrCy5hN5N9qnY0TfWokmlJMcLbTiBzuyF3cBthNrb62t500A2btM3Jg");

const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (requrest, response) => response.status(200).send("hello"));

app.post("/payments/create", async (request, response) => {
		console.log(response.status)
		const total = request.query.total;
		console.log("Payment request: ", total);

		const paymentIntent = await stripe.paymentIntents.create({
			amount: total,
			currency: "usd"
		});

		response.status(201).send({
			clientSecret: paymentIntent.client_secret,
		});
	})

exports.api = functions.https.onRequest(app);


//  http://localhost:5001/fir-3d151/us-central1/api