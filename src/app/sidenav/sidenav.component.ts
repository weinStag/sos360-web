import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NavItem } from '../models/navItems.model';
import { NavService } from '../services/nav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ])
  ]
})

export class SidenavComponent implements OnInit {
  expanded: boolean = true;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem = {} as NavItem;
  @Input() depth: number = -1;

  constructor(public navService: NavService) {
    if (this.depth === -1 || this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit(): void {

  }

  onChildSelected() {
    this.navService.closeNav();
    this.expanded = false;
  }

  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.navService.closeNav();
    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}

