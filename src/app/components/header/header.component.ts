import { IconModule } from '@abhinavakhil/iconify-angular';
import { NgClass } from '@angular/common';
import { Component, HostListener, Input, effect, signal } from '@angular/core';
import iconClose from '@iconify/icons-mdi/close';
import iconHamburgerMenu from '@iconify/icons-mdi/hamburger-menu';
import { LogoComponent } from '../logo/logo.component';
import { NavMobileComponent } from '../nav/nav-mobile.component';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, LogoComponent, NavComponent, NavMobileComponent, IconModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() isDynamic = false;

  iconHamburgerMenu = iconHamburgerMenu;
  iconClose = iconClose;

  isScrolling = signal(false);
  isMenuOpen = signal(false);

  constructor() {
    effect(() => {
      if (this.isMenuOpen()) {
        document.body.classList.add('overflow-hidden');
      } else {
        document.body.classList.remove('overflow-hidden');
      }
    });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isScrolling.set(window.scrollY > 0);
  }
}
