const express = require('express');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

// DynamoDB setup
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const ORDERS_TABLE = 'Orders';

// Get all orders
app.get('/orders', async (req, res) => {
    try {
        const result = await dynamo.scan({ TableName: ORDERS_TABLE }).promise();
        res.json(result.Items);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching orders', details: err });
    }
});

// Create a new order
app.post('/orders', async (req, res) => {
    const newOrder = { orderId: uuidv4(), ...req.body };
    try {
        await dynamo.put({ TableName: ORDERS_TABLE, Item: newOrder }).promise();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: 'Error creating order', details: err });
    }
});

const PORT = 3002;
app.listen(PORT, () => console.log(`Orders Service running on port ${PORT}`));
