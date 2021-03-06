import {Injectable} from "@angular/core";
import {Product} from "./product";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";


@Injectable()
export class ProductService {

    private productUrl = 'api/products/products.json';

    constructor(private http : HttpClient){
    }

    getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.productUrl).pipe(
            tap(data => console.log("All : "+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getProduct(id: number): Observable<Product | undefined> {
        return this.getProducts().pipe(
            map((products: Product[]) => products.find(p => p.productId === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage =`an error occured: ${err.error.message}`;
        }else{
            errorMessage = `erver returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}