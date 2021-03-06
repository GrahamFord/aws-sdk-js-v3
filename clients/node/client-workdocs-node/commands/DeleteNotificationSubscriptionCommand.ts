import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteNotificationSubscription } from "../model/operations/DeleteNotificationSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotificationSubscriptionInput } from "../types/DeleteNotificationSubscriptionInput";
import { DeleteNotificationSubscriptionOutput } from "../types/DeleteNotificationSubscriptionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeleteNotificationSubscriptionInput";
export * from "../types/DeleteNotificationSubscriptionOutput";
export * from "../types/DeleteNotificationSubscriptionExceptionsUnion";

export class DeleteNotificationSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotificationSubscriptionInput,
      OutputTypesUnion,
      DeleteNotificationSubscriptionOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteNotificationSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotificationSubscriptionInput,
    DeleteNotificationSubscriptionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteNotificationSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotificationSubscriptionInput,
    DeleteNotificationSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteNotificationSubscriptionInput,
        DeleteNotificationSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
