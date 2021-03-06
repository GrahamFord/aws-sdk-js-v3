import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CompleteMultipartUpload } from "../model/operations/CompleteMultipartUpload";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CompleteMultipartUploadInput } from "../types/CompleteMultipartUploadInput";
import { CompleteMultipartUploadOutput } from "../types/CompleteMultipartUploadOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/CompleteMultipartUploadInput";
export * from "../types/CompleteMultipartUploadOutput";
export * from "../types/CompleteMultipartUploadExceptionsUnion";

export class CompleteMultipartUploadCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CompleteMultipartUploadInput,
      OutputTypesUnion,
      CompleteMultipartUploadOutput,
      S3ResolvedConfiguration,
      Blob
    > {
  readonly model = CompleteMultipartUpload;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CompleteMultipartUploadInput,
    CompleteMultipartUploadOutput,
    Blob
  >();

  constructor(readonly input: CompleteMultipartUploadInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CompleteMultipartUploadInput,
    CompleteMultipartUploadOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_bucket_endpoint_middleware.bucketEndpointMiddleware({
        forcePathStyle: configuration.forcePathStyle,
        preformedBucketEndpoint: configuration.bucketEndpoint,
        useAccelerateEndpoint: configuration.useAccelerateEndpoint,
        useDualstackEndpoint: configuration.useDualstackEndpoint
      }),
      {
        step: "build",
        priority: 0
      }
    );
    return stack.resolve(
      handler<CompleteMultipartUploadInput, CompleteMultipartUploadOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
