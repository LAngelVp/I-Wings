import { Component } from '@angular/core';
import { CarruselComponent } from '../../components/carrusel/carrusel.component';
import { ButtonsCategoriesFoodComponent } from '../../components/buttons-categories-food/buttons-categories-food.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarruselComponent,
    ButtonsCategoriesFoodComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent {
  logo_humo = "assets/logo_humo_gris.svg"
}
