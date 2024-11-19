import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent {
  favorites: string[] = [];
  newFavorite: string = '';

  addFavorite() {
    if (this.newFavorite.trim()) {
      this.favorites.push(this.newFavorite.trim());
      this.newFavorite = '';
    }
  }
}