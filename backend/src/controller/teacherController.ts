import teacherService from "../Service/teacherService";

export class TeacherController{
    private teacherService;
    constructor() {
        this.teacherService = teacherService;
    }
    findAll=async (req,res)=>{
        let list;
        if(req.query.minAge && req.query.maxAge){
            list = await  this.teacherService.findByAge(Number(req.query.minAge),Number(req.query.maxAge))
        }else if(req.query.minSalary && req.query.maxSalary){
            list = await  this.teacherService.findBySalary(Number(req.query.minSalary),Number(req.query.maxSalary))
        }else if(req.query.name){
            list = await this.teacherService.findByName(req.query.name)
        }
        else {
            list = await  this.teacherService.findAll()
        }
        res.json(list)
    }
    add = async (req, res) => {
        let data = await this.teacherService.add(req.body);
        res.json(data)
    }
    update = async (req, res) => {
        let data = await this.teacherService.update(req.params.id, req.body);
        res.json(data)
    }
    delete = async (req, res) => {
        let data = await this.teacherService.delete(req.params.id);
        res.json(data)
    }
    findByName = async (req, res) => {
        let data = await this.teacherService.findByName(req.query.name);
        res.json(data)
    }
    findById = async (req, res) => {
        let data = await this.teacherService.findById(req.params.id);
        res.json(data)
    }

}
export default new TeacherController()