import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {


  constructor(private http:HttpService) {  }
  ngOnInit(){
 let resp = this.http.getBeer().subscribe(data =>
  {
    console.log(data);

  });
  }

}
