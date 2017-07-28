import { Component } from '@angular/core';
import { ConfigurationService } from './configuration.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  providers: [ConfigurationService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private data;

  constructor(private service: ConfigurationService) {
    service.getData().subscribe (
      result => this.data = result
    );
  }
}
