import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public dataList;

  constructor(private dataservice : DataService) { }

  ngOnInit(): void {
  }

  getdata(){
    this.dataservice.getdata().subscribe(res =>{
      console.log(res);
      this.dataList = res;
    })
  }

  getdataPromise(){
    this.dataservice.getdataPromise().then(data=>{
        console.log(data)
    })
  }

  }

