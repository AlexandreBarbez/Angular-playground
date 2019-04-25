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
    listFilter: string = 'cart';
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

    toggleImage(): void {
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log("INIT");
    }
}
