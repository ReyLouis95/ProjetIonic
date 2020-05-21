import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      nom: [''],                   // Crée une instance de FormControl
      prenom: [''],
      ville: [''],
      email: [''],
      telephone: [''],
      contrat: [''],
      emploi: [''],
      localisation: [''], 
      rayon:[''],
      disponibilite: [''],
    });
  }

  login() {
    console.log('Données du formulaire...', this.loginForm.value);
  }
}