import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRun } from "../model/operations/GetRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRunInput } from "../types/GetRunInput";
import { GetRunOutput } from "../types/GetRunOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetRunInput";
export * from "../types/GetRunOutput";
export * from "../types/GetRunExceptionsUnion";

export class GetRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRunInput,
      OutputTypesUnion,
      GetRunOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = GetRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRunInput,
    GetRunOutput,
    Blob
  >();

  constructor(readonly input: GetRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRunInput, GetRunOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRunInput, GetRunOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
