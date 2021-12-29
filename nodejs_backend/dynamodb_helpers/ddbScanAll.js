import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { ddbClient } from './ddbClient.js';
import AWS from 'aws-sdk';

const params = {
	TableName: 'job_applications_crud_app',
};

const ddbScanAll = async () => {
	try {
		const data = await ddbClient.send(new ScanCommand(params));
		console.log('original', data.Items);
		let json_data = [];
		data.Items.forEach(function (element, index, array) {
			json_data.push(AWS.DynamoDB.Converter.unmarshall(element));
		});
		console.log('json', json_data);
		return json_data;
	} catch (err) {
		console.log('Error', err);
	}
};

export default ddbScanAll;
