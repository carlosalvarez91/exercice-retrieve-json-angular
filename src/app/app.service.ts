import { Injectable } from '@angular/core';
import { Image } from './image.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class AppService {

  images: Image[] = [];

  private url:string = 'http://jsonplaceholder.typicode.com/photos';
  
  constructor(private http: HttpClient) { }

  getImages(): Observable<Image[]> {

    return this.http.get<Image[]>(this.url)

  }
}