import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPlatformVersions } from "../model/operations/ListPlatformVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPlatformVersionsInput } from "../types/ListPlatformVersionsInput";
import { ListPlatformVersionsOutput } from "../types/ListPlatformVersionsOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/ListPlatformVersionsInput";
export * from "../types/ListPlatformVersionsOutput";
export * from "../types/ListPlatformVersionsExceptionsUnion";

export class ListPlatformVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPlatformVersionsInput,
      OutputTypesUnion,
      ListPlatformVersionsOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPlatformVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPlatformVersionsInput,
    ListPlatformVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPlatformVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListPlatformVersionsInput,
    ListPlatformVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPlatformVersionsInput, ListPlatformVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
