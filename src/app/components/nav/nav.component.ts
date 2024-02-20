import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  links = [
    { path: '/about', text: 'About' },
    { path: '/careers', text: 'Careers' },
    { path: '/events', text: 'Events' },
    { path: '/products', text: 'Products' },
    { path: '/support', text: 'Support' },
  ];
}
