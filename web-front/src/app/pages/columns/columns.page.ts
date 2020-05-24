import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.page.html',
  styleUrls: ['./columns.page.scss']
})
export class ColumnsPage implements OnInit {
  table: string;
  tableData: Array<any> = [];

  

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {

    this.table = this.route.snapshot.paramMap.get('table');
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

  deleteRow(id: number) {
    console.log("zizi");
    this.http.delete('http://localhost:3000/' + this.table + '/' + id).subscribe(
			(data: any) => {
        window.location.reload();
      },
			(error) => {
				console.log(error);
			}
    );
  }

  goToAdd() {
    this.router.createUrlTree(['./add'], {relativeTo: this.route});
    this.router.navigate(['./add'], {
      queryParams: {
        'data': JSON.stringify(this.tableData[0])
      },
      relativeTo: this.route
    }
    );
  }

  updateRow(id) {
    this.router.createUrlTree(['./update/' + id], {relativeTo: this.route});
    this.router.navigate(['./update/' + id], {
      queryParams: {
        'data': JSON.stringify(this.tableData[0])
      },
      relativeTo: this.route
    }
    );
  }

}
