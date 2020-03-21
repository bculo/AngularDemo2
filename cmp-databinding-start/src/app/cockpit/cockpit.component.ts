import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //FOR TWO WAY BINDING
  //newServerName = '';
  //newServerContent = '';

  //static: true if we plan to use this element in ngOnInit
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
    let content = this.serverContentInput.nativeElement.value;   
    this.serverCreated.emit({serverName: nameInput.value, serverContent: content});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    let content = this.serverContentInput.nativeElement.value;   
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: content});
  }
}
