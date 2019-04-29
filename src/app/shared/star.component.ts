import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";
import index from "@angular/cli/lib/cli";

@Component({
    selector:"pm-star",
    templateUrl:"./star.component.html",
    styleUrls:["./star.component.css"]
})
export class StarComponent implements OnChanges{
    @Input() rating: number;
    starWidth: number;
    @Output() notify : EventEmitter<string> = new EventEmitter<string>();

    onClick() {
        this.notify.emit("Clicked !");
    }

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }
}