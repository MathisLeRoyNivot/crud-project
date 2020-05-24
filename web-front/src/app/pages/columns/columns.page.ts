import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.page.html',
  styleUrls: ['./columns.page.scss']
})
export class ColumnsPage implements OnInit {
  table: string;
  tableData: Array<any> = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {

    this.table = this.route.snapshot.paramMap.get('table');
    console.log(this.table);

    this.http.get('http://localhost:3000/' + this.table).subscribe(
			(data: Array<JSON>) => {
				data.forEach(row => {
					this.tableData.push(row);
        });
			},
			(error) => {
				console.log(error);
			}
    );
  }

}
