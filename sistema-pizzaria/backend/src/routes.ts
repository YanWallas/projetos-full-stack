import { Router } from "express";
import multer from "multer";


import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// -- ROTAS USER --
router.post('/users', new CreateUserController().handle)

// -- ROTA DE LOGIN --
router.post('/session', new AuthUserController().handle)

// -- ROTA PARA BUSCAR INFORMAÇÃO DO USUARIO.
router.get('/me', isAuthenticated, new DetailUserController().handle)

// -- ROTAS CATEGORY
router.post('/category', isAuthenticated, new CreateCategoryController().handle)

// -- ROTA QUE LISTA TODAS AS CATEGORY
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// -- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

// --ROTAS PARA PEGAR TODOS OS PRODUTOS DE UMA CATEGORIA
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// -- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)

// -- ROTA PARA DELETAR PEDIDO
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

export { router };