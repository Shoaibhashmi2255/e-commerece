import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/sharedpotal/services/dataservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  MydataArray:any = [];
  constructor(
    private _Dataservice:DataserviceService
  ) { }

  ngOnInit(): void {
    this.getdatafrommycomponent();
  }
  getdatafrommycomponent () {
    this.MydataArray = this._Dataservice.GetData();
    console.log(this.MydataArray);
    
  }

}
