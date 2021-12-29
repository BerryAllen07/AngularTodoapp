import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
 todos!:Todo[]
  constructor() {
    let localItem = localStorage.getItem("todos");
    if(localItem==null)
    this.todos=[]
    else{
      this.todos = JSON.parse(localItem);
    }
   }

  ngOnInit(): void {
  }
  // todoDelete
  deleteTodo(todo:Todo){
    console.log(todo);
    const index=this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo )
    localStorage.setItem("todos",JSON.stringify(this.todos));
  } 
  toggletodo(todo:Todo){
    const index=this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  } 
}
