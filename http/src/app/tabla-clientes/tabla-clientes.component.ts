import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from '../clientes.service';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla-clientes',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './tabla-clientes.component.html',
  styleUrl: './tabla-clientes.component.css'
})
export class TablaClientesComponent implements OnInit {

  clientes: Array<any> = [];
  formSearch: FormGroup = new FormGroup({});
  loading: boolean = false;

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
    this.cargarClientes();
    this.formSearch = new FormGroup({
      search: new FormControl('')
    })
    this.searchClientes();
  }

  searchClientes() {
    this.formSearch.get('search')?.valueChanges
                                  .pipe(
                                    debounceTime(300),
                                    distinctUntilChanged()
                                  )
                                 .subscribe(term => {
                                   if(term.length === 0) {
                                     this.clientes = [];
                                   } else {
                                     this.loading = true;
                                     this.clientesService.searchClientes(term)
                                                         .subscribe({
                                                           next: (resp: any) => {
                                                             this.loading = false;
                                                             this.clientes = resp.clientes;
                                                            },
                                                           error: (error: any) => {console.log(error)}
                                                         })
                                   }
                                 })
  }

  cargarClientes(): void{
    this.clientesService.getClientes()
                        // .subscribe((resp: any) => { // Versión habitual que será próximamente "deprecada"
                        //   this.clientes = resp.clientes;
                        // }, (error: any) => {
                        //   console.log(error)
                        // })
                        .subscribe({ // Nueva implementación de subscribe() en HttpClient
                          next: (resp: any) => {this.clientes = resp.clientes},
                          error: (error: any) => {console.log(error)}
                        })
  }

  eliminarCliente(_id: string): void { // Ojo que no tiene modal de confirmación porque no tenemos tiempo :)
    this.clientesService.deleteCliente(_id)
                        .subscribe({ 
                          next: (resp: any) => {
                            this.clientes = [];
                            this.formSearch.get('search')?.patchValue('');
                          },
                          error: (error: any) => {console.log(error)}
                        })
  }

}