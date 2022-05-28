import { Component, OnInit } from '@angular/core';

interface Score {
    position: number;
    par?: number;
    stroke?: number;
}
@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
    displayedTotalColumns: string[] = ['underOverPar', 'totalPar', 'totalStroke']
    displayedColumns: string[] = ['holeNumber', 'parForHall', 'name'];
    totalParForPlayer: number = 0;

    scores: Score[] = [
        { position: 1, par: undefined, stroke: undefined },
        { position: 2, par: undefined, stroke: undefined },
    ];

    onKeyParForHall(position: number, value: string): void {
        this.scores[position - 1].par = Number(value);
        console.table(this.scores);
    }

    onKeyParForPlayer(position: number, value: string): void {
        this.scores[position - 1].stroke = Number(value);
        console.table(this.scores);
    }

    sumParForHall(): number {
        let totalParForHall: number = 0;
        for (let score of this.scores) {
            if(score.par != undefined) {
                totalParForHall += score.par
            } 
        }
        return totalParForHall;
    }

    sumParForPlayer(): number {
        let totalParForPlayer: number = 0;
        for (let score of this.scores) {
            if(score.stroke != undefined) {
                totalParForPlayer += score.stroke
            } 
        }
        return totalParForPlayer;
    }

    parResult(): number {
        return this.sumParForHall() - this.sumParForPlayer();
    }

}
