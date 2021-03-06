import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListQualificationTypes } from "../model/operations/ListQualificationTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListQualificationTypesInput } from "../types/ListQualificationTypesInput";
import { ListQualificationTypesOutput } from "../types/ListQualificationTypesOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListQualificationTypesInput";
export * from "../types/ListQualificationTypesOutput";
export * from "../types/ListQualificationTypesExceptionsUnion";

export class ListQualificationTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListQualificationTypesInput,
      OutputTypesUnion,
      ListQualificationTypesOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListQualificationTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListQualificationTypesInput,
    ListQualificationTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListQualificationTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListQualificationTypesInput,
    ListQualificationTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListQualificationTypesInput, ListQualificationTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
