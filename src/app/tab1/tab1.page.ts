import { Component } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  offres: any;

  constructor(public api : ApiService) {
    api.getAllOffres().subscribe(data => {
      this.offres = data['products'];
      console.log(this.offres)
    });
    
  }

  onSearchChange(event){
    let items = Array.from(document.querySelector('ion-list').children) as HTMLElement[];
    console.log(event.target.value)
    requestAnimationFrame(() => {
      items.forEach(item => {
        const shouldShow = item.textContent.toLowerCase().includes(event.target.value.toLowerCase());
        item.style.display = shouldShow ? 'block' : 'none';
      });
    });
  }

}
