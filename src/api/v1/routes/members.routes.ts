import { Router } from 'express';
import * as memberController from '../controllers/members.controller'; 

const router = Router();

/**
 * @openapi
 * /api/v1/members:
 *   post:
 *     summary: Create a new member
 *     tags: [Members]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Member"
 *     responses:
 *       201:
 *         description: Member created successfully
 */
router.post('/', memberController.createMember);

/**
 * @openapi
 * /api/v1/members:
 *   get:
 *     summary: Get all members
 *     tags: [Members]
 *     responses:
 *       200:
 *         description: List of all members
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: "#/components/schemas/Member"
 */
router.get('/', memberController.getMembers);

/**
 * @openapi
 * /api/v1/members/{id}:
 *   get:
 *     summary: Get member by ID
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Member found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Member"
 */
router.get('/:id', memberController.getMemberById);

/**
 * @openapi
 * /api/v1/members/{id}:
 *   put:
 *     summary: Update a member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/MemberUpdate"
 *     responses:
 *       200:
 *         description: Member updated successfully
 */
router.put('/:id', memberController.updateMember);

/**
 * @openapi
 * /api/v1/members/{id}:
 *   delete:
 *     summary: Delete a member
 *     tags: [Members]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Member deleted successfully
 */
router.delete('/:id', memberController.deleteMember);

export default router;
