export declare class TeacherController {
    private teacherService;
    constructor();
    findAll: (req: any, res: any) => Promise<void>;
    add: (req: any, res: any) => Promise<void>;
    update: (req: any, res: any) => Promise<void>;
    delete: (req: any, res: any) => Promise<void>;
    findByName: (req: any, res: any) => Promise<void>;
    findById: (req: any, res: any) => Promise<void>;
}
declare const _default: TeacherController;
export default _default;
