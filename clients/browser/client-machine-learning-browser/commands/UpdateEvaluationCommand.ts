import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEvaluation } from "../model/operations/UpdateEvaluation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEvaluationInput } from "../types/UpdateEvaluationInput";
import { UpdateEvaluationOutput } from "../types/UpdateEvaluationOutput";
import { MachineLearningResolvedConfiguration } from "../MachineLearningConfiguration";
export * from "../types/UpdateEvaluationInput";
export * from "../types/UpdateEvaluationOutput";
export * from "../types/UpdateEvaluationExceptionsUnion";

export class UpdateEvaluationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEvaluationInput,
      OutputTypesUnion,
      UpdateEvaluationOutput,
      MachineLearningResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateEvaluation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEvaluationInput,
    UpdateEvaluationOutput,
    Blob
  >();

  constructor(readonly input: UpdateEvaluationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MachineLearningResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateEvaluationInput, UpdateEvaluationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateEvaluationInput, UpdateEvaluationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
