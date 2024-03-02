import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {}
