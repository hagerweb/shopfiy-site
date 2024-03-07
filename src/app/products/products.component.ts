import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsInterface } from '../products-interface';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  isNewOrUsed:boolean =true;
  inputValue:string="";
  constructor(private _ProductsService:ProductsService){}
  newproducts:ProductsInterface[]=[];

  
  
  ngOnInit():void{
    localStorage.setItem("currentPage","/products")
    this._ProductsService.getProductsApi().subscribe({
      next:(res)=>{
        this.newproducts = res.data;
        console.log(this.newproducts)
        this.isNewOrUsed = false;

      },
      error:(err)=>{
        console.log(err)

      }
    });


  }

}
