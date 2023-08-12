import {Teachers} from "../entity/teacher";
import {AppDataSource} from "../data-source";
import {Between, Like} from "typeorm";

export class TeacherService{
    private repository;
    constructor() {
        this.repository = AppDataSource.getRepository(Teachers);
    }
    findAll=async ()=>{
      return   await  this.repository.find()
    }
    add = async (car) => {
        return await this.repository.save(car)
    }
    update = async (id, car) => {
        return await this.repository.update(id, car)
    }
    delete = async (id) => {
        return await this.repository.delete(id)
    }
    findById = async (id) => {
        return await this.repository.find({
            where: {
                id : id
            }
        })
    }
    findByName = async (name) => {
        return await this.repository.find({
            where: {
                name: Like(`%${name}%`)
            }
        })
    }
    findByAge = async (minAge:number,maxAge:number)=>{
        return await this.repository.find({
            where :{
                age: Between(minAge,maxAge)
            }
        })
    }
    findBySalary = async (minSalary:number,maxSalary:number)=>{
        return await this.repository.find({
            where :{
                salary: Between(minSalary,maxSalary)
            }
        })
    }


}
export default new TeacherService()