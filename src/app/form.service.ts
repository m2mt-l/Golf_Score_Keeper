import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FormService {

    constructor() { }

    course: string = ''
    name: string = '';
    holes: number = 0;
    date: string = ''

    setCourse(value: string): void {
        this.course = value;
    }

    setName(value: string): void {
        this.name = value;
    }

    setHole(value: string): void {
        this.holes = Number(value);
    }

    setDate(value: string): void {
        this.date = value
    }

    clearFormAll(): void {
        this.course = '';
        this.name = '';
        this.holes = 0;
        this.date = '';
    }
}
