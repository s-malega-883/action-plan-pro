import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { examples } from 'src/app/examples';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  title !: string;
  desc !: string;
  @Output() AddForm: EventEmitter<examples> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    const add_item = {
      sno: 5,
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.AddForm.emit(add_item);
  }

}