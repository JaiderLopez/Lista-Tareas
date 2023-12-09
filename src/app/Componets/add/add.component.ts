import { Component } from '@angular/core';
import { QueryService } from '../../Services/query.service';
import { Asignatura } from '../../Modelos/model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  public asignatura: FormGroup;
  constructor(
    private query: QueryService,
    private formBuilder: FormBuilder,
    private router: Router) {
    this.asignatura = this.formBuilder.group({
      name_asignatura: '',
      name_docente: '',
      created_at: Date.now()
    })
  }


  Tareas: any[] = []


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

  add() {
    this.query.addTarea(this.asignatura.value);
    console.log(this.asignatura.value)
    // alert(this.asignatura.get('name_asignatura')?.value()+"Fue Registrada Con Exito!")
    this.asignatura.get('name_asignatura')?.setValue('');
    this.asignatura.get('name_docente')?.setValue('');
  }
  delA(id: string){
    this.query.delTarea(id);
  }
}
