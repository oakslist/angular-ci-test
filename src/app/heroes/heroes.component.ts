import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Product } from '../product';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getProducts();
  }

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];
  products: Product[];

  getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

  getProducts(): void {
        this.heroService.getProducts()
            .subscribe(products => this.products = products);
      }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
