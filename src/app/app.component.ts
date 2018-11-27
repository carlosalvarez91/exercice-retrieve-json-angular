import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Image } from './image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  
  images: Image[];
  p:number = 1;

  asc: Boolean = false;

  constructor(

    private appService:AppService

    ){}

    ngOnInit(){
      this.getImages()
    }


    getImages(){
      this.appService.getImages()
      .subscribe(images => {

        console.log(images)

        this.images = images
      });
    }
    compareTitleAsc(a,b){
      if (a.title < b.title)
        return -1 ;
      if (a.title > b.title)
        return 1;
      return 0;
      }

    compareTitleDesc(a,b){
        if (a.title < b.title)
          return 1 ;
        if (a.title > b.title)
          return -1;
        return 0;
        }

    sortByTitle(){
        this.asc ? (this.images.sort(this.compareTitleAsc),  this.asc = false) : (this.images.sort(this.compareTitleDesc),this.asc = true);
    }
  
}
