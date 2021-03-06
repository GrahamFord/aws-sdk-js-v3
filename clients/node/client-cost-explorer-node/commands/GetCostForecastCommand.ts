import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCostForecast } from "../model/operations/GetCostForecast";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCostForecastInput } from "../types/GetCostForecastInput";
import { GetCostForecastOutput } from "../types/GetCostForecastOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetCostForecastInput";
export * from "../types/GetCostForecastOutput";
export * from "../types/GetCostForecastExceptionsUnion";

export class GetCostForecastCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCostForecastInput,
      OutputTypesUnion,
      GetCostForecastOutput,
      CostExplorerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCostForecast;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCostForecastInput,
    GetCostForecastOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCostForecastInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCostForecastInput, GetCostForecastOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCostForecastInput, GetCostForecastOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
