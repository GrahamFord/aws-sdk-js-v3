import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateSystemTemplate } from "../model/operations/UpdateSystemTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSystemTemplateInput } from "../types/UpdateSystemTemplateInput";
import { UpdateSystemTemplateOutput } from "../types/UpdateSystemTemplateOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/UpdateSystemTemplateInput";
export * from "../types/UpdateSystemTemplateOutput";
export * from "../types/UpdateSystemTemplateExceptionsUnion";

export class UpdateSystemTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSystemTemplateInput,
      OutputTypesUnion,
      UpdateSystemTemplateOutput,
      IoTThingsGraphResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateSystemTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSystemTemplateInput,
    UpdateSystemTemplateOutput,
    Blob
  >();

  constructor(readonly input: UpdateSystemTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateSystemTemplateInput,
    UpdateSystemTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSystemTemplateInput, UpdateSystemTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
