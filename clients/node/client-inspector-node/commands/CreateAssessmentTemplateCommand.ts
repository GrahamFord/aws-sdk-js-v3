import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateAssessmentTemplate } from "../model/operations/CreateAssessmentTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAssessmentTemplateInput } from "../types/CreateAssessmentTemplateInput";
import { CreateAssessmentTemplateOutput } from "../types/CreateAssessmentTemplateOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/CreateAssessmentTemplateInput";
export * from "../types/CreateAssessmentTemplateOutput";
export * from "../types/CreateAssessmentTemplateExceptionsUnion";

export class CreateAssessmentTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAssessmentTemplateInput,
      OutputTypesUnion,
      CreateAssessmentTemplateOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateAssessmentTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAssessmentTemplateInput,
    CreateAssessmentTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateAssessmentTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAssessmentTemplateInput,
    CreateAssessmentTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAssessmentTemplateInput, CreateAssessmentTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
