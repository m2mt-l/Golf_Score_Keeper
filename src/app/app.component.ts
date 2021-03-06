import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Golf Score Keeper';
    course = '';

    addCourseName(value: string): void {
        this.course = value;
    }

    displayTitle(): string {
        return this.course === '' ? this.title : this.title + ' for ' + this.course;
    }
}
