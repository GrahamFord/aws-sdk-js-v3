import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteScalingPolicy } from "../model/operations/DeleteScalingPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteScalingPolicyInput } from "../types/DeleteScalingPolicyInput";
import { DeleteScalingPolicyOutput } from "../types/DeleteScalingPolicyOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DeleteScalingPolicyInput";
export * from "../types/DeleteScalingPolicyOutput";
export * from "../types/DeleteScalingPolicyExceptionsUnion";

export class DeleteScalingPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteScalingPolicyInput,
      OutputTypesUnion,
      DeleteScalingPolicyOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteScalingPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteScalingPolicyInput,
    DeleteScalingPolicyOutput,
    Blob
  >();

  constructor(readonly input: DeleteScalingPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteScalingPolicyInput,
    DeleteScalingPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteScalingPolicyInput, DeleteScalingPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
