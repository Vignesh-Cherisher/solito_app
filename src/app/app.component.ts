import { Component } from '@angular/core';
import { crossCommunicationService } from './services/crossCommunication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [crossCommunicationService]
})
export class AppComponent {
  title = 'food-delivery-app';

  constructor(private crossCommunicationServ: crossCommunicationService) { }
}