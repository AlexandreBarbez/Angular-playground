import {Component, OnInit} from '@angular/core';
import {Product} from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
    pageTitle = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;


    _listFilter: string;
    //Automatiquement appellé par le binding angular
    get listFilter(): string{
        return this._listFilter;
    }
    //Automatiquement appellé par le binding angular
    set listFilter(filter: string){
        this._listFilter = filter;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: Product[];
    products: Product[] = [ {
                          'productId': 1,
                          'productName': 'Leaf Rake',
                          'productCode': 'GDN-0011',
                          'releaseDate': 'March 19, 2016',
                          'description': 'Leaf rake with 48-inch wooden handle.',
                          'price': 19.95,
                          'starRating': 3.2,
                          'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous'
                        },
                          {
                            'productId': 2,
                            'productName': 'Garden Cart',
                            'productCode': 'GDN-0023',
                            'releaseDate': 'March 18, 2016',
                            'description': '15 gallon capacity rolling garden cart',
                            'price': 32.99,
                            'starRating': 4.2,
                            'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_ca'
                          }
                    ];

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = "cart";
    }

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("INIT");
    }

    private performFilter(filterBy: string) {
        filterBy =  filterBy.toLocaleLowerCase();
        return this.products.filter((product: Product) =>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}

