import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.css']
})
export class entryCreateComponent implements OnInit {

  entryForm: FormGroup;
  URL = '';
  title = '';
  description = '';
  author = '';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.entryForm = this.formBuilder.group({
      'URL' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.postentry(form)
      .subscribe(res => {
          const id = res['_id'];
          this.router.navigate(['/entry-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
