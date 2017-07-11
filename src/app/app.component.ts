import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  //variable declaration
  title:string;
  name:string;
   
   ngOnInit() {
   this.title = 'Welcome to Angular Data Binding';
   this.name ='One way Data Binding(interpolation)';
     
   }
}
