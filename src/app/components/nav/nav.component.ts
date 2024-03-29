import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { navLinks } from './nav';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  links = navLinks;
}
