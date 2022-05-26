import { Component, OnInit } from '@angular/core';

interface Score {
    position: number,
    par?: number,
    stroke?: number,

}
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['holeNumber', 'parForHall', 'name'];

  scores: Score[] = [
      {position: 1, par: undefined, stroke: undefined},
      {position: 2, par: undefined, stroke: undefined},
  ]

}
