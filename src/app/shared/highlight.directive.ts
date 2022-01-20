import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective implements OnInit{
  @Input('appHighlight') hoverColor: any = 'Cyan';
  @Input() defaultColor: string = 'LightCyan';
  @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultColor;
  @HostListener('mouseenter') evidenzia(){
    this.backgroundColor = this.hoverColor ? this.hoverColor : "cyan";
  }
  @HostListener('mouseleave') rilascia(){
    this.backgroundColor = this.defaultColor;
  }
  
  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }
}
