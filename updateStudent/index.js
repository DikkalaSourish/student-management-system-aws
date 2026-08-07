const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, UpdateCommand } = require("@aws-sdk/lib-dynamodb");

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    await docClient.send(
        new UpdateCommand({
            TableName: "Students",
            Key: {
                studentId: body.studentId
            },
            UpdateExpression: "SET #n = :name, email = :email, phone = :phone, department = :department, #y = :year, cgpa = :cgpa, address = :address",
            ExpressionAttributeNames: {
                "#n": "name",
                "#y": "year"
            },
            ExpressionAttributeValues: {
                ":name": body.name,
                ":email": body.email,
                ":phone": body.phone,
                ":department": body.department,
                ":year": body.year,
                ":cgpa": body.cgpa,
                ":address": body.address
            }
        })
    );

    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message: "Student Updated Successfully"
        })
    };

};