import { Component , OnInit } from '@angular/core';
import { ServService } from '../../services/serv.service';

declare const twttr: any; // Agrega una declaración para el objeto twttr

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})

export class TwitterComponent implements OnInit {

  ngOnInit(): void {
    this.loadTwitterScript();
  }

  loadTwitterScript() {
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.charset = 'utf-8';
    script.async = true;
    script.onload = () => {
      // Aquí llamamos a la función para crear el timeline de Twitter
      this.createTwitterTimeline();
    };
    document.head.appendChild(script);
  }

  createTwitterTimeline() {
    twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'OFICIAL_COSSMIL', // Reemplaza con el nombre de usuario de Twitter que deseas mostrar en el timeline
        tweetLimit: 5 ,
      },
      document.getElementById('twitter-timeline1')
    );
    twttr.widgets.createTimeline(
      {
        sourceType: 'profile',
        screenName: 'SaludDeportesBo', // Reemplaza con el segundo nombre de usuario de Twitter que deseas mostrar en el timeline
        tweetLimit: 5 ,
      },
      document.getElementById('twitter-timeline2') // Reemplaza con el ID del elemento HTML donde deseas mostrar el segundo timeline
    );
  }
}
