import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { examples } from 'src/app/examples';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit{

  @Input() todo_list!: examples;
  @Output() DeleteForm: EventEmitter<examples> = new EventEmitter();
  
  constructor() {}

  ngOnInit(): void{
  }

  onClick(todo_list: examples){
    this.DeleteForm.emit(todo_list);
    console.log("Button Triggered");
  }
}

