import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDevicePools } from "../model/operations/ListDevicePools";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDevicePoolsInput } from "../types/ListDevicePoolsInput";
import { ListDevicePoolsOutput } from "../types/ListDevicePoolsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListDevicePoolsInput";
export * from "../types/ListDevicePoolsOutput";
export * from "../types/ListDevicePoolsExceptionsUnion";

export class ListDevicePoolsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDevicePoolsInput,
      OutputTypesUnion,
      ListDevicePoolsOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = ListDevicePools;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDevicePoolsInput,
    ListDevicePoolsOutput,
    Blob
  >();

  constructor(readonly input: ListDevicePoolsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListDevicePoolsInput, ListDevicePoolsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDevicePoolsInput, ListDevicePoolsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
