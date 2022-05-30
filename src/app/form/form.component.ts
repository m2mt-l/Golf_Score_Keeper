import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { FormService } from '../form.service';
import { ScoreService } from '../score.service';
@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    constructor(private formService: FormService, private scoreService: ScoreService) {}

    ngOnInit(): void {}

    @Output() addCourseName: EventEmitter<string> = new EventEmitter<string>();

    onKeyCourse(value: string) {
        this.formService.setCourse(value);
        this.addCourseName.emit(value);
    }

    onKeyName(value: string) {
        this.formService.setName(value);
    }

    onKeyHole(value: string) {
        this.formService.setHole(value);
    }

    onSubmit(form: NgForm) {
        form.resetForm();
    }

    isFormFilled(): boolean {
        return (
            this.formService.course != '' &&
            this.formService.name != '' &&
            this.formService.holes != 0 &&
            this.formService.date != ''
        );
    }

    addEvent(event: MatDatepickerInputEvent<Date>) {
        this.formService.setDate(String(event.value));
    }

    getCourse(): string {
        return this.formService.course;
    }

    getName(): string {
        return this.formService.name;
    }

    getHoles(): number {
        return this.formService.holes;
    }

    clearForm(): void {
        this.formService.clearFormAll();
        this.scoreService.clearScores();
    }

    getIsAllScoreFilled(): boolean {
        return this.scoreService.isAllScoreFilled();
    }
}
