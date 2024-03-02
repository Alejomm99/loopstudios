import { Component } from '@angular/core';

@Component({
  selector: 'app-section-creations',
  standalone: true,
  templateUrl: './section-creations.component.html',
})
export class SectionCreationsComponent {
  creations = [
    {
      title: 'deep earth',
      image: '/assets/images/desktop/image-deep-earth.jpg',
      imageMobile: '/assets/images/mobile/image-deep-earth.jpg',
      link: '#',
    },
    {
      title: 'night arcade',
      image: '/assets/images/desktop/image-night-arcade.jpg',
      imageMobile: '/assets/images/mobile/image-night-arcade.jpg',
      link: '#',
    },
    {
      title: 'soccer team VR',
      image: '/assets/images/desktop/image-soccer-team.jpg',
      imageMobile: '/assets/images/mobile/image-soccer-team.jpg',
      link: '#',
    },
    {
      title: 'the grid',
      image: '/assets/images/desktop/image-grid.jpg',
      imageMobile: '/assets/images/mobile/image-grid.jpg',
      link: '#',
    },

    {
      title: 'from up above vr',
      image: '/assets/images/desktop/image-from-above.jpg',
      imageMobile: '/assets/images/mobile/image-from-above.jpg',
      link: '#',
    },
    {
      title: 'pocket orevr',
      image: '/assets/images/desktop/image-pocket-borealis.jpg',
      imageMobile: '/assets/images/mobile/image-pocket-borealis.jpg',
      link: '#',
    },
    {
      title: 'the curiosity',
      image: '/assets/images/desktop/image-curiosity.jpg',
      imageMobile: '/assets/images/mobile/image-curiosity.jpg',
      link: '#',
    },
    {
      title: 'make it fisheye',
      image: '/assets/images/desktop/image-fisheye.jpg',
      imageMobile: '/assets/images/mobile/image-fisheye.jpg',
      link: '#',
    },
  ];
}
