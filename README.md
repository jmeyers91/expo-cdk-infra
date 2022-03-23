# expo-cdk-infra

This project was scaffolded using the [CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/cli.html#cli-init).

This repository exists to demonstrate deploying an [Expo](https://expo.dev/) app using the [AWS CDK Codebuild module](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_codebuild-readme.html).

## Setup

1. Install `eas-cli` globally

```
npm install -g eas-cli
# or
yarn global add eas-cli
```

2. Install dependencies

```
npm i
# or
yarn
```

3. Generate an Expo access token here: https://expo.dev/settings/access-tokens
4. Save the access token in AWS Secrets Manager in plaintext as "expo-token".

## Useful commands

- `npm run build` compile typescript to js
- `npm run watch` watch for changes and compile
- `npm run test` perform the jest unit tests
- `cdk deploy` deploy this stack to your default AWS account/region
- `cdk diff` compare deployed stack with current state
- `cdk synth` emits the synthesized CloudFormation template
