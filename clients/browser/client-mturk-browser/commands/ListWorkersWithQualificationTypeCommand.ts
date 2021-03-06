import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListWorkersWithQualificationType } from "../model/operations/ListWorkersWithQualificationType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListWorkersWithQualificationTypeInput } from "../types/ListWorkersWithQualificationTypeInput";
import { ListWorkersWithQualificationTypeOutput } from "../types/ListWorkersWithQualificationTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListWorkersWithQualificationTypeInput";
export * from "../types/ListWorkersWithQualificationTypeOutput";
export * from "../types/ListWorkersWithQualificationTypeExceptionsUnion";

export class ListWorkersWithQualificationTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListWorkersWithQualificationTypeInput,
      OutputTypesUnion,
      ListWorkersWithQualificationTypeOutput,
      MTurkResolvedConfiguration,
      Blob
    > {
  readonly model = ListWorkersWithQualificationType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListWorkersWithQualificationTypeInput,
    ListWorkersWithQualificationTypeOutput,
    Blob
  >();

  constructor(readonly input: ListWorkersWithQualificationTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListWorkersWithQualificationTypeInput,
    ListWorkersWithQualificationTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListWorkersWithQualificationTypeInput,
        ListWorkersWithQualificationTypeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
