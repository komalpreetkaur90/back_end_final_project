import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: { openapi: '3.0.0', info: { title: 'Book Library API', version: '1.0.0' } },
  apis: ['./src/api/v1/routes/*.ts'],
};

export default swaggerJsdoc(options);
