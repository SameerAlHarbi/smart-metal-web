import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { MetalResultModel } from './metal-result.model';

@Component({
  selector: 'app-metal-inspect',
  templateUrl: './metal-inspect.component.html',
  styleUrls: ['./metal-inspect.component.css']
})
export class MetalInspectComponent implements OnInit {

  SERVER_URL = 'http://localhost:3000/inspect';
  inspectForm: FormGroup;
  error: string = null;

  metalInspectResult: MetalResultModel[] = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.inspectForm = this.formBuilder.group({
      inspect: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.inspectForm.get('inspect').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('inspect', this.inspectForm.get('inspect').value);

    console.log(formData);

    this.error = null;
    this.http.post<[MetalResultModel]>(this.SERVER_URL, formData).subscribe(
      (res) => this.metalInspectResult = res,
      (errRes) => {
          this.error = errRes.error.error;
        }
    );
  }

}
