"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryController_1 = require("./controllers/category/ListCategoryController");
const DeleteCategoryController_1 = require("./controllers/category/DeleteCategoryController");
const CreateProductController_1 = require("./controllers/product/CreateProductController");
const ListByCategoryController_1 = require("./controllers/product/ListByCategoryController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemController_1 = require("./controllers/order/AddItemController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const RemoveItemController_1 = require("./controllers/order/RemoveItemController");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOrderController_1 = require("./controllers/order/DetailOrderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
// -- ROTAS USER --
router.post('/users', new CreateUserController_1.CreateUserController().handle);
// -- ROTA DE LOGIN --
router.post('/session', new AuthUserController_1.AuthUserController().handle);
// -- ROTA PARA BUSCAR INFORMAÇÃO DO USUARIO.
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
// -- ROTAS CATEGORY
router.post('/category', isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().handle);
// -- ROTA QUE LISTA TODAS AS CATEGORY
router.get('/category', isAuthenticated_1.isAuthenticated, new ListCategoryController_1.ListCategoryController().handle);
router.delete('/category/remove', isAuthenticated_1.isAuthenticated, new DeleteCategoryController_1.DeleteCategoryController().handle);
// -- ROTAS PRODUCT
//router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.post('/product', isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
// --ROTAS PARA PEGAR TODOS OS PRODUTOS DE UMA CATEGORIA
router.get('/category/product', isAuthenticated_1.isAuthenticated, new ListByCategoryController_1.ListByCategoryController().handle);
// -- ROTAS ORDER
router.post('/order', isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
// -- ROTA PARA DELETAR PEDIDO
router.delete('/order', isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
// --ROTA CRIAR ITEM
router.post('/order/add', isAuthenticated_1.isAuthenticated, new AddItemController_1.AddItemController().handle);
// -- ROTA PARA REMOVER UM ITEM
router.delete('/order/remove', isAuthenticated_1.isAuthenticated, new RemoveItemController_1.RemoveItemController().handle);
// -- ROTA PARA ATUALIZAR ORDER
router.put('/order/send', isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
// -- ROTA PARA LISTAR TODOS OS PEDIDOS EM ABERTO.
router.get('/orders', isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
// -- ROTA PARA DETALHES DE ORDERS
router.get('/order/detail', isAuthenticated_1.isAuthenticated, new DetailOrderController_1.DetailOrderController().handle);
// -- ROTA FINALIZANDO PEDIDO
router.put('/order/finish', isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
