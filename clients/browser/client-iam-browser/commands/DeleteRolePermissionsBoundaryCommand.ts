import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRolePermissionsBoundary } from "../model/operations/DeleteRolePermissionsBoundary";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRolePermissionsBoundaryInput } from "../types/DeleteRolePermissionsBoundaryInput";
import { DeleteRolePermissionsBoundaryOutput } from "../types/DeleteRolePermissionsBoundaryOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/DeleteRolePermissionsBoundaryInput";
export * from "../types/DeleteRolePermissionsBoundaryOutput";
export * from "../types/DeleteRolePermissionsBoundaryExceptionsUnion";

export class DeleteRolePermissionsBoundaryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRolePermissionsBoundaryInput,
      OutputTypesUnion,
      DeleteRolePermissionsBoundaryOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRolePermissionsBoundary;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRolePermissionsBoundaryInput,
    DeleteRolePermissionsBoundaryOutput,
    Blob
  >();

  constructor(readonly input: DeleteRolePermissionsBoundaryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRolePermissionsBoundaryInput,
    DeleteRolePermissionsBoundaryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteRolePermissionsBoundaryInput,
        DeleteRolePermissionsBoundaryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
