import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListThingsInBillingGroup } from "../model/operations/ListThingsInBillingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListThingsInBillingGroupInput } from "../types/ListThingsInBillingGroupInput";
import { ListThingsInBillingGroupOutput } from "../types/ListThingsInBillingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListThingsInBillingGroupInput";
export * from "../types/ListThingsInBillingGroupOutput";
export * from "../types/ListThingsInBillingGroupExceptionsUnion";

export class ListThingsInBillingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListThingsInBillingGroupInput,
      OutputTypesUnion,
      ListThingsInBillingGroupOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListThingsInBillingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListThingsInBillingGroupInput,
    ListThingsInBillingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListThingsInBillingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListThingsInBillingGroupInput,
    ListThingsInBillingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListThingsInBillingGroupInput, ListThingsInBillingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
