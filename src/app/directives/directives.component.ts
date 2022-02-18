import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  serverCreated = false;
  id = 4;
  name = '';

  
  viewMode = 'map';

  course = [
    {id : 1, name : "computer science"},
    {id : 2, name : "Physics"},
    {id : 3, name : "Social"},
  ]

  
  addanother(){
    this.course.push({id:this.id,name: this.name});
  }


  constructor() { }

  ngOnInit(): void {
  }

  changeviewmode(event : string){
    this.viewMode = event;
  }


}
