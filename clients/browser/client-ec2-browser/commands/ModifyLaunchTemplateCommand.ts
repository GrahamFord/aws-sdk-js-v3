import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyLaunchTemplate } from "../model/operations/ModifyLaunchTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyLaunchTemplateInput } from "../types/ModifyLaunchTemplateInput";
import { ModifyLaunchTemplateOutput } from "../types/ModifyLaunchTemplateOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyLaunchTemplateInput";
export * from "../types/ModifyLaunchTemplateOutput";
export * from "../types/ModifyLaunchTemplateExceptionsUnion";

export class ModifyLaunchTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyLaunchTemplateInput,
      OutputTypesUnion,
      ModifyLaunchTemplateOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyLaunchTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyLaunchTemplateInput,
    ModifyLaunchTemplateOutput,
    Blob
  >();

  constructor(readonly input: ModifyLaunchTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyLaunchTemplateInput,
    ModifyLaunchTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyLaunchTemplateInput, ModifyLaunchTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
