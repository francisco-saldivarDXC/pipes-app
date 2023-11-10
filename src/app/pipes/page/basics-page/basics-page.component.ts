import { Component } from '@angular/core';

@Component({
  selector: 'pipes-basics-page',
  templateUrl: './basics-page.component.html',
  styles: [
  ]
})
export class BasicsPageComponent {
  public lowerCase : string = "francisco saldivar";
  public upperCase : string = "FRANCISCO SALDIVAR";
  public titleCase : string = "FRanCisCo SALdivar";

  public actualDate : Date = new Date();
}
