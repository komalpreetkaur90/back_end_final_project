import Joi from "joi";

export const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    category: Joi.string().required(),
    publishedYear: Joi.number().integer().min(1500).max(2025).required(),
});
