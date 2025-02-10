import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProtocolService } from '../services/protocol.service';

@Component({
  selector: 'app-view-notifications',
  templateUrl: './view-notifications.component.html',
  styleUrls: ['./view-notifications.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ViewNotificationsComponent {
  dataSource: MatTableDataSource<Emergency>;
  columnsToDisplay = ['id', 'requester', 'attendant', 'type', 'status', 'createdAt', 'updatedAt'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement!: Emergency | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor(private protocolService: ProtocolService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.initTableContent();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  initTableContent() {
    // Commented out the API request for testing
    // this.protocolService.getEmergencies().subscribe((data: Emergency[]) => {
    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

    // Fill table with test data
    this.dataSource = new MatTableDataSource(emergency);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}

export interface Emergency {
  id: string;
  requester: {
    name: string;
    cpf: string;
    phone: string;
    address: string;
  };
  attendant?: {
    name: string;
    cpf: string;
    phone: string;
  };
  type: string;
  description: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  requesterId: string;
  attendantId?: string;
}

// Implement a emergency object array to test the table
const emergency: Emergency[] = [
  {
    id: '1',
    requester: {
      name: 'John Doe',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
      address: 'Rua dos Bobos, 0',
    },
    attendant: {
      name: 'Jane Smith',
      cpf: '987.654.321-00',
      phone: '(11) 99999-9999',
    },
    type: 'Ambulância',
    description: 'Fogo na cozinha',
    status: 'Pendente',
    createdAt: new Date(),
    updatedAt: new Date(),
    requesterId: '1',
  },
  {
    id: '2',
    requester: {
      name: 'Jane Doe',
      cpf: '987.654.321-00',
      phone: '(11) 99999-9999',
      address: 'Rua dos Bobos, 0',
    },
    attendant: {
      name: 'John Smith',
      cpf: '123.456.789-00',
      phone: '(11) 99999-9999',
    },
    type: 'Police',
    description: 'Assalto em andamento',
    status: 'Pendente',
    createdAt: new Date(),
    updatedAt: new Date(),
    requesterId: '2',
  },
];
