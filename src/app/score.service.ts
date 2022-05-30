import { Injectable } from '@angular/core';
import { Score } from './score';
@Injectable({
	providedIn: 'root'
})
export class ScoreService {

	constructor() { }

	scores: Score[] = [];

	generateScores(position: number): void {
        for (let i: number = 1; i <= position; i++) {
            const score: Score = {
                position: i,
                par: undefined,
                stroke: undefined,
            };
            this.scores.push(score);
        }
    }

    setParForHall(position: number, value: string): void {
        this.scores[position - 1].par = Number(value);
        // console.table(this.scores);
    }

    setParForPlayer(position: number, value: string): void {
        this.scores[position - 1].stroke = Number(value);
        // console.table(this.scores);
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

    getPar(position: number): number | undefined {
        return this.scores[position - 1].par;
    }

    getStroke(position: number): number | undefined {
        return this.scores[position - 1].stroke;
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

    isAllScoreFilled(): boolean {
        for (let score of this.scores) {
            if (score.stroke === undefined || score.stroke === 0) return false;
        }
        return true;
    }
}
