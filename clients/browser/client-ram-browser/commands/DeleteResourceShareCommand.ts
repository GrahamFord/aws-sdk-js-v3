import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResourceShare } from "../model/operations/DeleteResourceShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourceShareInput } from "../types/DeleteResourceShareInput";
import { DeleteResourceShareOutput } from "../types/DeleteResourceShareOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/DeleteResourceShareInput";
export * from "../types/DeleteResourceShareOutput";
export * from "../types/DeleteResourceShareExceptionsUnion";

export class DeleteResourceShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResourceShareInput,
      OutputTypesUnion,
      DeleteResourceShareOutput,
      RAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteResourceShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourceShareInput,
    DeleteResourceShareOutput,
    Blob
  >();

  constructor(readonly input: DeleteResourceShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResourceShareInput,
    DeleteResourceShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResourceShareInput, DeleteResourceShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
