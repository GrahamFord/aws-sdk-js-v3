import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetectEntities } from "../model/operations/DetectEntities";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetectEntitiesInput } from "../types/DetectEntitiesInput";
import { DetectEntitiesOutput } from "../types/DetectEntitiesOutput";
import { ComprehendMedicalResolvedConfiguration } from "../ComprehendMedicalConfiguration";
export * from "../types/DetectEntitiesInput";
export * from "../types/DetectEntitiesOutput";
export * from "../types/DetectEntitiesExceptionsUnion";

export class DetectEntitiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetectEntitiesInput,
      OutputTypesUnion,
      DetectEntitiesOutput,
      ComprehendMedicalResolvedConfiguration,
      Blob
    > {
  readonly model = DetectEntities;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetectEntitiesInput,
    DetectEntitiesOutput,
    Blob
  >();

  constructor(readonly input: DetectEntitiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendMedicalResolvedConfiguration
  ): __aws_sdk_types.Handler<DetectEntitiesInput, DetectEntitiesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetectEntitiesInput, DetectEntitiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
