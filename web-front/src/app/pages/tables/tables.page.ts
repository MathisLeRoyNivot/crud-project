import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.page.html',
  styleUrls: ['./tables.page.scss']
})
export class TablesPage implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit() {

    
  }

}
