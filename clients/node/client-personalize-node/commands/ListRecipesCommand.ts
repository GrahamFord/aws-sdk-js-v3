import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRecipes } from "../model/operations/ListRecipes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRecipesInput } from "../types/ListRecipesInput";
import { ListRecipesOutput } from "../types/ListRecipesOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/ListRecipesInput";
export * from "../types/ListRecipesOutput";
export * from "../types/ListRecipesExceptionsUnion";

export class ListRecipesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRecipesInput,
      OutputTypesUnion,
      ListRecipesOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRecipes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRecipesInput,
    ListRecipesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRecipesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRecipesInput, ListRecipesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRecipesInput, ListRecipesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
