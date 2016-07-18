import { Component } from '@angular/core';
export class Hero {
  id: number;
  name: string;
}



@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}}</h2>
    <div><label>id: </label>{{hero.id}}</div>

    <div>
      <label>name: </label>
      <input type="text" placeholder="name" [(ngModel)]="hero.name" />
    </div>
  `
})
export class AppComponent {
  // properties
  // a title property for the application name
  // a hero property for a hreo name "Windstorm"
  title = 'Tour of Heroes';

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }


}