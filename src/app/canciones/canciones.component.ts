import { Component, OnInit } from '@angular/core';
import {CancionesService} from '../providers/canciones.service'
import { Cancion } from '../model/cancion';
import { empty } from 'rxjs/Observer';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {
  //canciones
  canciones:Cancion[]; 
  cancionseleccionada: Cancion;
  nombreCancion: String;

  constructor(private cancionesService:CancionesService) {
    console.log("Este es el constructor");

    //inicializar los atributos
    this.canciones = [];
    this.cancionseleccionada= new Cancion(-1,"");
    this.nombreCancion="";
   // this.mockData();
  
   }

  ngOnInit() {
    this.cargarCanciones();
    console.log("Este es el NgOnit");
    //LLamadas a los servicios
  }
  eliminar( id: number ){
    console.log(`CancionesComponent eliminar ${id}`);
    if (confirm("¿Quieres elimina la cancion?")){

    
    console.log("Eliminar");
    this.cancionesService.delete(id).subscribe(
      result=>{
        this.cargarCanciones();
        console.log("Cancion Eliminada!!!");
      },error=>{
        console.warn(`Error al eliminar ${error}`);
      }
      
    );
    }
   
  }

  mockData(){
   /* this.canciones.push(new Cancion(1, "Tus ojos azules"));
    this.canciones.push(new Cancion(2, "Viva el sol"));
    this.canciones.push(new Cancion(3, "Tus ojos brillosos"));
    this.canciones.push(new Cancion(4, "Viva el amanecer"));
    this.canciones.push(new Cancion(5, "Tu pelo casposo"));
    this.canciones.push(new Cancion(6, "Reinado contigo"));*/
  }
  cargarCanciones(){
    console.log('TodosComponent cargarTareas');
    this.canciones = [];
    this.cancionesService.getTodos().subscribe(
      result => {   console.log('response correcto %o', result);
      //let cancion: Cancion;
      if(result!=null)
      result.forEach( element => {
          
          this.canciones.push( element );
      });
      
    },
    error=>{
      console.warn(error);
    }
  );//subscribe

}
crearCancion(){
  if(this.nombreCancion.length==0){
    alert("No puede ser vacio")
  }
  else{
    this.cancionesService.guardar(this.cancionseleccionada).subscribe(
      result => {   console.log('response correcto %o', result);
  }      ,error=>{
    console.warn(`Error al eliminar ${error}`);});
  console.log(`CancionesComponent crearCancion ${this.nombreCancion}`);
    
}
}
}
