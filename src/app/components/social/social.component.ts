import { IconModule } from '@abhinavakhil/iconify-angular';
import { Component } from '@angular/core';
import iconFacebook from '@iconify/icons-mdi/facebook-box';
import iconInstagram from '@iconify/icons-mdi/instagram';
import iconPinterest from '@iconify/icons-mdi/pinterest';
import iconTwitter from '@iconify/icons-mdi/twitter';

@Component({
  selector: 'app-social',
  standalone: true,
  imports: [IconModule],
  templateUrl: './social.component.html',
})
export class SocialComponent {
  socials = [
    { icon: iconFacebook, link: 'https://facebook.com' },
    { icon: iconTwitter, link: 'https://twitter.com' },
    { icon: iconPinterest, link: 'https://pinterest.com' },
    { icon: iconInstagram, link: 'https://instagram.com' },
  ];
}
