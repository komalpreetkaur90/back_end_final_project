import { Router } from 'express';
import { getMembers, createMember } from '../controllers/members.controller';

const router = Router();

router.get('/', getMembers);
router.post('/', createMember);

export default router;
