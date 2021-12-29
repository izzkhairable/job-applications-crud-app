import { GetItemCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddbClient.js';
import AWS from 'aws-sdk';

const params = {
	TableName: 'job_applications_crud_app', //TABLE_NAME
};

const ddbGetOne = async (item_id) => {
	const ddb_data = await ddbClient.send(
		new GetItemCommand({
			...params,
			Key: {
				id: { S: item_id },
			},
		})
	);
	const json_data = AWS.DynamoDB.Converter.unmarshall(ddb_data.Item);
	console.log(json_data);
	return json_data;
};

export default ddbGetOne;
