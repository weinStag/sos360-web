import { Injectable } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { NavItem } from '../models/navItems.model';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  public appDrawer!: MatDrawer;


  // LABEL | VALUE = SÃO UTILIZADOS PARA IDENTIFICAÇÃO NO BANCO DE DADOS
  // PERMISSIONACCESS = É UTILIZADO PARA GERENCIAMENTO E CONTROLE DE ACESSO DO SISTEMA NA TELA DE PERFIL

  navItems: NavItem[] = [];

  constructor() {
    if (this.navItems.length === 0) {
      this.getNavItems();
    }
  }

  public closeNav() {
    this.appDrawer.close();
  }

  public openNav() {
    this.appDrawer.open();
  }

  getNavItems() {
    return this.navItems = [
      {
        link: '',
        label: 'admin',
        value: 'ADMIN',
        text: 'sidenav.admin',
        children: [
          {
            link: '/admin',
            label: 'Admin',
            value: 'ADMIN',
            text: 'sidenav.adminPanel',
          },
        ]
      },
      {
        link: '',
        label: 'emergency',
        value: 'EMERGENCY',
        text: 'sidenav.emergency',
        children: [
          {
            link: '/police',
            label: 'Police',
            value: 'POLICE',
            text: 'sidenav.policePanel',
          },
          {
            link: '/firefighter',
            label: 'Firefighter',
            value: 'FIREFIGHTER',
            text: 'sidenav.firefighterPanel',
          },
          {
            link: '/ambulance',
            label: 'Ambulance',
            value: 'AMBULANCE',
            text: 'sidenav.ambulancePanel',
          },
        ]
      },
      {
        link: '',
        label: 'notifications',
        value: 'NOTIFICATIONS',
        text: 'sidenav.notifications',
        children: [
          {
            link: '/view-notifications',
            label: 'View Notifications',
            value: 'VIEW_NOTIFICATIONS',
            text: 'sidenav.view-notifications',
          },
        ]
      },
      {
        link: '',
        label: 'logs',
        value: 'LOGS',
        text:  'sidenav.logs',
        children: [
          {
            link: '/view-logs',
            label: 'View Logs',
            value: 'VIEW LOGS',
            text: 'sidenav.view-logs',
          },
        ]
      }
    ];
  }
}
