import { Component, ElementRef, EventEmitter, Input, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sizer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.css'
})
export class SizerComponent {
  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  @ViewChild('lista') listaRef: ElementRef | any; // Sustituye a document.getElementByid('lista')
  @ViewChildren('item') itemsRef: QueryList<any> | any;


  constructor(private renderer: Renderer2) { }

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }
  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  actor: any = {
    nombre: '',
    apellidos: ''
  }

  ngAfterViewInit(): void {
    this.renderer.setStyle(this.listaRef.nativeElement, 'padding-left', '200px'); // style...
  }

  setDone(i: number): void {
    this.itemsRef.forEach((elem: any, index: number) => {
      if(index === i) {
        if(elem.nativeElement.style.textDecoration === '') {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', 'line-through');
        } else {
          this.renderer.setStyle(elem.nativeElement, 'text-decoration', '');
        }
      }
    })
  }

}
