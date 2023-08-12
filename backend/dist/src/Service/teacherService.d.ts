export declare class TeacherService {
    private repository;
    constructor();
    findAll: () => Promise<any>;
    add: (car: any) => Promise<any>;
    update: (id: any, car: any) => Promise<any>;
    delete: (id: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findByName: (name: any) => Promise<any>;
    findByAge: (minAge: number, maxAge: number) => Promise<any>;
    findBySalary: (minSalary: number, maxSalary: number) => Promise<any>;
}
declare const _default: TeacherService;
export default _default;
