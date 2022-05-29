import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    @Output() addCourseName: EventEmitter<string> = new EventEmitter<string>();

    course: string = ''
    name: string = '';
    holes: number = 0;

    onKeyCourse(value: string) {
        this.course = value;
        this.addCourseName.emit(value);
    }

    onKeyName(value: string) {
        this.name = value;
    }

    onKeyHole(value: string) {
        this.holes = Number(value);
    }

    isFormFilled(): boolean {
        return this.course != '' && this.name != '' && this.holes != 0;
    }

    clearForm(): void {
        this.course = '';
        this.name = '';
        this.holes = 0;
    }
}
