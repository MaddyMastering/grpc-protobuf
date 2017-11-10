-------------------------
TO GENERATE USING PROTOC
-------------------------

1. npm install

2. JS and TS Generation in linux
protoc --proto_path=proto/university_service --plugin=protoc-gen-ts=node_modules/.bin/protoc-gen-ts --js_out=import_style=commonjs,binary:generated_proto/university_service --ts_out=service=true:generated_proto/university_service proto/university_service/message/student.proto proto/university_service/service/registration_service.proto

3. To start server
ts-node server.ts

4. To start client
ts-node client.ts
