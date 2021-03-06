import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExecuteStatement } from "../model/operations/ExecuteStatement";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExecuteStatementInput } from "../types/ExecuteStatementInput";
import { ExecuteStatementOutput } from "../types/ExecuteStatementOutput";
import { RDSDataResolvedConfiguration } from "../RDSDataConfiguration";
export * from "../types/ExecuteStatementInput";
export * from "../types/ExecuteStatementOutput";
export * from "../types/ExecuteStatementExceptionsUnion";

export class ExecuteStatementCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExecuteStatementInput,
      OutputTypesUnion,
      ExecuteStatementOutput,
      RDSDataResolvedConfiguration,
      Blob
    > {
  readonly model = ExecuteStatement;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExecuteStatementInput,
    ExecuteStatementOutput,
    Blob
  >();

  constructor(readonly input: ExecuteStatementInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSDataResolvedConfiguration
  ): __aws_sdk_types.Handler<ExecuteStatementInput, ExecuteStatementOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExecuteStatementInput, ExecuteStatementOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
