import * as __aws_sdk_bucket_endpoint_middleware from "@aws-sdk/bucket-endpoint-middleware";
import * as __aws_sdk_hash_node from "@aws-sdk/hash-node";
import * as __aws_sdk_middleware_header_default from "@aws-sdk/middleware-header-default";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_ssec_middleware from "@aws-sdk/ssec-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { HeadObject } from "../model/operations/HeadObject";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { HeadObjectInput } from "../types/HeadObjectInput";
import { HeadObjectOutput } from "../types/HeadObjectOutput";
import { S3ResolvedConfiguration } from "../S3Configuration";
export * from "../types/HeadObjectInput";
export * from "../types/HeadObjectOutput";
export * from "../types/HeadObjectExceptionsUnion";

export class HeadObjectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      HeadObjectInput,
      OutputTypesUnion,
      HeadObjectOutput,
      S3ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = HeadObject;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    HeadObjectInput,
    HeadObjectOutput,
    _stream.Readable
  >();

  constructor(readonly input: HeadObjectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: S3ResolvedConfiguration
  ): __aws_sdk_types.Handler<HeadObjectInput, HeadObjectOutput> {
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
    stack.add(
      __aws_sdk_middleware_header_default.headerDefault({
        "Content-Type": "application/octet-stream"
      }),
      {
        step: "build",
        priority: -50,
        tags: { "Content-Type": true }
      }
    );
    stack.add(
      __aws_sdk_ssec_middleware.ssecMiddleware<HeadObjectInput>({
        base64Encoder: configuration.base64Encoder,
        hashConstructor: configuration.md5,
        ssecProperties: {
          $serverSideEncryptionKey: {
            targetProperty: "SSECustomerKey",
            hashTargetProperty: "SSECustomerKeyMD5"
          }
        },
        utf8Decoder: configuration.utf8Decoder
      }),
      {
        step: "initialize",
        priority: 0
      }
    );
    return stack.resolve(
      handler<HeadObjectInput, HeadObjectOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
