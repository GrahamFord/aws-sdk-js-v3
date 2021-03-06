import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEntitiesForPolicy } from "../model/operations/ListEntitiesForPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEntitiesForPolicyInput } from "../types/ListEntitiesForPolicyInput";
import { ListEntitiesForPolicyOutput } from "../types/ListEntitiesForPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListEntitiesForPolicyInput";
export * from "../types/ListEntitiesForPolicyOutput";
export * from "../types/ListEntitiesForPolicyExceptionsUnion";

export class ListEntitiesForPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEntitiesForPolicyInput,
      OutputTypesUnion,
      ListEntitiesForPolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListEntitiesForPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEntitiesForPolicyInput,
    ListEntitiesForPolicyOutput,
    Blob
  >();

  constructor(readonly input: ListEntitiesForPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEntitiesForPolicyInput,
    ListEntitiesForPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEntitiesForPolicyInput, ListEntitiesForPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
