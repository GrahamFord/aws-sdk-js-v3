import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyWorkspaceProperties } from "../model/operations/ModifyWorkspaceProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyWorkspacePropertiesInput } from "../types/ModifyWorkspacePropertiesInput";
import { ModifyWorkspacePropertiesOutput } from "../types/ModifyWorkspacePropertiesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ModifyWorkspacePropertiesInput";
export * from "../types/ModifyWorkspacePropertiesOutput";
export * from "../types/ModifyWorkspacePropertiesExceptionsUnion";

export class ModifyWorkspacePropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyWorkspacePropertiesInput,
      OutputTypesUnion,
      ModifyWorkspacePropertiesOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyWorkspaceProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyWorkspacePropertiesInput,
    ModifyWorkspacePropertiesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyWorkspacePropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyWorkspacePropertiesInput,
    ModifyWorkspacePropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyWorkspacePropertiesInput, ModifyWorkspacePropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
