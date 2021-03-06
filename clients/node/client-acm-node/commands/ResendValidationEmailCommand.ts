import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResendValidationEmail } from "../model/operations/ResendValidationEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResendValidationEmailInput } from "../types/ResendValidationEmailInput";
import { ResendValidationEmailOutput } from "../types/ResendValidationEmailOutput";
import { ACMResolvedConfiguration } from "../ACMConfiguration";
export * from "../types/ResendValidationEmailInput";
export * from "../types/ResendValidationEmailOutput";
export * from "../types/ResendValidationEmailExceptionsUnion";

export class ResendValidationEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResendValidationEmailInput,
      OutputTypesUnion,
      ResendValidationEmailOutput,
      ACMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResendValidationEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResendValidationEmailInput,
    ResendValidationEmailOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResendValidationEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResendValidationEmailInput,
    ResendValidationEmailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResendValidationEmailInput, ResendValidationEmailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
