import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Category, ProductsInterface } from '../products-interface';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
 
  inputValue:string="";
  constructor(private _ProductsService:ProductsService){}
  products:ProductsInterface[]=[];
  catogries:Category[]=[];

  ngOnInit():void{
    localStorage.setItem("currentPage","/home")
    
    this._ProductsService.getProductsApi().subscribe({
      next:(res)=>{
       
        this.products = res.data;

      },
      error:(err)=>{
        console.log(err)

      }
    });



    this._ProductsService.getCatogriesApi().subscribe({
      next:(res)=>{
         this.catogries = res.data;
        // console.log(res.data)

      },
      error:(err)=>{
        console.log(err)

      }
    });

  }


  catogriesOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
