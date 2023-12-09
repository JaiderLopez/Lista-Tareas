import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'

//modelo de los datos en angular
import { Asignatura, Tareas } from '../Modelos/model';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private angF: AngularFirestore) { }

  getTareas() {
    return this.angF
      .collection("asignaturas")
      .snapshotChanges();
  }

  getTarea(id: string | undefined) {
    return this.angF.collection("asignaturas").doc(id).valueChanges()
  }

  addTarea(tarea: Asignatura) {
    return this.angF.collection("asignaturas").add(tarea);
  }

  upTare(tarea: Asignatura) {
    return this.angF.collection("asignaturas").doc(String(tarea.id)).
      update(tarea);
  }

  delTarea(id: string | undefined) {
    return this.angF.collection("asignaturas").doc(id).delete();
  }
  //bucar por title
  buscarTarea(title: string) {
    return this.angF.collection("tareas", ref => ref.where
      ("name_asignatura", "==", title)).valueChanges();
  }

  //lista
  getLista(name: string) {
    return this.angF.collection("tareas", ref => ref.where
      ("name_asignatura", "==", name)).valueChanges()
  }
  addLista(lista: Tareas) {
    return this.angF.collection("tareas").add(lista)
  }
  //eliminar un doc mediante un title
  uppLista(tarea: Tareas) {
    return this.angF.collection("tareas").doc()
  }

  dLista(id: string) {
    return this.angF.collection("tareas", ref=> ref.where(
      "title", "==", id)).doc(id).delete()
  }
}
