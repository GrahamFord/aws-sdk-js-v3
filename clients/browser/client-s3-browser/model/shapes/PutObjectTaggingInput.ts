import { _Tagging } from "./_Tagging";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutObjectTaggingInput: _Structure_ = {
  type: "structure",
  required: ["Bucket", "Key", "Tagging"],
  members: {
    Bucket: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Bucket"
    },
    Key: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "Key"
    },
    VersionId: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "versionId"
    },
    ContentMD5: {
      shape: {
        type: "string"
      },
      location: "header",
      locationName: "Content-MD5"
    },
    Tagging: {
      shape: _Tagging,
      locationName: "Tagging",
      xmlNamespace: {
        uri: "http://s3.amazonaws.com/doc/2006-03-01/"
      }
    }
  },
  payload: "Tagging"
};
