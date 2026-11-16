import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { ListConf } from './pages/list-conf/list-conf';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, ListConf],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
