import { RespuestaTopHeadlines, Article } from './../../interfaces/interfaces';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  noticias: Article[] = [];
  constructor(private noticiasService: NoticiasService) { }
  ngOnInit() {
    this.noticiasService.getTopHeadlines().subscribe(resp => {
      console.log('noticias', resp);
      this.noticias.push(...resp.articles);
    });
  }
  cargarNoticias( categoria: string, event? ) {

    this.noticiasService.getTopHeadLinesCategoria( categoria )
          .subscribe( resp => {
            // console.log(resp);
            this.noticias.push( ...resp.articles );

            if ( event ) {
              event.target.complete();
            }
          });
  }

  loadData( event ) {

    this.cargarNoticias( this.segment.value, event );

  }

}


