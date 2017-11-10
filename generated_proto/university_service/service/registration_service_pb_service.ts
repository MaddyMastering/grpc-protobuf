// package: test.rpc
// file: service/registration_service.proto

import * as service_registration_service_pb from "../service/registration_service_pb";
import * as message_student_pb from "../message/student_pb";
export class University {
  static serviceName = "test.rpc.University";
}
export namespace University {
  export class Register {
    static readonly methodName = "Register";
    static readonly service = University;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = message_student_pb.Input;
    static readonly responseType = message_student_pb.Student;
  }
}
