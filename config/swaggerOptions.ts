import swaggerJsdoc from "swagger-jsdoc";

const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library Management API Documentation",
      version: "1.0.0",
      description: "API documentation for the Library Management System.",
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1",
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { type: "http", scheme: "bearer", bearerFormat: "JWT" },
      },
      schemas: {
        // Book schemas
        Book: {
          type: "object",
          required: ["title", "author", "availableCopies"],
          properties: {
            title: { type: "string", example: "The Great Gatsby" },
            author: { type: "string", example: "F. Scott Fitzgerald" },
            genre: { type: "string", example: "Classic Literature" },
            publishedYear: { type: "integer", example: 1925 },
            availableCopies: { type: "integer", example: 5 },
          },
        },
        BookUpdate: {
          type: "object",
          properties: {
            title: { type: "string", example: "Updated Title" },
            author: { type: "string", example: "Updated Author" },
            genre: { type: "string", example: "Science Fiction" },
            publishedYear: { type: "integer", example: 2000 },
            availableCopies: { type: "integer", example: 10 },
          },
        },
        // Member schemas
        Member: {
          type: "object",
          required: ["name", "email", "phone"],
          properties: {
            name: { type: "string", example: "Jane Doe" },
            email: { type: "string", format: "email", example: "jane@example.com" },
            phone: { type: "string", example: "+1234567890" },
          },
        },
        MemberUpdate: {
          type: "object",
          properties: {
            name: { type: "string", example: "Updated Name" },
            email: { type: "string", format: "email", example: "updated@example.com" },
            phone: { type: "string", example: "+1234567890" },
          },
        },
        // Borrow schemas
        Borrow: {
          type: "object",
          required: ["memberId", "bookId", "borrowDate"],
          properties: {
            memberId: { type: "string", example: "member_123abc" },
            bookId: { type: "string", example: "book_456def" },
            borrowDate: { type: "string", format: "date", example: "2025-11-23" },
            returnDate: { type: "string", format: "date", example: "2025-12-01" },
          },
        },
        BorrowUpdate: {
          type: "object",
          properties: {
            memberId: { type: "string", example: "member_123abc" },
            bookId: { type: "string", example: "book_456def" },
            borrowDate: { type: "string", format: "date", example: "2025-11-23" },
            returnDate: { type: "string", format: "date", example: "2025-12-01" },
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/api/v1/routes/*.ts", "./src/api/v1/validations/*.ts"],
};

export const generateSwaggerSpec = (): object => swaggerJsdoc(swaggerOptions);
