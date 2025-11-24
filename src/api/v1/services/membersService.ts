import {
  createDocument,
  getDocuments,
  getDocumentById,
  updateDocument,
  deleteDocument
} from "../repositories/firestoreRepository";

import { Member } from "../models/member.model";

const COLLECTION = "members";

export const createMemberService = async (data: Member) => {
  return await createDocument<Member>(COLLECTION, data);
};

export const getMembersService = async () => {
  const snapshot = await getDocuments(COLLECTION);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Member[];
};

export const getMemberByIdService = async (id: string) => {
  const doc = await getDocumentById(COLLECTION, id);
  return doc?.exists ? ({ id: doc.id, ...doc.data() } as Member) : null;
};

export const updateMemberService = async (id: string, data: Partial<Member>) => {
  return await updateDocument<Member>(COLLECTION, id, data);
};

export const deleteMemberService = async (id: string) => {
  return await deleteDocument(COLLECTION, id);
};


