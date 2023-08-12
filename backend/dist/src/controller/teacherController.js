"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherController = void 0;
const teacherService_1 = __importDefault(require("../Service/teacherService"));
class TeacherController {
    constructor() {
        this.findAll = async (req, res) => {
            let list;
            if (req.query.minAge && req.query.maxAge) {
                list = await this.teacherService.findByAge(Number(req.query.minAge), Number(req.query.maxAge));
            }
            else if (req.query.minSalary && req.query.maxSalary) {
                list = await this.teacherService.findBySalary(Number(req.query.minSalary), Number(req.query.maxSalary));
            }
            else if (req.query.name) {
                list = await this.teacherService.findByName(req.query.name);
            }
            else {
                list = await this.teacherService.findAll();
            }
            res.json(list);
        };
        this.add = async (req, res) => {
            let data = await this.teacherService.add(req.body);
            res.json(data);
        };
        this.update = async (req, res) => {
            let data = await this.teacherService.update(req.params.id, req.body);
            res.json(data);
        };
        this.delete = async (req, res) => {
            let data = await this.teacherService.delete(req.params.id);
            res.json(data);
        };
        this.findByName = async (req, res) => {
            let data = await this.teacherService.findByName(req.query.name);
            res.json(data);
        };
        this.findById = async (req, res) => {
            let data = await this.teacherService.findById(req.params.id);
            res.json(data);
        };
        this.teacherService = teacherService_1.default;
    }
}
exports.TeacherController = TeacherController;
exports.default = new TeacherController();
//# sourceMappingURL=teacherController.js.map