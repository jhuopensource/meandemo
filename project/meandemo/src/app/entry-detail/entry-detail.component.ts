import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class entryDetailComponent implements OnInit {

  entry = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getentryDetails(this.route.snapshot.params['id']);
  }

  getentryDetails(id) {
    this.api.getentry(id)
      .subscribe(data => {
        console.log(data);
        this.entry = data;
      });
  }

  deleteentry(id) {
    this.api.deleteentry(id)
      .subscribe(res => {
          this.router.navigate(['/entries']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
