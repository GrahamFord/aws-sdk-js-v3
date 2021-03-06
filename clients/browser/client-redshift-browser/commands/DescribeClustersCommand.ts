import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusters } from "../model/operations/DescribeClusters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClustersInput } from "../types/DescribeClustersInput";
import { DescribeClustersOutput } from "../types/DescribeClustersOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClustersInput";
export * from "../types/DescribeClustersOutput";
export * from "../types/DescribeClustersExceptionsUnion";

export class DescribeClustersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClustersInput,
      OutputTypesUnion,
      DescribeClustersOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeClusters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClustersInput,
    DescribeClustersOutput,
    Blob
  >();

  constructor(readonly input: DescribeClustersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeClustersInput, DescribeClustersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClustersInput, DescribeClustersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
