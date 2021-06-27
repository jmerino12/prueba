"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.existeEsteJefe = exports.existeID = exports.existeEmail = void 0;
const bosses_1 = __importDefault(require("../models/bosses"));
const employees_1 = __importDefault(require("../models/employees"));
const existeEmail = (email = '') => __awaiter(void 0, void 0, void 0, function* () {
    const exiteEmail = yield employees_1.default.findOne({ where: { email } });
    if (exiteEmail) {
        throw new Error(`El email ${email} ya existe.`);
    }
});
exports.existeEmail = existeEmail;
const existeID = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeID = yield employees_1.default.findOne({
        where: {
            idemployee: id,
            status: 1
        }
    });
    if (!existeID) {
        throw new Error(`El id:${id} no existe.`);
    }
});
exports.existeID = existeID;
const existeEsteJefe = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const existeID = yield bosses_1.default.findOne({
        where: {
            id_Employee: id,
        }
    });
    if (existeID) {
        throw new Error(`Ya existe este jefe:${id}`);
    }
});
exports.existeEsteJefe = existeEsteJefe;
//# sourceMappingURL=DB-Validator.js.map