import { Request, Response } from "express";
import {
  getBorrowsService,
  getBorrowByIdService,
  createBorrowService,
  updateBorrowService,
  deleteBorrowService
} from "../services/borrowService";
import { Borrow } from "../models/borrow.model";

export const getBorrows = async (_req: Request, res: Response) => {
  try {
    const borrows = await getBorrowsService();
    res.json({ success: true, data: borrows });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getBorrowById = async (req: Request, res: Response) => {
  try {
    const borrow = await getBorrowByIdService(req.params.id);

    if (!borrow) {
      return res.status(404).json({ success: false, message: "Borrow record not found" });
    }

    res.json({ success: true, data: borrow });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const createBorrow = async (req: Request, res: Response) => {
  try {
    const data: Borrow = req.body;
    const id = await createBorrowService(data);

    res.status(201).json({ success: true, message: "Borrow record created", id });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const updateBorrow = async (req: Request, res: Response) => {
  try {
    const data: Partial<Borrow> = req.body;
    await updateBorrowService(req.params.id, data);

    res.json({ success: true, message: "Borrow record updated" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const deleteBorrow = async (req: Request, res: Response) => {
  try {
    await deleteBorrowService(req.params.id);
    res.json({ success: true, message: "Borrow record deleted" });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
