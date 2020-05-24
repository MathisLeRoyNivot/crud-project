import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-row',
  templateUrl: './update-row.page.html',
  styleUrls: ['./update-row.page.scss']
})
export class UpdateRowPage implements OnInit {
  table;
  rowId;
  tableData: any;
  rowData: any;
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
    this.rowId = this.route.snapshot.paramMap.get('id');


    // Get Row Data
    this.http.get('http://localhost:3000/' + this.table + '/' + this.rowId).subscribe(
			(data: JSON) => {
          this.rowData = data;
          delete(this.rowData.id);
			},
			(error) => {
				console.log(error);
			}
    );
  }

  onSubmit(formData) {
    formData.isAvailable = true;

    this.http.put('http://localhost:3000/' + this.table + '/' + this.rowId, formData).subscribe(
			(response) => {
        console.log("OK");
        this.router.navigate(['../..'], {relativeTo: this.route}).then(() => {
          window.location.reload();
        });
      },
			(error) => {
				console.log(error);
			}
    );
  }
}
