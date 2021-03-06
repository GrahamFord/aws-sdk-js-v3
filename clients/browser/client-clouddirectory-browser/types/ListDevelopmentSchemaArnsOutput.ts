import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListDevelopmentSchemaArnsOutput shape
 */
export interface ListDevelopmentSchemaArnsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARNs of retrieved development schemas.</p>
   */
  SchemaArns?: Array<string>;

  /**
   * <p>The pagination token.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
