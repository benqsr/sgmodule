// @generated by protoc-gen-es v1.7.2
// @generated from file protobuf/response/next.proto (package youtube.response.next, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";
import { Content as Content$1 } from "./browse_pb.js";
import { FrameworkUpdateTransport } from "../component/framework_pb.js";

/**
 * @generated from message youtube.response.next.Next
 */
export const Next = proto3.makeMessageType(
  "youtube.response.next.Next",
  () => [
    { no: 7, name: "content", kind: "message", T: Content },
    { no: 8, name: "onResponseReceivedAction", kind: "message", T: Content$1 },
    { no: 777, name: "frameworkUpdateTransport", kind: "message", T: FrameworkUpdateTransport },
  ],
);

/**
 * @generated from message youtube.response.next.Content
 */
export const Content = proto3.makeMessageType(
  "youtube.response.next.Content",
  () => [
    { no: 51779735, name: "nextResult", kind: "message", T: NextResult },
  ],
);

/**
 * @generated from message youtube.response.next.NextResult
 */
export const NextResult = proto3.makeMessageType(
  "youtube.response.next.NextResult",
  () => [
    { no: 1, name: "content", kind: "message", T: Content$1 },
  ],
);

