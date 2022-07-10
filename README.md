# CDK Commands

* `cdk init app --language typescript`   initilize cdk project.
* `cdk bootstrap` creates a cloud formation account 

# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk deploy {specifyStackName}`      deploy particular stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk destroy specifyStackName}`     delete sepecified stack
* `cdk synth`       emits the synthesized CloudFormation template
* `cdk doctor`      helps finds if there's any problem in the stack
* `cdk deploy --parameters duration=10` for sepecifying parameters while deployment.
