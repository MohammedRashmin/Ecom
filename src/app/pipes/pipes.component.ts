import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilterArrayPipe } from './angular-pipe.pipe';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterArrayPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

 today : number = Date.now();
 price : number = 2500.5;
 obj = {name : 'John', age : 25}
 name:string = '';
 title : any ;

 Products:any =  ["Apple", "Orange", "TV", "Remote"]

  updateName(){
    this.obj.name = 'jane doe';
  }


}



