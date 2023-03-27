import { Component, OnInit } from '@angular/core';

export interface Item {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage {
  data: Item[] = [
    {
      name: 'primary',
      selected: false,
    },
    {
      name: 'secondary',
      selected: true,
    },
    {
      name: 'tertiary',
      selected: false,
    },
    {
      name: 'success',
      selected: true,
    },
  ];

  onClick(item: Item) {
    console.log(item);
  }
}
