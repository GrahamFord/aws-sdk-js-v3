import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPlacements } from "../model/operations/ListPlacements";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPlacementsInput } from "../types/ListPlacementsInput";
import { ListPlacementsOutput } from "../types/ListPlacementsOutput";
import { IoT1ClickProjectsResolvedConfiguration } from "../IoT1ClickProjectsConfiguration";
export * from "../types/ListPlacementsInput";
export * from "../types/ListPlacementsOutput";
export * from "../types/ListPlacementsExceptionsUnion";

export class ListPlacementsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPlacementsInput,
      OutputTypesUnion,
      ListPlacementsOutput,
      IoT1ClickProjectsResolvedConfiguration,
      Blob
    > {
  readonly model = ListPlacements;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPlacementsInput,
    ListPlacementsOutput,
    Blob
  >();

  constructor(readonly input: ListPlacementsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoT1ClickProjectsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPlacementsInput, ListPlacementsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPlacementsInput, ListPlacementsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
