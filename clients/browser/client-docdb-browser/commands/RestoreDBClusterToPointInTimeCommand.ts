import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreDBClusterToPointInTime } from "../model/operations/RestoreDBClusterToPointInTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBClusterToPointInTimeInput } from "../types/RestoreDBClusterToPointInTimeInput";
import { RestoreDBClusterToPointInTimeOutput } from "../types/RestoreDBClusterToPointInTimeOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/RestoreDBClusterToPointInTimeInput";
export * from "../types/RestoreDBClusterToPointInTimeOutput";
export * from "../types/RestoreDBClusterToPointInTimeExceptionsUnion";

export class RestoreDBClusterToPointInTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBClusterToPointInTimeInput,
      OutputTypesUnion,
      RestoreDBClusterToPointInTimeOutput,
      DocDBResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreDBClusterToPointInTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBClusterToPointInTimeInput,
    RestoreDBClusterToPointInTimeOutput,
    Blob
  >();

  constructor(readonly input: RestoreDBClusterToPointInTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBClusterToPointInTimeInput,
    RestoreDBClusterToPointInTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreDBClusterToPointInTimeInput,
        RestoreDBClusterToPointInTimeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
