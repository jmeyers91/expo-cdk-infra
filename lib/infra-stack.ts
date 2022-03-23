import { Stack } from "aws-cdk-lib";
import * as codebuild from "aws-cdk-lib/aws-codebuild";
import { BuildEnvironmentVariableType } from "aws-cdk-lib/aws-codebuild";

export class InfraStack extends Stack {
  public readonly codebuildProject = new codebuild.Project(
    this,
    "CodebuildProject",
    {
      environment: {
        environmentVariables: {
          EXPO_TOKEN: {
            type: BuildEnvironmentVariableType.SECRETS_MANAGER,
            // Generate token in the Expo console here: https://expo.dev/settings/access-tokens
            // Needs to be set in AWS Secrets Manager
            value: "expo-token",
          },
        },
      },
      source: codebuild.Source.gitHub({
        owner: "jmeyers91",
        repo: "expo-cdk-app",
        webhook: true,
        webhookFilters: [
          codebuild.FilterGroup.inEventOf(
            codebuild.EventAction.PUSH
          ).andBranchIs("main"),
        ],
      }),
    }
  );
}
