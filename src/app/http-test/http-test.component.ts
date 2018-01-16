import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http";
import {getResponseURL} from "@angular/http/src/http_utils";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.scss']
})
export class HttpTestComponent implements OnInit {

  someData: string;
  imageFolder: string = 'http://media.mw.metropolia.fi/wbma/uploads/';
  imgUrl: string;



  constructor(private http:HttpClient) {
  }

  ngOnInit() {
    this.getJSON();
    this.getMedia();
  }

  getJSON(){

    this.http.get('assets/package.json').subscribe((data) => {
      console.log(data["license"]);
      this.someData = data["license"];
    });
  }
  getMedia(){

    this.http.get('http://media.mw.metropolia.fi/wbma/media').subscribe((data) => {
      console.log(data[0]);
      this.imgUrl = this.imageFolder + data[0].filename;
    });
  }
}
