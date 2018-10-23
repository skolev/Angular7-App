import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSection: string = 'recipe';

  onNavigate(section: string) {
    this.selectedSection = section;
  }
}
