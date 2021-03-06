import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutInvitationConfiguration } from "../model/operations/PutInvitationConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutInvitationConfigurationInput } from "../types/PutInvitationConfigurationInput";
import { PutInvitationConfigurationOutput } from "../types/PutInvitationConfigurationOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/PutInvitationConfigurationInput";
export * from "../types/PutInvitationConfigurationOutput";
export * from "../types/PutInvitationConfigurationExceptionsUnion";

export class PutInvitationConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutInvitationConfigurationInput,
      OutputTypesUnion,
      PutInvitationConfigurationOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutInvitationConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutInvitationConfigurationInput,
    PutInvitationConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutInvitationConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutInvitationConfigurationInput,
    PutInvitationConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutInvitationConfigurationInput,
        PutInvitationConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
