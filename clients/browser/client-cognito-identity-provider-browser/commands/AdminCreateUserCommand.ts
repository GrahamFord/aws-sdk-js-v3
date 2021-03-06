import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AdminCreateUser } from "../model/operations/AdminCreateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AdminCreateUserInput } from "../types/AdminCreateUserInput";
import { AdminCreateUserOutput } from "../types/AdminCreateUserOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/AdminCreateUserInput";
export * from "../types/AdminCreateUserOutput";
export * from "../types/AdminCreateUserExceptionsUnion";

export class AdminCreateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AdminCreateUserInput,
      OutputTypesUnion,
      AdminCreateUserOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = AdminCreateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AdminCreateUserInput,
    AdminCreateUserOutput,
    Blob
  >();

  constructor(readonly input: AdminCreateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<AdminCreateUserInput, AdminCreateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        AdminCreateUserInput,
        AdminCreateUserOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<AdminCreateUserInput, AdminCreateUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
