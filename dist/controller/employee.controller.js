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
exports.makeBoosAEmployee = exports.saveEmployee = exports.deleteEmployee = exports.editEmployee = exports.getEmployee = exports.getEmployees = void 0;
const bosses_1 = __importDefault(require("../models/bosses"));
const employees_1 = __importDefault(require("../models/employees"));
const employees_2 = __importDefault(require("../models/employees"));
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const empleado = yield employees_2.default.findAll({
        where: {
            status: 1
        }
    });
    if (!empleado)
        return res.status(404).json({ msg: `No registros en la BD` });
    res.json({
        msg: 'getEmployees',
        empleados: empleado
    });
});
exports.getEmployees = getEmployees;
const getEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const empleado = yield employees_2.default.findOne({
        where: { status: 1 },
    });
    if (!empleado)
        return res.status(404).json({ msg: `No existe el empleado con el id ${id}` });
    res.json({
        msg: 'getEmployee',
        empleado
    });
});
exports.getEmployee = getEmployee;
const editEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const empleado = yield employees_2.default.findByPk(id);
        yield empleado.update(body);
        res.json({
            msg: 'editEmployee',
            empleado
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.editEmployee = editEmployee;
const deleteEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const empleado = yield employees_2.default.findByPk(id);
        empleado.status = 0;
        yield empleado.save();
        res.json({
            msg: 'deleteEmployee',
            empleado
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.deleteEmployee = deleteEmployee;
const saveEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_boss, name, last_name, email } = req.body;
    try {
        const existeEmail = yield employees_1.default.findOne({
            where: {
                email
            }
        });
        if (existeEmail) {
            return res.status(400).json({
                msg: `Error, ya existe en usuario con el email: ${email} registrado `,
            });
        }
        const empleado = employees_1.default.build({ id_boss, name, last_name, email });
        yield empleado.save();
        res.status(200).json({
            msg: 'saveEmployee',
            empleado
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.saveEmployee = saveEmployee;
const makeBoosAEmployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const boss = bosses_1.default.build({ id_Employee: id });
        yield boss.save();
        res.status(200).json({
            msg: 'makeABossoneEmployee',
            boss
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hable con el administrador',
        });
    }
});
exports.makeBoosAEmployee = makeBoosAEmployee;
//# sourceMappingURL=employee.controller.js.map