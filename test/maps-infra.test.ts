import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as MapsInfra from "../lib/maps-infra-stack";

test("S3 Created", () => {
  const app = new cdk.App();
  const stack = new MapsInfra.MapsInfraStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::S3::Bucket", {});
});

test("CloudFront Created", () => {
  const app = new cdk.App();
  const stack = new MapsInfra.MapsInfraStack(app, "MyTestStack");
  const template = Template.fromStack(stack);

  template.hasResourceProperties("AWS::CloudFront::Distribution", {
    DistributionConfig: {
      PriceClass: "PriceClass_100",
    },
  });
});
