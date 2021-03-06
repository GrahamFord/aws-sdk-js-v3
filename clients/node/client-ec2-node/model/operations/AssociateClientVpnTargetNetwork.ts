import { AssociateClientVpnTargetNetworkInput } from "../shapes/AssociateClientVpnTargetNetworkInput";
import { AssociateClientVpnTargetNetworkOutput } from "../shapes/AssociateClientVpnTargetNetworkOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateClientVpnTargetNetwork: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateClientVpnTargetNetwork",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateClientVpnTargetNetworkInput
  },
  output: {
    shape: AssociateClientVpnTargetNetworkOutput
  },
  errors: []
};
