// Import statements
import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import { generateSwaggerSpec } from "../config/swaggerOptions";

// Load environment variables
dotenv.config();

// Other imports
import morgan from "morgan";

// Routes
import booksRoutes from "./api/v1/routes/bookRoutes";
import membersRoutes from "./api/v1/routes/members.routes";
import borrowsRoutes from "./api/v1/routes/borrows.routes";

// Swagger import
import setupSwagger from "../config/swagger";

// Express app created
const app: Express = express();

// Setup Swagger AFTER creating app
setupSwagger(app);

// Parsing JSON requests
app.use(express.json());

// HTTP request logging with Morgan
app.use(morgan("combined"));

const swaggerSpec = generateSwaggerSpec();
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Health check endpoint
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).send("Server is healthy");
});

// API Routes
app.use("/api/v1/books", booksRoutes);
app.use("/api/v1/members", membersRoutes);
app.use("/api/v1/borrows", borrowsRoutes);

// Exporting app
export default app;
