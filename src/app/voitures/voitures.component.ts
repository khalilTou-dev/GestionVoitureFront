import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../service/voiture.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
})
export class VoituresComponent implements OnInit {

  voitures : Voiture[]; //un tableau de chînes de caractères
  constructor(private voitureService: VoitureService,
              private router: Router) {
    //this.voitures = voitureService.listeVoitures();
    
   }

  ngOnInit(): void {
    this.voitureService.listeVoitures().subscribe(voits => {
        console.log(voits);
        this.voitures = voits; 
      });
  }
  /*supprimerVoiture(p: Voiture) { 
    //console.log(p);
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.voitureService.supprimerVoiture(p); 
  }*/
  supprimerVoiture(v: Voiture) { 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.voitureService.supprimerVoiture(v.matriculeVoit).subscribe(() => { 
        console.log("Voiture supprimé"); 
      }); 
      this.router.navigate(['voitures']).then(() => { 
        window.location.reload(); 
      }); 
    }

}
