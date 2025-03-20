"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const app = (0, express_1.default)();
// Indicando que vai usar esse tipo de formato.
app.use(express_1.default.json());
// Pacote para habilitar qualquer URL/IP conseguir fazer requisição nessa API.
app.use((0, cors_1.default)());
app.use((0, express_fileupload_1.default)({
    limits: { fileSize: 50 * 1024 * 1024 }, // No maximo 50mb de img
}));
// vai utilizar essa route
app.use(routes_1.router);
// ROTA PARA ACESSO DA IMG
app.use('/files', express_1.default.static(path_1.default.resolve(__dirname, '..', 'tmp')));
// Tratando erros 
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        //se for uma instancia do tipo error
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error.'
    });
});
// porta do servidor, e mensagem quando der certo.
app.listen(process.env.PORT, () => console.log('Servidor online!'));
