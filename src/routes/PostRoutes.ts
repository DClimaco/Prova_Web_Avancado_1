import { Router } from "express";
import PostController from "../controllers/PostController";

const PostRouter = Router();

// Listar posts
PostRouter.get("/posts", PostController.listPost);

// Inserir post
PostRouter.post("/posts", PostController.createPost);

// Atualizar post
PostRouter.put("/posts/:id", PostController.updatePost);

// Deletar post
PostRouter.delete("/posts/:id", PostController.deletePost);

export default PostRouter;