import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
/*
->This is the component class where all bussiness logic goes in and app-component is 
view of that class
->one way data binding means binding data in one way
either from model to view or view to model
->there are multiple ways to achive this
       *sending data from component to view
            1.Interpolation {{}} //only works with strings drawback
            2.Property binding []  //also works fine with property and any boolean

       *View to component
            1.Event Binding
  ->Two way data binding

*/

export class DatabindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'all-practice';
  name = '';
  place = '';
  disable = true;
  roll:number = 44;
  userUpdating = '';
  updatedservername = 'no server created!!!';
  updateservernameusingng = '';
  servercreationstatus = 'no server created!!!';
  userName = '';
  private _customerName : string;

 
   servername = ''


  returnMyDetails(){
    this.roll = 33;
    this.name = 'sheela ki jawani';

    return this.name+" is of "+this.roll;
  }

  runthis(){
    this.name = 'subrotho samantha';
    this.place = 'Hyderabad';
  }



  inputParam(event : any){
    this.userUpdating = event.target.value;
  }



  updateserver(event: any){
    this.servername = event.target.value;
  }

  onbuttonclickserverupdate(){
    this.updatedservername = 'server created with name '+this.servername;
  }

  updateservernameusingngmethod(){
    this.servercreationstatus  = 'server created with name '+ this.updateservernameusingng;
  }

  updateUserName(updatedName: any){
    this.userName = updatedName;
    if(this.userName === 'subroto'){
      alert('welcome')
    }
  }

  get customerName(): string{
    return this._customerName;
  }

  set customerName(customerName:string){
    this._customerName = customerName;
  }
}
