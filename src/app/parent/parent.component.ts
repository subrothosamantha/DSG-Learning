import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})

export class ParentComponent implements OnInit {

  permissionFromParent = true;

  islaptop = true;

  course = [{id:1,name:"computer science"},{id:2,name:"physical studies"},{id:3,name:"Astronomy"}]

  constructor() { }

  ngOnInit(): void {
  }

}
