import { Component, Input } from '@angular/core';
import { conferences } from '../../model/conference';

@Component({
  selector: 'app-list-conf',
  imports: [],
  templateUrl: './list-conf.html',
  styleUrl: './list-conf.css',
})
export class ListConf {
  @Input() conferences: conferences[] = [];
}
