import {Component, OnInit} from '@angular/core';
import {Product} from './product';
import {ProductService} from "./product.service";

@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    pageTitle = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    filteredProducts: Product[];
    products: Product[] = [];
    _listFilter: string;
    private errorMessage: any;

    constructor(private productService : ProductService) {
    }

    get listFilter(): string{
        //Automatiquement appellé par le binding angular
        return this._listFilter;
    }
    set listFilter(filter: string){
        //Automatiquement appellé par le binding angular
        this._listFilter = filter;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {

        this.productService.getProducts().subscribe(
            products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = error
        );
    }

    private performFilter(filterBy: string) {
        filterBy =  filterBy.toLocaleLowerCase();
        return this.products.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked($event: string): void {
        console.log($event);
    }
}

