import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateClientVpnTargetNetwork } from "../model/operations/AssociateClientVpnTargetNetwork";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateClientVpnTargetNetworkInput } from "../types/AssociateClientVpnTargetNetworkInput";
import { AssociateClientVpnTargetNetworkOutput } from "../types/AssociateClientVpnTargetNetworkOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AssociateClientVpnTargetNetworkInput";
export * from "../types/AssociateClientVpnTargetNetworkOutput";
export * from "../types/AssociateClientVpnTargetNetworkExceptionsUnion";

export class AssociateClientVpnTargetNetworkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateClientVpnTargetNetworkInput,
      OutputTypesUnion,
      AssociateClientVpnTargetNetworkOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = AssociateClientVpnTargetNetwork;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateClientVpnTargetNetworkInput,
    AssociateClientVpnTargetNetworkOutput,
    Blob
  >();

  constructor(readonly input: AssociateClientVpnTargetNetworkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateClientVpnTargetNetworkInput,
    AssociateClientVpnTargetNetworkOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AssociateClientVpnTargetNetworkInput,
        AssociateClientVpnTargetNetworkOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
