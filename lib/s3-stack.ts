import * as cdk from "aws-cdk-lib";
import { Construct  } from "constructs";
import { aws_s3 } from "aws-cdk-lib";

interface s3parameterconfiguration extends cdk.StackProps{
  readonly service:string;
  readonly stg:string;

}
export class AWSs3Stack extends cdk.Stack {

  public readonly s3Bucket: aws_s3.Bucket;

  constructor(scope: Construct, id: string, props:s3parameterconfiguration) {
    super(scope, id, props);
    
    const s3Bucket = new aws_s3.Bucket(this, "aws-s3-deploy", {
      bucketName: `aws-cdk-${props.service}-${props.stg}-test`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: true,
    //   blockPublicAccess: aws_s3.BlockPublicAccess.BLOCK_ALL,
    //   encryption: aws_s3.BucketEncryption.S3_MANAGED,
    //   enforceSSL: true,

    });

    //this.s3Bucket = s3Bucket;

  }
}