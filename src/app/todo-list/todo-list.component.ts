import { Component, OnInit } from '@angular/core';

import { Todo } from 'src/app/models/ToDo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent implements OnInit {
  todoArray :Array<string> =[];
  index: number = 0
  todos: Todo = {
      nombre: "",
      descripcion: "",
      titulo: "",
      fecha: "16/09/2020"
  }
  todo : Todo[] = [];

  constructor() { 
  
  }

  ngOnInit(): void {
  
    
  }

  
  onSubmit(){
    var contador = 0;
    console.log(this.todos.nombre)
    var valores :Array<string> = [
      "Titulo: "+this.todos.titulo,
      "Fecha: "+this.todos.fecha,
      "Nombre: "+this.todos.nombre,
      "Descripcion: "+this.todos.descripcion
    ]
    for (let i of this.todoArray){
      contador++;
    }
    for (let clave of valores){
      console.log("contador "+contador+ "clave "+clave)
        this.todoArray[contador] = clave;
        contador++;
    }
//this.todo.push(this.todos);
 
  }
}
