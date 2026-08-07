const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {

    console.log("EVENT =", JSON.stringify(event));

    const body = JSON.parse(event.body);

    await docClient.send(
        new PutCommand({
            TableName: "Students",
            Item: body
        })
    );

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: "Student added successfully"
        })
    };
};