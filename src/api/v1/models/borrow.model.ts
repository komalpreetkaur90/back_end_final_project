export interface Borrow {
  id?: string;
  memberId: string;
  bookId: string;
  borrowDate: string; 
  returnDate?: string;
  status: "borrowed" | "returned";
}
