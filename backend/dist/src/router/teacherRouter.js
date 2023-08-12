"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const teacherController_1 = __importDefault(require("../controller/teacherController"));
const teacherRouter = (0, express_1.Router)();
teacherRouter.get('/', teacherController_1.default.findAll);
teacherRouter.get('/:id', teacherController_1.default.findById);
teacherRouter.post('', teacherController_1.default.add);
teacherRouter.put('/:id', teacherController_1.default.update);
teacherRouter.delete('/:id', teacherController_1.default.delete);
exports.default = teacherRouter;
//# sourceMappingURL=teacherRouter.js.map