import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLoadBalancer } from "../model/operations/CreateLoadBalancer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoadBalancerInput } from "../types/CreateLoadBalancerInput";
import { CreateLoadBalancerOutput } from "../types/CreateLoadBalancerOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/CreateLoadBalancerInput";
export * from "../types/CreateLoadBalancerOutput";
export * from "../types/CreateLoadBalancerExceptionsUnion";

export class CreateLoadBalancerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoadBalancerInput,
      OutputTypesUnion,
      CreateLoadBalancerOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLoadBalancer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoadBalancerInput,
    CreateLoadBalancerOutput,
    Blob
  >();

  constructor(readonly input: CreateLoadBalancerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoadBalancerInput,
    CreateLoadBalancerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLoadBalancerInput, CreateLoadBalancerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
