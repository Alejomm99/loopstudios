import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SectionCreationsComponent } from './section-creations/section-creations.component';
import { SectionMainComponent } from './section-main/section-main.component';

@Component({
  standalone: true,
  imports: [HeroComponent, HeaderComponent, SectionCreationsComponent, SectionMainComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
