import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRuleGroups } from "../model/operations/ListRuleGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRuleGroupsInput } from "../types/ListRuleGroupsInput";
import { ListRuleGroupsOutput } from "../types/ListRuleGroupsOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListRuleGroupsInput";
export * from "../types/ListRuleGroupsOutput";
export * from "../types/ListRuleGroupsExceptionsUnion";

export class ListRuleGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRuleGroupsInput,
      OutputTypesUnion,
      ListRuleGroupsOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListRuleGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRuleGroupsInput,
    ListRuleGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListRuleGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRuleGroupsInput, ListRuleGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRuleGroupsInput, ListRuleGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
