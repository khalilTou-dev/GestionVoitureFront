import { Injectable } from '@angular/core'; 
import { Voiture } from '../model/voiture.model'; 
import { Observable } from 'rxjs'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = { 
  headers: 
    new HttpHeaders( {'Content-Type': 'application/json'} ) 
  };

@Injectable({ providedIn: 'root' }) 
export class VoitureService { 
  voitures : Voiture[];
  voiture : Voiture; 
  apiURL: string = 'http://localhost:8081/voitures/api';
  //un tableau de Voiture
  constructor(private http : HttpClient) { 
    /*this.voitures = [ { matriculeVoit : "230 Tunis 1522", marqueVoit : "BMW", prixVoit : 120000, dateRelease : new Date("01/14/2011")}, 
    { matriculeVoit : "150 Tunis 1522", marqueVoit : "Ford", prixVoit : 50000, dateRelease : new Date("12/17/2010")}, 
    { matriculeVoit : "200 Tunis 1522", marqueVoit :"Ferrari",  prixVoit : 200000, dateRelease : new Date("02/20/2020")}];*/
  } 
  /*listeVoitures():Voiture[] {
    return this.voitures; 
  }*/
  listeVoitures(): Observable<Voiture[]>{ 
    return this.http.get<Voiture[]>(this.apiURL); 
  } 
  /*ajouterVoiture( prod: Voiture){ 
    this.voitures.push(prod); 
  }*/
  ajouterVoiture( voits: Voiture):Observable<Voiture>{ 
    return this.http.post<Voiture>(this.apiURL, voits, httpOptions); 
  } 
  /*supprimerVoiture( voit: Voiture){ 
    //supprimer la voiture voit du tableau voitures 
    const index = this.voitures.indexOf(voit, 0);
    if (index > -1) { 
      this.voitures.splice(index, 1); 
    } 
  }*/
  supprimerVoiture(id : String) { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.delete(url, httpOptions); 
  }
  /*consulterVoiture(mat:string): Voiture{ 
    this.voiture = this.voitures.find(v => v.matriculeVoit == mat); 
    return this.voiture; 
  }*/
  consulterVoiture(id: String): Observable<Voiture> { 
    const url = `${this.apiURL}/${id}`; 
    return this.http.get<Voiture>(url); 
  }

  //trie par prix
  trierVoitures(){ 
    this.voitures = this.voitures.sort((n1,n2) => { 
      if (n1.prixVoit > n2.prixVoit) { 
        return 1; 
      } 
      if (n1.prixVoit < n2.prixVoit) { 
        return -1; 
      } 
      return 0; 
    }); }

  /*updateVoiture(v:Voiture) { 
    // console.log(v); 
    //this.supprimerVoiture(v); 
    this.ajouterVoiture(v); 
    this.trierVoitures();
  }*/
  updateVoiture(voit :Voiture) : Observable<Voiture> { 
    return this.http.put<Voiture>(this.apiURL, voit, httpOptions); 
  }
}
