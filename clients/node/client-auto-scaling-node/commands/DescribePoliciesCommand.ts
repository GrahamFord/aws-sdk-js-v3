import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePolicies } from "../model/operations/DescribePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePoliciesInput } from "../types/DescribePoliciesInput";
import { DescribePoliciesOutput } from "../types/DescribePoliciesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribePoliciesInput";
export * from "../types/DescribePoliciesOutput";
export * from "../types/DescribePoliciesExceptionsUnion";

export class DescribePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePoliciesInput,
      OutputTypesUnion,
      DescribePoliciesOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePoliciesInput,
    DescribePoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePoliciesInput, DescribePoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePoliciesInput, DescribePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
