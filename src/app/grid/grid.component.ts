import { Component, OnInit, Input } from '@angular/core';

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
    @Input() name: string = '';
    @Input() holes: number = 0;

    ngOnInit(): void {}

    displayedTotalColumns: string[] = ['underOverPar', 'totalPar', 'totalStroke'];
    displayedColumns: string[] = ['holeNumber', 'parForHall', 'name'];
    defaultParForHall: number = 0;
    par: string = 'par';
    bogey: string = 'bogey';
    doubleBogey: string = 'doubleBogey';
    nothing: string = 'nothing';
    high: string = 'high';
    low: string = 'low';

    scores: Score[] = [
        { position: 1, par: undefined, stroke: undefined },
        { position: 2, par: undefined, stroke: undefined },
    ];

    cellColor: { [key: string]: string } = {
        high: '#ff93ac', // red
        low: '#40E0D0', // Turquoise
        nothing: '#ffffff',
    };

    onKeyParForHall(position: number, value: string): void {
        this.scores[position - 1].par = Number(value);
        console.table(this.scores);
        console.log(this.holes);
    }

    onKeyParForPlayer(position: number, value: string): void {
        this.scores[position - 1].stroke = Number(value);
        console.table(this.scores);
    }

    sumParForHall(): number {
        let totalParForHall: number = 0;
        for (let score of this.scores) {
            if (score.par != undefined) {
                totalParForHall += score.par;
            }
        }
        return totalParForHall;
    }

    sumParForPlayer(): number {
        let totalParForPlayer: number = 0;
        for (let score of this.scores) {
            if (score.stroke != undefined) {
                totalParForPlayer += score.stroke;
            }
        }
        return totalParForPlayer;
    }

    checkScore(position: number): string {
        const parForHall: number | undefined = this.scores[position - 1].par;
        const parForPlayer: number | undefined = this.scores[position - 1].stroke;

        if (parForHall === undefined || parForPlayer === undefined) return 'undefined';

        const playerScore = parForPlayer - parForHall;
        if (parForPlayer === 0) return this.cellColor[this.nothing];
        else if (playerScore < 0) return this.cellColor[this.low];
        else if (playerScore > 0) return this.cellColor[this.high];
        else return this.cellColor[this.nothing];
    }

    checkResult(difference: number): string {
        if (difference < 0) return this.cellColor[this.low];
        else if (difference > 0) return this.cellColor[this.high];
        else return this.cellColor[this.nothing];
    }

    parResult(): number {
        return this.sumParForPlayer() - this.sumParForHall();
    }
}
