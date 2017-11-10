# grpc_protobuf

Sample demo project of using grpc, google-protobuf with typescript

1. git clone https://github.com/MaddyMastering/grpc-protobuf.it

2. Download dependencies
    `npm install` 

3. J    S and TS Generation in linux
    `protoc --proto_path=proto/university_service --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:generated_proto/university_service --ts_out=service=true:generated_proto/university_service proto/university_service/message/student.proto proto/university_service/service/registration_service.proto`

4. to start server
    `ts-node server.ts`

5. to start client
    `ts-node client.ts`