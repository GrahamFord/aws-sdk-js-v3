import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDBCluster } from "../model/operations/DeleteDBCluster";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDBClusterInput } from "../types/DeleteDBClusterInput";
import { DeleteDBClusterOutput } from "../types/DeleteDBClusterOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DeleteDBClusterInput";
export * from "../types/DeleteDBClusterOutput";
export * from "../types/DeleteDBClusterExceptionsUnion";

export class DeleteDBClusterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDBClusterInput,
      OutputTypesUnion,
      DeleteDBClusterOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDBCluster;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDBClusterInput,
    DeleteDBClusterOutput,
    Blob
  >();

  constructor(readonly input: DeleteDBClusterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDBClusterInput, DeleteDBClusterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDBClusterInput, DeleteDBClusterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
