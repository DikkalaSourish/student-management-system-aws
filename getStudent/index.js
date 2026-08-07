const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async () => {

    try {

        const data = await docClient.send(
            new ScanCommand({
                TableName: "Students"
            })
        );

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data.Items)
        };

    } catch (error) {

        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };

    }

};