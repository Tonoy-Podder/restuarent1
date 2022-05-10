import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';
  list:any[]=[];
  addTask(iteam:string)
  {
     this.list.push({id:this.list.length,name:iteam})
     console.warn(this.list);

  }
  removeTask(id:number)
  {
    console.warn(id)
    this.list=this.list.filter(iteam=>iteam.id!==id);
  }
  getValue()
  {
    return "Tonoy Podder"
  }
  getValue1()
  {
    return "Created By"
  }

}
