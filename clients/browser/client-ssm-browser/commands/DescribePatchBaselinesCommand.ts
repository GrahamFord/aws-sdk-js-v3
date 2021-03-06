import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePatchBaselines } from "../model/operations/DescribePatchBaselines";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePatchBaselinesInput } from "../types/DescribePatchBaselinesInput";
import { DescribePatchBaselinesOutput } from "../types/DescribePatchBaselinesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribePatchBaselinesInput";
export * from "../types/DescribePatchBaselinesOutput";
export * from "../types/DescribePatchBaselinesExceptionsUnion";

export class DescribePatchBaselinesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePatchBaselinesInput,
      OutputTypesUnion,
      DescribePatchBaselinesOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePatchBaselines;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePatchBaselinesInput,
    DescribePatchBaselinesOutput,
    Blob
  >();

  constructor(readonly input: DescribePatchBaselinesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePatchBaselinesInput,
    DescribePatchBaselinesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePatchBaselinesInput, DescribePatchBaselinesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
