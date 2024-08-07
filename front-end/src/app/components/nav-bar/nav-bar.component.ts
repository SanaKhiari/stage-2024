import { Component } from '@angular/core';
import { HomePageComponent } from '../../pages/home-page/home-page.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [HomePageComponent, RouterOutlet],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  user = {
    name: 'John Doe',
    profilePicture: '',
  };
}
