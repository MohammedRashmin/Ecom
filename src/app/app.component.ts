import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterArrayPipe } from './pipes/angular-pipe.pipe';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgLabelTemplateDirective, NgOptionTemplateDirective, NgSelectComponent, FormsModule, HeaderComponent, PipesComponent , FilterArrayPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'E-Commerce';

}
