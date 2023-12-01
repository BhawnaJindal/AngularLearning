import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firstapp';
  data3='bhwna';
  public routerLinkVariable = "/home"; 
  public routerLinkVariable2 = "/Astrology";
  getData(eve:any){
    console.log(eve);
  }
}
