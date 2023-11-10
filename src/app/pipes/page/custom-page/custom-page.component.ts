import { Component } from '@angular/core';
import { Colors, IHero } from './interfaces/heroes-interface';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styles: [
  ]
})
export class CustomPageComponent {
  public toggle : boolean = false;
  public label : "A mayúsculas" | "A minúsculas" = "A mayúsculas";
  public selectedCategory : keyof IHero | '' = '';

  public heroes : IHero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Colors.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Colors.black
    },
    {
      name: 'Spiderman',
      canFly: false,
      color: Colors.red
    },
    {
      name: 'Ironman',
      canFly: true,
      color: Colors.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Colors.green
    },
  ]

  public setToggle () : void {
    this.label === 'A mayúsculas' ? this.label = 'A minúsculas' : this.label = "A mayúsculas";
    this.toggle = !this.toggle;
  }

  public setSelectedCategory ( category: keyof IHero ) : void {
    this.selectedCategory = category;
  }
}
