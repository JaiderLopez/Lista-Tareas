export interface Asignatura{
   id?: string;
   name_asignatura?: string;
   name_docente?: string;
   // image?: string;
   created_at?: Date|number;
}
export interface Tareas{
   id?: string;
   title?: string;
   name_asignatura?: string;
   description?: string;
   // image?: string;
   fecha_entrega: Date;
   created_at?: Date;
}