import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stat1Component } from './components/stat1/stat1.component';
import { AgePyramidComponent } from './components/age-pyramid/age-pyramid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Stat1Component, AgePyramidComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-end';
}
