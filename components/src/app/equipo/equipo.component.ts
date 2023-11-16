import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})

export class EquipoComponent implements OnInit {

  @Input() equipo: any;
  @Output() canasta: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  setCanasta(nombreJugador: string, puntos: number): void {
    this.canasta.emit({
      nombreJugador, // simplificado de nombreJugador: nombreJugador de acuerdo a ECMA6
      puntos
    })
  }

}