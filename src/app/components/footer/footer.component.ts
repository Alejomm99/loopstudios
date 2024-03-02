import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { NavComponent } from '../nav/nav.component';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, NavComponent, SocialComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {}
