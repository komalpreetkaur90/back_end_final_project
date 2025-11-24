import { Request, Response } from "express";
import {
  createMemberService,
  getMembersService,
  getMemberByIdService,
  updateMemberService,
  deleteMemberService
} from "../services/membersService";
import { Member } from "../models/member.model";

export const createMember = async (req: Request, res: Response) => {
  try {
    const data: Member = req.body;
    const id = await createMemberService(data);

    res.status(201).json({ success: true, message: "Member created", id });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getMembers = async (_req: Request, res: Response) => {
  try {
    const members = await getMembersService();
    res.json({ success: true, data: members });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getMemberById = async (req: Request, res: Response) => {
  try {
    const member = await getMemberByIdService(req.params.id);

    if (!member) {
      return res.status(404).json({ success: false, message: "Member not found" });
    }

    res.json({ success: true, data: member });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  try {
    const data: Partial<Member> = req.body;
    await updateMemberService(req.params.id, data);

    res.json({ success: true, message: "Member updated" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteMember = async (req: Request, res: Response) => {
  try {
    await deleteMemberService(req.params.id);

    res.json({ success: true, message: "Member deleted" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
