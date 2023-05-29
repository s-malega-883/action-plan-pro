import { Component } from '@angular/core';
import { examples } from 'src/app/examples';
import { OnInit } from "@angular/core";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit{

  todo_list!: examples[];
  localItem !: string;

  constructor() { 
    this.localItem = JSON.parse(localStorage.getItem("todo_list")!);
    if (this.localItem == null) {
      this.todo_list = [];
    }
    else{
      this.todo_list = JSON.parse(JSON.stringify(this.localItem));
    }
      // this.todo_list = [
      // {
      //   sno: 1,
      //   title: "Note 1",
      //   desc: "This is Note 1",
      //   active: true
      // },
      // ];
   }

  ngOnInit(): void{
  }

  DeleteAction(todo_list:examples){
    console.log(todo_list);
    const index = this.todo_list.indexOf(todo_list);
    this.todo_list.splice(index, 1);
    console.log(`Deleted Note ${todo_list.sno}`);
    localStorage.setItem('todo_list', JSON.stringify(this.todo_list));
  }

  AddAction(todo_list:examples){
    console.log(todo_list);
    this.todo_list.push(todo_list);
    localStorage.setItem('todo_list', JSON.stringify(this.todo_list));
  }

}
