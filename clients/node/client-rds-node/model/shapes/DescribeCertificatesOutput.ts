import { _CertificateList } from "./_CertificateList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeCertificatesOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificates: {
      shape: _CertificateList
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
