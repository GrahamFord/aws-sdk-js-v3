import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCampaigns } from "../model/operations/GetCampaigns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCampaignsInput } from "../types/GetCampaignsInput";
import { GetCampaignsOutput } from "../types/GetCampaignsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetCampaignsInput";
export * from "../types/GetCampaignsOutput";
export * from "../types/GetCampaignsExceptionsUnion";

export class GetCampaignsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCampaignsInput,
      OutputTypesUnion,
      GetCampaignsOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCampaigns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCampaignsInput,
    GetCampaignsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCampaignsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCampaignsInput, GetCampaignsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCampaignsInput, GetCampaignsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
