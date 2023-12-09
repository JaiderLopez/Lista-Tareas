import { Component } from '@angular/core';
import { QueryService } from '../../Services/query.service';
import { Asignatura } from '../../Modelos/model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent {
  Tareas: any[] = []
  constructor(private query: QueryService, private router: Router) { }

  formulario: Asignatura = {
    name_asignatura: 'Matematicas',
    name_docente: 'Francisco Gonzales',
    created_at: Date.now()
  }
  ngOnInit(): void {
    this.query.getTareas().subscribe((res) => {
      this.Tareas = res.map((e) => {
        return {
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Asignatura)
        }
      })
    })
  }

  add(){
    this.query.addTarea(this.formulario);
  }
  delA(id: string){
    this.query.delTarea(id);
  }
  // verT(){
  //   this.router.navigate(['ver-tarea']);
  // }
}
