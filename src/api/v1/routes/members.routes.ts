import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json([{ id: '1', name: 'John Doe', email: 'john@example.com' }]);
});

export default router;
