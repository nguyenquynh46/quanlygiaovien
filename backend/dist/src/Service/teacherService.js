"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeacherService = void 0;
const teacher_1 = require("../entity/teacher");
const data_source_1 = require("../data-source");
const typeorm_1 = require("typeorm");
class TeacherService {
    constructor() {
        this.findAll = async () => {
            return await this.repository.find();
        };
        this.add = async (car) => {
            return await this.repository.save(car);
        };
        this.update = async (id, car) => {
            return await this.repository.update(id, car);
        };
        this.delete = async (id) => {
            return await this.repository.delete(id);
        };
        this.findById = async (id) => {
            return await this.repository.find({
                where: {
                    id: id
                }
            });
        };
        this.findByName = async (name) => {
            return await this.repository.find({
                where: {
                    name: (0, typeorm_1.Like)(`%${name}%`)
                }
            });
        };
        this.findByAge = async (minAge, maxAge) => {
            return await this.repository.find({
                where: {
                    age: (0, typeorm_1.Between)(minAge, maxAge)
                }
            });
        };
        this.findBySalary = async (minSalary, maxSalary) => {
            return await this.repository.find({
                where: {
                    salary: (0, typeorm_1.Between)(minSalary, maxSalary)
                }
            });
        };
        this.repository = data_source_1.AppDataSource.getRepository(teacher_1.Teachers);
    }
}
exports.TeacherService = TeacherService;
exports.default = new TeacherService();
//# sourceMappingURL=teacherService.js.map