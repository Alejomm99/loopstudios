import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navLinks } from './nav';

@Component({
  selector: 'app-nav-mobile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav-mobile.component.html',
  styleUrl: './nav-mobile.component.css',
})
export class NavMobileComponent {
  links = navLinks;
}
