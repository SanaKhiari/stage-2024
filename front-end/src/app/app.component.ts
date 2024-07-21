import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Stat1Component } from './stat1/stat1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Stat1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'front-end';
}
