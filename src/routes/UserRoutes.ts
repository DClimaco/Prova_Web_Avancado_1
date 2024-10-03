import { Router } from "express";
import UserController from "../controllers/UserController";

const UserRouter = Router();

// Listar usuários
UserRouter.get("/users", UserController.listUser);

// Inserir usuário
UserRouter.post("/users", UserController.createUser);

// Atualizar usuário
UserRouter.put("/users/:id", UserController.updateUser);

// Deletar usuário
UserRouter.delete("/users/:id", UserController.deleteUser);

export default UserRouter;