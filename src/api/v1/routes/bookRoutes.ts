import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.status(200).json([{ id: '1', title: 'Example Book', author: 'Author' }]);
});

export default router;
