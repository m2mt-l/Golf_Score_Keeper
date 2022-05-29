import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    selected = 'option2';
    name: string = '';
    holes: number = 0;

    onKeyName(value: string) {
        this.name = value;
    }

    onKeyHole(value: string) {
        this.holes = Number(value);
    }
}
