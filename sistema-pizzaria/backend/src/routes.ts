import { Router } from "express";
import multer from "multer";


import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { DeleteCategoryController } from "./controllers/category/DeleteCategoryController";

import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListByCategoryController } from "./controllers/product/ListByCategoryController";

import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";

import { AddItemController } from "./controllers/order/AddItemController";

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";

import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

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

router.delete('/category/remove', isAuthenticated, new DeleteCategoryController().handle)

// -- ROTAS PRODUCT
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

// --ROTAS PARA PEGAR TODOS OS PRODUTOS DE UMA CATEGORIA
router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)

// -- ROTAS ORDER
router.post('/order', isAuthenticated, new CreateOrderController().handle)

// -- ROTA PARA DELETAR PEDIDO
router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

// --ROTA CRIAR ITEM
router.post('/order/add', isAuthenticated, new AddItemController().handle)

// -- ROTA PARA REMOVER UM ITEM
router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

// -- ROTA PARA ATUALIZAR ORDER
router.put('/order/send', isAuthenticated, new SendOrderController().handle)

// -- ROTA PARA LISTAR TODOS OS PEDIDOS EM ABERTO.
router.get('/orders', isAuthenticated, new ListOrderController().handle)

// -- ROTA PARA DETALHES DE ORDERS
router.get('/order/detail', isAuthenticated, new DetailOrderController().handle)

// -- ROTA FINALIZANDO PEDIDO
router.put('/order/finish', isAuthenticated, new FinishOrderController().handle)

export { router };