import { Component, OnInit } from '@angular/core';
import {Product} from "./product";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "./product.service";

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: Product;
    private errorMessage: any;
    showImage: boolean = true;
    imageWidth: number = 50;
    imageMargin: number = 2;

  constructor(private route: ActivatedRoute,
              private productService : ProductService,
              private router: Router) { }

  ngOnInit() {
      let id = +this.route.snapshot.paramMap.get("id");
      console.log(id);
      this.productService.getProduct(id).subscribe(
          product => {
              this.product = product;
          },
          error => this.errorMessage = error
      );
  }

  onBack():void {
      this.router.navigate(['/products']);
  }

}
