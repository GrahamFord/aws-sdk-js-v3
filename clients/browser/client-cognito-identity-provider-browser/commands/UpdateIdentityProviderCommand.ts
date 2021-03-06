import * as __aws_crypto_sha256_browser from "@aws-crypto/sha256-browser";
import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_signature_v4 from "@aws-sdk/signature-v4";
import * as __aws_sdk_signing_middleware from "@aws-sdk/signing-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateIdentityProvider } from "../model/operations/UpdateIdentityProvider";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateIdentityProviderInput } from "../types/UpdateIdentityProviderInput";
import { UpdateIdentityProviderOutput } from "../types/UpdateIdentityProviderOutput";
import { CognitoIdentityProviderResolvedConfiguration } from "../CognitoIdentityProviderConfiguration";
export * from "../types/UpdateIdentityProviderInput";
export * from "../types/UpdateIdentityProviderOutput";
export * from "../types/UpdateIdentityProviderExceptionsUnion";

export class UpdateIdentityProviderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateIdentityProviderInput,
      OutputTypesUnion,
      UpdateIdentityProviderOutput,
      CognitoIdentityProviderResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateIdentityProvider;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateIdentityProviderInput,
    UpdateIdentityProviderOutput,
    Blob
  >();

  constructor(readonly input: UpdateIdentityProviderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoIdentityProviderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateIdentityProviderInput,
    UpdateIdentityProviderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_signing_middleware.signingMiddleware<
        UpdateIdentityProviderInput,
        UpdateIdentityProviderOutput,
        Blob
      >(configuration.signer),
      {
        step: "finalize",
        priority: 0,
        tags: { SIGNATURE: true }
      }
    );
    return stack.resolve(
      handler<UpdateIdentityProviderInput, UpdateIdentityProviderOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
