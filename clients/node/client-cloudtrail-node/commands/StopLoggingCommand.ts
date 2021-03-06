import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopLogging } from "../model/operations/StopLogging";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopLoggingInput } from "../types/StopLoggingInput";
import { StopLoggingOutput } from "../types/StopLoggingOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/StopLoggingInput";
export * from "../types/StopLoggingOutput";
export * from "../types/StopLoggingExceptionsUnion";

export class StopLoggingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopLoggingInput,
      OutputTypesUnion,
      StopLoggingOutput,
      CloudTrailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopLogging;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopLoggingInput,
    StopLoggingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopLoggingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<StopLoggingInput, StopLoggingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopLoggingInput, StopLoggingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
