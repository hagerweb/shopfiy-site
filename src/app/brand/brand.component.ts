import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category, ProductsInterface } from '../products-interface';


@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit  {
  inputValue:string="";
  constructor(private _ProductsService:ProductsService){}
  products:ProductsInterface[]=[];
  catogries:Category[]=[];

  ngOnInit():void{

    localStorage.setItem("currentPage","/brand");
    
    this._ProductsService.getProductsApi().subscribe({
      next:(res)=>{
       
        this.products = res.data;

      },
      error:(err)=>{
        console.log(err)

      }
    });

  }

}
