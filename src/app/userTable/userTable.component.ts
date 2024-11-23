import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  email: string;
  service: string;
}

/** Constants used to fill up our data base. */
const SERVICE: string[] = [
  'Polícia',
  'Bombeiros',
  'SAMU',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-userTable',
  templateUrl: './userTable.component.html',
  styleUrls: ['./userTable.component.scss']
})
export class UserTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'service', 'delete'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort: MatSort = new MatSort;

  constructor() {
    // Create 20 users
    const users = Array.from({length: 20}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteUser(id: string) {
    this.dataSource.data = this.dataSource.data.filter(user => user.id !== id);
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id.toString(),
    name: name,
    email: (name + "@sos360.com").toLowerCase(),
    service: SERVICE[Math.round(Math.random() * (SERVICE.length - 1))],
  };
}
