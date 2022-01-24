import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {
  @Output() searchEmit?: EventEmitter<string> = new EventEmitter();
  @ViewChild('city') input:ElementRef; 
  name:string = ''

  constructor() {

  }

  search() {
    this.name =this.input.nativeElement.value;
     this.searchEmit.emit(this.input.nativeElement.value)
  }
}
