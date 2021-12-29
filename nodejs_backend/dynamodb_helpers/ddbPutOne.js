// Import required AWS SDK clients and commands for Node.js
import { PutItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddbClient.js';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const ddbPutOne = async (item) => {
	try {
		const params = {
			TableName: 'job_applications_crud_app',
			Item: { ...AWS.DynamoDB.Converter.marshall({ ...item, id: uuidv4() }) },
		};
		const data = await ddbClient.send(new PutItemCommand(params));
		console.log(data);
		return data;
	} catch (err) {
		console.error(err);
	}
};

export default ddbPutOne;
