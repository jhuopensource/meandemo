import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class entryEditComponent implements OnInit {

  entryForm: FormGroup;
  id:string = '';
  URL:string = '';
  title:string = '';
  description:string = '';
  author:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getentry(this.route.snapshot.params['id']);
    this.entryForm = this.formBuilder.group({
      'URL' : [null, Validators.required],
      'title' : [null, Validators.required],
      'description' : [null, Validators.required],
      'author' : [null, Validators.required],
    });
  }

  getentry(id) {
    this.api.getentry(id).subscribe(data => {
      this.id = data._id;
      this.entryForm.setValue({
        URL: data.URL,
        title: data.title,
        description: data.description,
        author: data.author,
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateentry(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/entry-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  entryDetails() {
    this.router.navigate(['/entry-details', this.id]);
  }
}
