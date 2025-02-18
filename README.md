# Serverless CRUD API with DynamoDB

This project demonstrates how to create a CRUD API using the Serverless Framework and AWS DynamoDB.

## Prerequisites

- AWS account
- AWS CLI configured
- Node.js and npm installed
- Serverless Framework installed (`npm install -g serverless`)

## Project Setup

## Usage
```
$ npm install
```

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Creating Stack...
Serverless: Checking Stack create progress...
........
Serverless: Stack create finished...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service aws-node-http-api.zip file to S3 (711.23 KB)...
Serverless: Validating template...
....
```

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following:

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless ! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```



### You can start local evaluation with:
```bash
serverless offline
```

