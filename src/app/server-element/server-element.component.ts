import { Component, ContentChild, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: [ './server-element.component.css' ]
})
export class ServerElementComponent implements OnInit {
  @Input() element!: { type: string, name: string, content: string };
  @ContentChild('paragraphContent') paragraphContent !: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
