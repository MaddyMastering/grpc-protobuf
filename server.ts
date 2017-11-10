import * as grpc from "grpc";
import * as path from "path";
import { Input, Student, Topic } from "./generated_proto/university_service/message/student_pb";
import { University } from "./generated_proto/university_service/service/registration_service_pb_service";

let university_proto = grpc.load({ root: path.join(__dirname, "./proto/university_service/"), file: "service/registration_service.proto" }).test.rpc;

function registerImpl(call, callback: Function): void {

    let student_one = new Student();
    student_one.setName(call.request.name);
    student_one.setSerialnumber(Math.random() * 100);
    student_one.setTopic(Topic.COMPUTER);

    callback(null, student_one.toObject());
}

function start_service(): void {
    let server = new grpc.Server();
    
    server.addProtoService(university_proto.University.service, {
        register: registerImpl
    });
    
    server.bind("localhost:50051", grpc.ServerCredentials.createInsecure());
    server.start();
    
    console.log("server started on localhost:50051");
}

start_service();