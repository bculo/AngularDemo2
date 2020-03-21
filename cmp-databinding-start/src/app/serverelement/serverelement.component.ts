import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

//Emulated -> default,


export class ServerelementComponent implements OnInit, AfterContentInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('contentParagraph') content: ElementRef;


  constructor() { }

  ngAfterContentInit(): void {
    console.log(this.content.nativeElement.textContent);
    
  }

  ngOnInit(): void {
  }



}
