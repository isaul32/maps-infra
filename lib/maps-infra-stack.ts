import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { aws_s3 as s3 } from "aws-cdk-lib";
import { aws_cloudfront as cloudfront } from "aws-cdk-lib";
import { aws_cloudfront_origins as origins } from "aws-cdk-lib";
import { PriceClass } from "aws-cdk-lib/aws-cloudfront";

export class MapsInfraStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const mapsTilesBucket = new s3.Bucket(this, "mapsTilesBucket", {});

    new cloudfront.Distribution(this, "mapsTilesDistribution", {
      defaultBehavior: { origin: new origins.S3Origin(mapsTilesBucket) },
      priceClass: PriceClass.PRICE_CLASS_100,
    });
  }
}
