import { Component, OnInit } from '@angular/core';
import { User } from './model/user';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
	title = 'My Application';
	name: string = 'keka';
	ngOnInit() {
		if (this.name === 'nikhil') {
			console.log('yes');
		} else {
			console.log('no');
		}

		console.log('this is for testing : ');
	}
	users: User[] = [
		{
			name: 'John Doe',
			job: 'Architect and Engineer',
		},
		{
			name: 'Nikhil',
			job: 'Movie Director',
		},
		{
			name: 'Swetha',
			job: 'Sports person',
		},
		{
			name: 'Ram',
			job: 'Quality Analyst',
		},
	];
}
