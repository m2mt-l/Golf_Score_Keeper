import { Component, OnInit, Input } from '@angular/core';
import { FormService } from '../form.service';
import { ScoreService } from '../score.service';
import { Score } from '../score';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
    constructor(private formService: FormService, private scoreService: ScoreService) {}

    @Input() course: string = '';
    @Input() name: string = '';
    @Input() holes: number = 0;

    ngOnInit(): void {
        this.scoreService.generateScores(this.holes);
    }

    displayedTotalColumns: string[] = ['underOverPar', 'totalPar', 'totalStroke'];
    displayedColumns: string[] = ['holeNumber', 'parForHall', 'name'];
    defaultParForHall: number = 0;

    nothing: string = 'nothing';
    high: string = 'high';
    low: string = 'low';

    // scores: Score[] = [];

    cellColor: { [key: string]: string } = {
        high: '#ff93ac', // red
        low: '#40E0D0', // Turquoise
        nothing: '#ffffff',
    };

    onKeyParForHall(position: number, value: string): void {
        this.scoreService.setParForHall(position, value);
    }

    onKeyParForPlayer(position: number, value: string): void {
        this.scoreService.setParForPlayer(position, value);
    }

    getSumParForHall(): number {
        return this.scoreService.sumParForHall();
    }

    getSumParForPlayer(): number {
        return this.scoreService.sumParForPlayer();
    }

    checkScore(position: number): string {
        const parForHall: number | undefined = this.scoreService.getPar(position);
        const parForPlayer: number | undefined = this.scoreService.getStroke(position);

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
        return this.getSumParForPlayer() - this.getSumParForHall();
    }

    getScores(): Score[] {
        return this.scoreService.scores;
    }

    clearForm(): void {
        this.formService.clearFormAll();
    }

    getIsAllScoreFilled(): boolean {
        return this.scoreService.isAllScoreFilled();
    }
}
