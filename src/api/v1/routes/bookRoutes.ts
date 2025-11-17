import { Router } from 'express';
import * as bookController from '../controllers/books.controller';
import { upload } from "../../../config/multerConfig";

const router = Router();


router.post('/books', bookController.createBook);
router.put('/books/:id', bookController.updateBook);
router.get('/books', bookController.getBooks);
router.get('/books/:id', bookController.getBookById);
router.delete('/books/:id', bookController.deleteBook);

router.post('/:id/upload-cover', upload.single('cover'), bookController.uploadBookCover);

export default router;