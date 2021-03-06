import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { InviteAccountToOrganization } from "../model/operations/InviteAccountToOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { InviteAccountToOrganizationInput } from "../types/InviteAccountToOrganizationInput";
import { InviteAccountToOrganizationOutput } from "../types/InviteAccountToOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/InviteAccountToOrganizationInput";
export * from "../types/InviteAccountToOrganizationOutput";
export * from "../types/InviteAccountToOrganizationExceptionsUnion";

export class InviteAccountToOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      InviteAccountToOrganizationInput,
      OutputTypesUnion,
      InviteAccountToOrganizationOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = InviteAccountToOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    InviteAccountToOrganizationInput,
    InviteAccountToOrganizationOutput,
    Blob
  >();

  constructor(readonly input: InviteAccountToOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    InviteAccountToOrganizationInput,
    InviteAccountToOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        InviteAccountToOrganizationInput,
        InviteAccountToOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
