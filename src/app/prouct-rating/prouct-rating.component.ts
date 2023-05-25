import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-prouct-rating',
  templateUrl: './prouct-rating.component.html',
  styleUrls: ['./prouct-rating.component.css'],
})
export class ProuctRatingComponent {
  @Input() rating!: number;
  cropWidth: number = 100;
  @Output() tellParent: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 100) / 5;
  }
  
  tellParaentData() {
    
    this.tellParent.emit(`Your Rate =  ${this.rating}`);
  }
}
