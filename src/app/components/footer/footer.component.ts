import { IconModule } from '@abhinavakhil/iconify-angular';
import { Component } from '@angular/core';
import iconFacebook from '@iconify/icons-mdi/facebook-box';
import iconInstagram from '@iconify/icons-mdi/instagram';
import iconPinterest from '@iconify/icons-mdi/pinterest';
import iconTwitter from '@iconify/icons-mdi/twitter';
import { LogoComponent } from '../logo/logo.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent, NavComponent, IconModule],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  facebook = iconFacebook;
  twitter = iconTwitter;
  pinterest = iconPinterest;
  intagram = iconInstagram;
}
