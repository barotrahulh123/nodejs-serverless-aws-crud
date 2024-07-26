const AWS = require('aws-sdk');
const { v4 } = require('uuid');

const dynamodb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const initialData = [
  {
    id: v4(),
    title: 'Initial Task 1',
    description: 'This is the first initial task',
    createdAt: new Date().toISOString(),
    done: false
  },
  {
    id: v4(),
    title: 'Initial Task 2',
    description: 'This is the second initial task',
    createdAt: new Date().toISOString(),
    done: false
  }
];

const migrate = async () => {
  try {
    for (const item of initialData) {
      await dynamodb.put({
        TableName: 'TaskTable',
        Item: item
      }).promise();
      console.log(`Inserted item with id: ${item.id}`);
    }
    console.log('Migration completed successfully.');
  } catch (error) {
    console.error('Error during migration:', error);
  }
};

migrate();
