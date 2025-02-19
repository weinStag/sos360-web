import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Emergency } from '../models/emergency.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() ToggleSideNav : EventEmitter<any> = new EventEmitter();

  homeLink = '/home';
  loginLink = '/login';
  amount: number = 5;
  notifications: Emergency[] = [];
  dropdownMenu: boolean = false;
  dropdownMenuNotification: boolean = false;

  constructor(
    private notificationService: NotificationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.notificationService.onNewEmergency().subscribe((emergency: Emergency) => {
      this.notifications.push(emergency);
      this.amount++;
    });
  }

  toggleSideNav() {
    this.ToggleSideNav.emit();
  }

  //ver todas as notificações
  viewAllNotifications() {
    let route = "/view-notifications";
    this.router.navigate([route]);
  }

  //lixeira passando o id da notificacao
  readOne(id: any) {
    // this.PushNotificationService.readByNotificationId(id, true).subscribe((node) => {
    //   this.amount = this.amount - 1;
    // });
  }

  toogleDropdownNotification() {
    this.dropdownMenuNotification = !this.dropdownMenuNotification;
  }


  onClickedOutside(e: Event, menu: number) {
    if (this.dropdownMenuNotification && menu === 0) {
      this.toogleDropdownNotification();
    }

    if (this.dropdownMenu && menu === 1) {
      //this.toogleDropdown();
    }
  }

}
