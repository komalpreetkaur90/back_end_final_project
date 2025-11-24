import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { generateSwaggerSpec } from "./swaggerOptions";

const setupSwagger = (app: Express): void => {
    const specs = generateSwaggerSpec(); // generate OpenAPI spec
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};

export default setupSwagger;
