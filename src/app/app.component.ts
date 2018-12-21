import { Component } from '@angular/core';
import { BreadTypes } from './bread-types';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  cards: Array<BreadTypes> = [
    {
      avatarPhoto: "https://cdn.shopify.com/s/files/1/0190/6298/products/baguette_shop_4_1024x1024.jpg?v=1483038369", mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Baguettes_-_stonesoup.jpg",
      title: "Baguettes",
      subTitle: "Yeasty French Bread",
      description: "A long, thin loaf of French bread that is commonly made from basic lean dough (the dough, though not the shape, is defined by French law). It is distinguishable by its length and crisp crust.",
    },
    {
      avatarPhoto: "https://media1.popsugar-assets.com/files/thumbor/810e1olMGPzADP5xoqb2ooOwYG4/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/04/29/953/n/28443503/b55e07d31c7be83e_shutterstock_95028838/i/Plain-Bagel.jpg", mainPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Bagel-Plain-Alt.jpg/250px-Bagel-Plain-Alt.jpg",
      title: "Bagel",
      subTitle: "A Jewish Yeast Donut",
      description: "A bread product originating in the Jewish communities of Poland. It is traditionally shaped by hand into the form of a ring from yeasted wheat dough, roughly hand-sized, that is first boiled for a short time in water and then baked. The result is a dense, chewy, doughy interior with a browned and sometimes crisp exterior. Bagels are often topped with seeds baked on the outer crust, with the traditional ones being poppy or sesame seeds. Some may have salt sprinkled on their surface, and there are different dough types, such as whole-grain or rye.",
    }
  ];

}
