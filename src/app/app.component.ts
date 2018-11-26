import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Image } from './image.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {

  
  images: Image[];


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


}
