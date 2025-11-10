import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json([
    { id: '1', bookId: '1', memberId: '1', dueDate: '2025-12-31', returned: false },
  ]);
});

export default router;
