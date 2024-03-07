import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { detailsProductInterface } from '../details-products';
import { OwlOptions } from 'ngx-owl-carousel-o';



@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  detailsProducts:any = {};
  productId:string="";
  constructor(private _ActivatedRoute:ActivatedRoute , private _ProductsService:ProductsService){}
  ngOnInit():void{
    

    this._ActivatedRoute.params.subscribe((p)=>{
      this.productId =p['productId'];
      console.log( this.productId)

    });

    this._ProductsService.getProductDetailsApi(this.productId).subscribe({
      next:(res)=>{
        
        this.detailsProducts = res.data;
        console.log(this.detailsProducts)
      },
      error:(err)=>{
        console.log(err)
      }
    })

  }



  detailsProductOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    autoplayTimeout:2000,
    autoplaySpeed:1000,
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
