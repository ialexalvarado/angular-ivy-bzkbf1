import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  list_person:Person[] = []

  fname:string=""
  lname:string=""

  ngOnInit(){
    this.list_person.push({id:1, first_name:'Raul',last_name:'Jimenez'})
    this.list_person.push({id:2, first_name:'Marisol',last_name:'Nuñez'})
    this.list_person.push({id:3, first_name:'Ivan',last_name:'Lopez'})
  }
  
  remove_person(id){
    console.log(id)
    const index= this.list_person.findIndex(x=> x.id== id)
    //console.log(index)
    this.list_person.splice(index, 1);
    //console.log(this.list_person)
  }

  add_person()
  {
    this.list_person.push({id: this.list_person.length +1, first_name: this.fname, last_name: this.lname})
    console.log(this.list_person)
  }
}


export class Person{
  id:number
  first_name:string
  last_name:string
}

