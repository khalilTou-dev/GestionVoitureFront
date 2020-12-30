import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-add-voiture',
  templateUrl: './add-voiture.component.html',
  styleUrls: ['./add-voiture.component.css']
})
export class AddVoitureComponent implements OnInit {

  newVoiture = new Voiture();
  constructor(private voitureService: VoitureService,
              private router: Router) { }

  ngOnInit(): void {
  }
  /*addVoiture(){
    //console.log(this.newVoiture);
    this.voitureService.ajouterVoiture(this.newVoiture);
  }*/
  addVoiture(){ 
    this.voitureService.ajouterVoiture(this.newVoiture) .subscribe(voits => { 
      console.log(voits); 
    }); 
    this.router.navigate(['voitures']).then(() => { window.location.reload(); });; 
  }

}
