import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-update-voiture',
  templateUrl: './update-voiture.component.html',
  styles: [
  ]
})
export class UpdateVoitureComponent implements OnInit {

  currentVoiture = new Voiture();

  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private voitureService: VoitureService) { }

  ngOnInit(): void {
    //console.log(this.activatedRoute.snapshot.params.matriculeVoit);
    /*this.currentVoiture = this.voitureService.consulterVoiture(this.activatedRoute.snapshot.params.matriculeVoit); 
    console.log(this.currentVoiture);*/
    this.voitureService.consulterVoiture(
      this.activatedRoute.snapshot.params.matriculeVoit). subscribe( voit =>{ 
        this.currentVoiture = voit; 
      }) ;
  }
  
  /*updateVoiture() { 
    //console.log(this.currentVoiture); 
    this.voitureService.updateVoiture(this.currentVoiture); 
    this.router.navigate(['voitures']); 
  }*/
  updateVoiture() { 
    this.voitureService.updateVoiture(this.currentVoiture).subscribe(voits => { 
      this.router.navigate(['voitures']); 
    },(error) => { 
      alert("Problème lors de la modification !"); 
    } ); 
  }
  

}
