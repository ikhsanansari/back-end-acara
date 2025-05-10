import { version } from "mongoose";
import swaggerAutogen from "swagger-autogen";

const doc = {
    info: {
        version: "v0.0.1",
        title: "Dokumnetasi API ACARA",
        description: "Dokumentasi API ACARA",
    },
    servers: [
        {
            url: "http://localhost:3000/api",
            description: "Local Server", 
        },
        {
            url: "https://back-end-acara-chi-taupe.vercel.app/api",
            decription: "Deploy Server",
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
            },
        },
        schemas: {
            LoginRequest: {
                identifier: "ikhsan",
                password: "12345678",
            },
        },
    },
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0"})(outputFile, endpointsFiles, doc);