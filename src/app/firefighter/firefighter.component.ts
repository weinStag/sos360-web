import { Component, OnInit, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ProtocolService } from '../services/protocol.service';
import { Emergency } from '../models/emergency.model';

@Component({
  selector: 'app-firefighter',
  templateUrl: './firefighter.component.html',
  styleUrls: ['./firefighter.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class FirefighterComponent implements OnInit {
  dataSource: MatTableDataSource<Emergency>;
  columnsToDisplay = ['id', 'requester', 'attendant', 'status', 'createdAt', 'updatedAt', 'action'];
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
    //   const firefighterData = data.filter((e: Emergency) => e.type === 'firefighter');
    //   this.dataSource = new MatTableDataSource(firefighterData);
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });

    // Fill table with test data
    this.dataSource = new MatTableDataSource(emergency);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  attend(requestId: string) {
    // Update the request status locally; in production, call back-end API.
    const data = this.dataSource.data;
    const idx = data.findIndex(x => x.id === requestId);
    if (idx > -1) {
      data[idx].status = 'Em atendimento';
      this.dataSource.data = [...data];
      // Send the updated status to the back-end (assumed protocolService.attendRequest exists)
      this.protocolService.attendRequest(requestId).subscribe(() => {
        // Handle success if needed
      });
    }
  }
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
    type: 'firefighter',
    description: 'Assalto em andamento',
    status: 'Pendente',
    createdAt: new Date(),
    updatedAt: new Date(),
    requesterId: '2',
  },
];
