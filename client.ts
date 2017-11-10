import * as Grpc from "grpc";
import * as Path from "path";
import { Input, Student } from "./generated_proto/university_service/message/student_pb";
import { University } from "./generated_proto/university_service/service/registration_service_pb_service";

let university_proto = Grpc.load({ root: Path.join(__dirname, "./proto/university_service/"), file: "service/registration_service.proto" }).test.rpc;

function start_client() {
    let client = new university_proto.University("localhost:50051", Grpc.credentials.createInsecure(), {});
    let input_request = new Input();
    input_request.setName("Jack");

    client.register(input_request.toObject(), function (err, data: Student) {
        console.log("student data : ", data.toObject());
    });
}

start_client();