import { Component, OnInit, Input , Output , EventEmitter , ViewEncapsulation} from '@angular/core';
// import { EventEmitter } from 'events';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent {

  @Input('isFavorite') isSelected: boolean;
  @Output('change') change = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClicked(){
    this.isSelected = !this.isSelected;
    this.change.emit({newValue: this.isSelected});
    console.log(this.isSelected)
  }

}

export interface FavoriteChangedEventArgs{
  newValue: boolean
}