import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteUsageReportSubscription } from "../model/operations/DeleteUsageReportSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteUsageReportSubscriptionInput } from "../types/DeleteUsageReportSubscriptionInput";
import { DeleteUsageReportSubscriptionOutput } from "../types/DeleteUsageReportSubscriptionOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DeleteUsageReportSubscriptionInput";
export * from "../types/DeleteUsageReportSubscriptionOutput";
export * from "../types/DeleteUsageReportSubscriptionExceptionsUnion";

export class DeleteUsageReportSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteUsageReportSubscriptionInput,
      OutputTypesUnion,
      DeleteUsageReportSubscriptionOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteUsageReportSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteUsageReportSubscriptionInput,
    DeleteUsageReportSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: DeleteUsageReportSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteUsageReportSubscriptionInput,
    DeleteUsageReportSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteUsageReportSubscriptionInput,
        DeleteUsageReportSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
