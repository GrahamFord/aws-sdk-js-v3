import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPolicies } from "../model/operations/ListPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPoliciesInput } from "../types/ListPoliciesInput";
import { ListPoliciesOutput } from "../types/ListPoliciesOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListPoliciesInput";
export * from "../types/ListPoliciesOutput";
export * from "../types/ListPoliciesExceptionsUnion";

export class ListPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPoliciesInput,
      OutputTypesUnion,
      ListPoliciesOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPoliciesInput,
    ListPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPoliciesInput, ListPoliciesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPoliciesInput, ListPoliciesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
