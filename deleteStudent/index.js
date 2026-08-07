const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, DeleteCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    await docClient.send(
        new DeleteCommand({
            TableName: "Students",
            Key: {
                studentId: body.studentId
            }
        })
    );

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: "Student Deleted Successfully"
        })
    };
};