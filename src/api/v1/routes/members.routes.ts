import { Router } from 'express';
import * as memberController from '../controllers/members.controller'; 

const router = Router();


router.post('/members', memberController.createMember);
router.get('/members', memberController.getMembers);
router.get('/members/:id', memberController.getMemberById);
router.put('/members/:id', memberController.updateMember);
router.delete('/members/:id', memberController.deleteMember);

export default router;
