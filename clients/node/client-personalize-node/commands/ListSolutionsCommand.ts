import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSolutions } from "../model/operations/ListSolutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSolutionsInput } from "../types/ListSolutionsInput";
import { ListSolutionsOutput } from "../types/ListSolutionsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListSolutionsInput";
export * from "../types/ListSolutionsOutput";
export * from "../types/ListSolutionsExceptionsUnion";

export class ListSolutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSolutionsInput,
      OutputTypesUnion,
      ListSolutionsOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSolutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSolutionsInput,
    ListSolutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSolutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSolutionsInput, ListSolutionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSolutionsInput, ListSolutionsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
