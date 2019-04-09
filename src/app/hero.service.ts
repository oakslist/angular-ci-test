import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Product } from './product';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
//  private productsUrl = 'http://cms-dev01:8043/api/products';  // URL to web api
  private productsUrl = 'http://localhost:8043/api/products';  // URL to web api

//  getHeroes(): Observable<Hero[]> {
//    return of(HEROES);
//  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  //getHeroes(): Observable<Hero[]> {
  //    // TODO: send the message _after_ fetching the heroes
  //    this.messageService.add('HeroService: fetched heroes');
  //    return of(HEROES);
  //  }

  /** GET heroes from the server */
  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
  }

    /** GET heroes from the server */
    getProducts (): Observable<Product[]> {
      return this.http.get<Product[]>(this.productsUrl)
    }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
