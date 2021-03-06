import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListBudgetsForResource } from "../model/operations/ListBudgetsForResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListBudgetsForResourceInput } from "../types/ListBudgetsForResourceInput";
import { ListBudgetsForResourceOutput } from "../types/ListBudgetsForResourceOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListBudgetsForResourceInput";
export * from "../types/ListBudgetsForResourceOutput";
export * from "../types/ListBudgetsForResourceExceptionsUnion";

export class ListBudgetsForResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListBudgetsForResourceInput,
      OutputTypesUnion,
      ListBudgetsForResourceOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListBudgetsForResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListBudgetsForResourceInput,
    ListBudgetsForResourceOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListBudgetsForResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListBudgetsForResourceInput,
    ListBudgetsForResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListBudgetsForResourceInput, ListBudgetsForResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
