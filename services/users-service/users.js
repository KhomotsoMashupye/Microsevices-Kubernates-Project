const express = require('express');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const app = express();
app.use(express.json());

// DynamoDB setup
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });
const USERS_TABLE = 'Users';

// Get all users
app.get('/users', async (req, res) => {
    try {
        const result = await dynamo.scan({ TableName: USERS_TABLE }).promise();
        res.json(result.Items);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching users', details: err });
    }
});

// Create a new user
app.post('/users', async (req, res) => {
    const newUser = { userId: uuidv4(), ...req.body };
    try {
        await dynamo.put({ TableName: USERS_TABLE, Item: newUser }).promise();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Error creating user', details: err });
    }
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Users Service running on port ${PORT}`));
