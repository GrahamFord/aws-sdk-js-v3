import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateTeamMember } from "../model/operations/DisassociateTeamMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateTeamMemberInput } from "../types/DisassociateTeamMemberInput";
import { DisassociateTeamMemberOutput } from "../types/DisassociateTeamMemberOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/DisassociateTeamMemberInput";
export * from "../types/DisassociateTeamMemberOutput";
export * from "../types/DisassociateTeamMemberExceptionsUnion";

export class DisassociateTeamMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateTeamMemberInput,
      OutputTypesUnion,
      DisassociateTeamMemberOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateTeamMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateTeamMemberInput,
    DisassociateTeamMemberOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateTeamMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateTeamMemberInput,
    DisassociateTeamMemberOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateTeamMemberInput, DisassociateTeamMemberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
