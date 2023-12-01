import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {
  @Input() data: string='';
  @Output() Outputdata: EventEmitter<any>=new EventEmitter();

  onSubbmitClick(){
    this.Outputdata.emit('x');
  }
}
