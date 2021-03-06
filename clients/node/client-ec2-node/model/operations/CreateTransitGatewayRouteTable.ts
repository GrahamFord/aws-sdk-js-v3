import { CreateTransitGatewayRouteTableInput } from "../shapes/CreateTransitGatewayRouteTableInput";
import { CreateTransitGatewayRouteTableOutput } from "../shapes/CreateTransitGatewayRouteTableOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateTransitGatewayRouteTable: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateTransitGatewayRouteTable",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateTransitGatewayRouteTableInput
  },
  output: {
    shape: CreateTransitGatewayRouteTableOutput
  },
  errors: []
};
