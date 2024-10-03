import { Router } from "express";
import CommentController from "../controllers/CommentController";

const CommentRouter = Router();

// Listar comentários
CommentRouter.get("/comments", CommentController.listComment);

// Inserir comentário
CommentRouter.post("/comments", CommentController.createComment);

// Atualizar comentário
CommentRouter.put("/comments/:id", CommentController.updateComment);

// Deletar comentário
CommentRouter.delete("/comments/:id", CommentController.deleteComment);

export default CommentRouter;