// import { EventEmitter } from '@angular/core';
import { Item } from './../../models/item';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  //importamos el modelo creado Item y mediante un @Input() llamado item le decimos que será igual a una nueva instacia del
  //modelo

  @Input() item: Item = new Item();

  /* EventEmitter @Input y @Output y Oninit serán importados desde angular/core */
  /* Este output que hemos creado lo tiene que recoger el pader items en items.html */
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter;


  constructor() { }

  ngOnInit(): void {
  }

  onDelete(item: Item){
    this.deleteItem.emit(item)
  }

  onToggle(item: Item){
    item.completed !== item.completed
  }

}
