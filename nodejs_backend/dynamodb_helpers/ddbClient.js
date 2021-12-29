// Create service client module using ES6 syntax.
import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { fromIni } from '@aws-sdk/credential-provider-ini';
// Set the AWS Region.
const REGION = 'ap-southeast-1'; //e.g. "us-east-1"
// Create an Amazon DynamoDB service client object.
const ddbClient = new DynamoDBClient({
	region: REGION,
	credentials: fromIni({ profile: 'personalAccount' }),
});
export { ddbClient };
