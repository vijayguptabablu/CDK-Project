import * as cdk from "aws-cdk-lib";
import { Construct  } from "constructs";
import { aws_lambda, Duration } from "aws-cdk-lib";
import * as path from 'path';
export class AWSlambdaStack extends cdk.Stack {

  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);
    
    const s3Bucket = new aws_lambda.Function(this, "aws-lambda-deploy", {
      functionName: "aws-lambda-cdktest",
     handler:"index.handler",
     runtime:aws_lambda.Runtime.PYTHON_3_10,
     code: aws_lambda.Code.fromInline(`def handler(event, context):return {"statusCode": 200, "body": "Hello, World!"} `),
     timeout: Duration.minutes(5),
      

    });

    //this.s3Bucket = s3Bucket;

  }
}