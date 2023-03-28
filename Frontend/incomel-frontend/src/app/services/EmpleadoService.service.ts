import { EmpleadoModel } from "../data_models/EmpleadoModel";

export class EmpleadoService {

    private gEmpleado: EmpleadoModel = new EmpleadoModel;

    getEmpleado(){
        return this.gEmpleado;
    }

    setEmpleado(empleado:EmpleadoModel){
        this.gEmpleado = empleado;
    }
}