import { data } from "src/assets/data";
import{ Component }from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: 'app-artformpages',
  templateUrl: './artformspages.component.html',
   styleUrls: ['./artformspages.component.css']
})
export class ArtformspagesComponent{
  constructor(private router:Router){}
  
  artforms=data;
  gotohere (id: any){
    localStorage.setItem('id',id);
    this.router.navigate(['/siglepages']);
  }
 
  }