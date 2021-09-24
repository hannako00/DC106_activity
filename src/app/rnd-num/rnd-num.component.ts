import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnd-num',
  templateUrl: './rnd-num.component.html',
  styleUrls: ['./rnd-num.component.css']
})
export class RndNumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  rndNumber = 0;

  increment() {
    this.rndNumber = this.rndNumber + Number(( Math.random()*10).toFixed(0)
    )}

  decrement() {
    this.rndNumber = this.rndNumber - Number(( Math.random()*10).toFixed(0)
    )}
}
