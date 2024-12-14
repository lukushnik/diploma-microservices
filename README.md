# Introduction
This repo shows how to use OpenTelemetry with multiple NestJS apps. I will later how some of the hurdles in other explanations were overcome.

Guidance from https://www.tomray.dev/nestjs-open-telemetry was used but modified 

## Running

### Run everything via `docker-compose`

* Run Jaeger backend and the three nestjs apps with `docker compose up --build`
* Access Jaeger UI at http://localhost:16686 
* Make a call to auth app with `curl --location 'http://localhost:3001/deepcalls'`

Jaeger UI can be accessed at http://localhost:16686.
#   d i p l o m a - m i c r o s e r v i c e s  
 