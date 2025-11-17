import { db } from "../../../config/firebaseConfig";

const collection = db.collection("books");

export const createBook = async (data: any) => {
    const doc = await collection.add({
        ...data,
        createdAt: new Date(),
    });
    return { id: doc.id, ...data };
};

export const getAllBooks = async () => {
    const snapshot = await collection.get();
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

export const getBookById = async (id: string) => {
    const doc = await collection.doc(id).get();
    return doc.exists ? { id, ...doc.data() } : null;
};

export const updateBook = async (id: string, data: any) => {
    await collection.doc(id).update(data);
    const doc = await collection.doc(id).get();
    return { id, ...doc.data() };
};

export const deleteBook = async (id: string) => {
    await collection.doc(id).delete();
};

export const updateBookCover = async (id: string, coverUrl: string) => {
    const ref = db.collection("books").doc(id);

    await ref.update({
        coverUrl,
        updatedAt: new Date(),
    });

    const updated = await ref.get();
    return updated.data();
};
