import { CfnOutput, CfnParameter, Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as sqs from 'aws-cdk-lib/aws-s3';
import { Bucket } from 'aws-cdk-lib/aws-s3';

export class AwsCdkLearningStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const duration = new CfnParameter(this, 'duration', {
      type: 'Number',
      default: 6,
      minValue: 1,
      maxValue: 10
    })
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'AwsCdkLearningQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const myBucket = new Bucket(this, 'bucket-1', {
      lifecycleRules: [
        {
          expiration: Duration.days(duration.valueAsNumber)
        }
      ]
    })

    new CfnOutput(this, 'myBucket', {
      value: myBucket.bucketName
    })
  }
}
