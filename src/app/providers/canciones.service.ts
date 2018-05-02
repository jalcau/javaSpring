import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';import { Injectable } from '@angular/core';
import { Cancion } from '../model/cancion';


const END_POINT = "http://localhost:8080/cancion/"; 
@Injectable()
export class CancionesService {

  constructor(public http: HttpClient) {
    console.log('CancionesService constructor');
   }

   getTodos():Observable<any>{
    let url = END_POINT;
    console.log(`TodosService getTodos $(url)`);

    return this.http.get(url);

}
delete(id:number):Observable<any>{
  let url = END_POINT + id;
  console.log(`CancionesService delete ${url}`);

  return this.http.delete(url);
}

guardar(cancion:Cancion):Observable<any>{
return this.http.post(END_POINT, Cancion); 
}
}
