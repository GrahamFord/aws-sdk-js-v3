import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEntityAggregates } from "../model/operations/DescribeEntityAggregates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEntityAggregatesInput } from "../types/DescribeEntityAggregatesInput";
import { DescribeEntityAggregatesOutput } from "../types/DescribeEntityAggregatesOutput";
import { HealthResolvedConfiguration } from "../HealthConfiguration";
export * from "../types/DescribeEntityAggregatesInput";
export * from "../types/DescribeEntityAggregatesOutput";
export * from "../types/DescribeEntityAggregatesExceptionsUnion";

export class DescribeEntityAggregatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEntityAggregatesInput,
      OutputTypesUnion,
      DescribeEntityAggregatesOutput,
      HealthResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEntityAggregates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEntityAggregatesInput,
    DescribeEntityAggregatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEntityAggregatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: HealthResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEntityAggregatesInput,
    DescribeEntityAggregatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEntityAggregatesInput, DescribeEntityAggregatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
