import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  
  year: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.year = 1973;
    }, 3000)
  }

}
