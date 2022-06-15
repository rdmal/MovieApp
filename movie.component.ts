import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
 @Input()num: string = '';
 BuyTickets: string = '';
 HouseFull: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  movielist: movie[] = [
    {moviename:'Mission Impossible Fallout', director:'Jon woo', actor: 'Tom Cruise', year:'2018'},
    {moviename:'Top Gun Mavern', director:'Joseph Kosinski', actor: 'Tom Cruise', year:'2022'},
    {moviename:'La La Land', director:'Damien Chazelle', actor: 'Emma Stone', year:'2016'},
    {moviename:'Doctor Strange', director:'Sam Raimi',actor: 'Elizabeth Olsen', year:'2022'},
    {moviename:'Avengers:Endgame', director:'Anthony Russo & Joe Russo', actor:'Robert Downey', year:'2019'}
  ]
}
class movie{
  moviename: string | undefined;
  director: string | undefined;
  actor: string | undefined;
  year: string | undefined;

}
