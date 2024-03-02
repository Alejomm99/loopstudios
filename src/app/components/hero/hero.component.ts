import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input({ required: true }) backgroundImage!: string;
  @Input() backgroundImageMobile!: string;
}
