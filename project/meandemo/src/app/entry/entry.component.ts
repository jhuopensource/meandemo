import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class entryComponent implements OnInit {

  entries: any;
  displayedColumns = ['URL', 'title', 'author'];
  dataSource = new entryDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getentries()
      .subscribe(res => {
        console.log(res);
        this.entries = res;
      }, err => {
        console.log(err);
      });
  }
}

export class entryDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getentries();
  }

  disconnect() {

  }
}
