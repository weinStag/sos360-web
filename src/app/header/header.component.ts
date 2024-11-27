import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NotificationDTO } from '../models/notificationDTO.model';
import { Router } from '@angular/router';

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
  notifications: NotificationDTO[] = [];
  dropdownMenu: boolean = false;
  dropdownMenuNotification: boolean = false;

  constructor(
    //private PushNotificationService: PushNotificationService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.startListeners();
    this.listenNotifications();

    // put some notifications in the array
    this.notifications.push(
      {
        id: 1,
        message: 'New emergency request Police',
        toUserId: 1,
        read: false,
        createdAt: '2021-07-01T00:00:00',
      },
      {
        id: 2,
        message: 'New emergency request Firefighters',
        toUserId: 1,
        read: false,
        createdAt: '2021-07-01T00:00:00',
      },
      {
        id: 3,
        message: 'New emergency request Ambulance',
        toUserId: 1,
        read: false,
        createdAt: '2021-07-01T00:00:00',
      }
    );
  }

  toggleSideNav() {
    this.ToggleSideNav.emit();
  }

  //Notification methods:

  listenNotifications() {
    // this.sseService.subscribe(this.WS_URL).subscribe({
    //   next: (event) => {
    //     this.amount = event.data;
    //   },
    // });
    // this.PushNotificationService.getAllUnreadByUserId(this.id).subscribe((node) => {
    //   this.amount = node.length;
    // });
  }

  startListeners() {
    // if (this.storedUser) {
    //   this.id = this.storedUser.id;
    //   this.sseService.startNotifications(this.id).subscribe((node) => {});
    // }
    //  else {
    //   let route = this.tenantService.getTenant() + '/login';
    //   this.router.navigate([route]);
    // }
  }

  //Clique no sininho
  getAllNotifications() {
    // this.id = this.storedUser.id;
    // this.PushNotificationService.getAllUnreadByUserId(this.id).subscribe(
    //   (node) => {
    //     this.notifications = node;
    //   }
    // );
  }

  //lixeira geral
  readAllNotifications() {
    // this.id = this.storedUser.id;
    // this.PushNotificationService.readAll(this.notifications).subscribe(
    //   (node) => {
    //     this.amount = 0;
    //   }
    // );
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
    this.getAllNotifications();
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
