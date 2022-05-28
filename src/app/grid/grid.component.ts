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
    displayedTotalColumns: string[] = ['underOverPar', 'totalPar', 'totalStroke'];
    displayedColumns: string[] = ['holeNumber', 'parForHall', 'name'];
    defaultParForHall: number = 0;
    par: string = 'par';
    bogey: string = 'bogey';
    doubleBogey: string = 'doubleBogey';
    nothing: string = 'nothing';

    scores: Score[] = [
        { position: 1, par: undefined, stroke: undefined },
        { position: 2, par: undefined, stroke: undefined },
    ];


    cellColor: {[key:string]: string} = {
        red: "ff0000",
        green: "00ff00",
        blue: "0000ff"
    }
    
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
        const parForHall: number | undefined= this.scores[position - 1].par;
        const parForPlayer: number | undefined = this.scores[position - 1].stroke;
        if(parForHall === undefined || parForPlayer === undefined) return 'undefined';
        const playerScore = parForPlayer - parForHall
        if(playerScore === 0) return this.par;
        else if(playerScore === 1) return this.bogey;
        else if(playerScore >= 2) return this.doubleBogey;
        else return this.nothing;
    }

    isPar(value: string): boolean {
        return value === this.par; 
    }

    isBogey(value: string): boolean {
        return value === this.bogey;
    }

    isDoubleBogey(value: string): boolean {
        return value === this.doubleBogey;
    }

    parResult(): number {
        return this.sumParForPlayer() - this.sumParForHall();
    }
}
