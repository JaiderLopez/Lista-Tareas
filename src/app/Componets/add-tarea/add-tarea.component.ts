import { Component } from '@angular/core';
import { QueryService } from '../../Services/query.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Asignatura } from '../../Modelos/model';
@Component({
  selector: 'app-add-tarea',
  templateUrl: './add-tarea.component.html',
  styleUrl: './add-tarea.component.css'
})
export class AddTareaComponent {
  asignaturas: any
  public asignatura: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private query: QueryService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.asignatura = this.formBuilder.group({
      // name_asignatura: String(this.id),
      title: '',
      description: '',
      fecha_entrega: '',
      activated: true
    })
  }
  id = '';
  ngOnInit(): void {
    this.id = String(this.route.snapshot.paramMap.get('title'));
    console.log(this.id)
  }
  addTarea() {
    //añadir campo name al this.asignatura
    this.asignatura.value.name_asignatura = this.id;
    console.log(this.asignatura.value)
    this.query.addLista(this.asignatura.value)
    this.router.navigate(['home'])
  }

}
