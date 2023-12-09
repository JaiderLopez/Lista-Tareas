import { Component } from '@angular/core';
import { QueryService } from '../../Services/query.service';
import { ActivatedRoute } from '@angular/router';
import { Asignatura } from '../../Modelos/model';

@Component({
  selector: 'app-ver-tarea',
  templateUrl: './ver-tarea.component.html',
  styleUrl: './ver-tarea.component.css'
})
export class VerTareaComponent {
  asignaturas: any
  constructor(private query: QueryService, private route: ActivatedRoute){}

  id='';
  ngOnInit():void{
    this.id = String(this.route.snapshot.paramMap.get('title'));
    console.log(this.id)
    this.query.getLista(this.id).subscribe(
      res=>{
        console.log(res)
        this.asignaturas = res;
      }
    )
  }

  delTarea(title: string){
    this.query.dLista(title);
    console.log(this.id)
  }
}
