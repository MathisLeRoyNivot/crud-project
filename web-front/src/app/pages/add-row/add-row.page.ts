import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.page.html',
  styleUrls: ['./add-row.page.scss']
})
export class AddRowPage implements OnInit {
  table;
  tableData: any;
  formGroup: any;
  formFields: any = {};
  formFieldsArray: Array<any> = [];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(data => {
        this.tableData = JSON.parse(data.data);
        delete this.tableData.id;
    });

    Object.keys(this.tableData).forEach(
      field => {
        this.formFields[field] = '';
        this.formFieldsArray.push(field);
      }
    );

    this.formGroup = this.formBuilder.group(this.formFields);

  }

  ngOnInit() {
    this.table = this.route.snapshot.paramMap.get('table');
  }

  onSubmit(formData) {
    console.log(formData);
    formData.isAvailable = true;

    this.http.post('http://localhost:3000/' + this.table, formData).subscribe(
			(response) => {
        console.log("OK");
        this.router.navigate(['../'], {relativeTo: this.route}).then(() => {
          window.location.reload();
        });
      },
			(error) => {
				console.log(error);
			}
    );
  }

}
