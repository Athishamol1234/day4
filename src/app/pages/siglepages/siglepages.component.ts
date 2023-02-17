import { Component } from '@angular/core';

import { data } from 'src/assets/data';


@Component({
  selector: 'app-siglepages',
  templateUrl: './siglepages.component.html',
  styleUrls: ['./siglepages.component.css']
})
export class SiglepagesComponent {
 
 single:any
 ngOnInit(){
  let id=Number(localStorage.getItem('id'))
  this.single = data.filter(e => e.id === id)
  console.log("name",this.single)
 }
}