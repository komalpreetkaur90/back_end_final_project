import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './config/swagger';

import booksRoutes from './api/v1/routes/bookRoutes';
import membersRoutes from './api/v1/routes/members.routes';
import borrowsRoutes from './api/v1/routes/borrows.routes';

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/api/books', booksRoutes);
app.use('/api/members', membersRoutes);
app.use('/api/borrows', borrowsRoutes);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
