import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSecurityConfiguration } from "../model/operations/CreateSecurityConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSecurityConfigurationInput } from "../types/CreateSecurityConfigurationInput";
import { CreateSecurityConfigurationOutput } from "../types/CreateSecurityConfigurationOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateSecurityConfigurationInput";
export * from "../types/CreateSecurityConfigurationOutput";
export * from "../types/CreateSecurityConfigurationExceptionsUnion";

export class CreateSecurityConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSecurityConfigurationInput,
      OutputTypesUnion,
      CreateSecurityConfigurationOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSecurityConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSecurityConfigurationInput,
    CreateSecurityConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSecurityConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSecurityConfigurationInput,
    CreateSecurityConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateSecurityConfigurationInput,
        CreateSecurityConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
