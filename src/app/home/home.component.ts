import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [
    {
      image: '../../assets/casas/1.svg',
      title: 'Acme Fresh Start Housing',
      location: 'Chicago, IL',
    },
    {
      image: '../../assets/casas/2.svg',
      title: 'A113 Transitional Housing',
      location: 'Santa Monica, CA',
    },
    {
      image: '../../assets/casas/3.svg',
      title: 'Warm Beds Housing Support',
      location: 'Juneaux, AK',
    },
    {
      image: '../../assets/casas/4.svg',
      title: 'Homesteady Housing',
      location: 'Chicago, IL',
    },
    {
      image: '../../assets/casas/5.svg',
      title: 'Happy Homes Group',
      location: 'Gary, IN',
    },
    {
      image: '../../assets/casas/6.svg',
      title: 'Hopeful Apartment Group',
      location: 'Oakland, CA',
    },
    {
      image: '../../assets/casas/7.svg',
      title: 'Seriously Safe Town',
      location: 'Oakland, CA',
    },
    {
      image: '../../assets/casas/8.svg',
      title: 'Hopeful Housing Solutions',
      location: 'Oakland, CA',
    },
    {
      image: '../../assets/casas/9.svg',
      title: 'Seriously Safe Towns',
      location: 'Oakland, CA',
    },
    {
      image: '../../assets/casas/10.svg',
      title: 'Capital Safe Towns',
      location: 'Portland, OR',
    },
  ];

  filteredCards = [...this.cards];
  userSearch: string = '';

  triggerEvent() {
    this.filteredCards = this.userSearch.trim()
      ? this.cards.filter((card) =>
          card.location
            .toLowerCase()
            .includes(this.userSearch.trim().toLowerCase())
        )
      : [...this.cards];
    this.userSearch = '';
  }
}