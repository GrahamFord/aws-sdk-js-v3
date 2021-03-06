import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateContact } from "../model/operations/CreateContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateContactInput } from "../types/CreateContactInput";
import { CreateContactOutput } from "../types/CreateContactOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/CreateContactInput";
export * from "../types/CreateContactOutput";
export * from "../types/CreateContactExceptionsUnion";

export class CreateContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateContactInput,
      OutputTypesUnion,
      CreateContactOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateContactInput,
    CreateContactOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateContactInput, CreateContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateContactInput, CreateContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
