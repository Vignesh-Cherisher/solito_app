import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { crossCommunicationService } from '../services/crossCommunication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent implements OnInit {
  searchPlaceHolder: string = "";
  iconDescStatus: boolean = true;
  cityName: string = "";
  userLogin: boolean = false;

  @ViewChild('searchBar') searchBarElement: ElementRef;

  constructor(private crossCommunicationServ: crossCommunicationService) { }

  ngOnInit(): void {
    if (window.innerWidth > 800) {
      this.searchPlaceHolder = 'Search for a restaurant, cuisine or area...'
      this.iconDescStatus = true
    } else {
      this.searchPlaceHolder = 'Search Here...'
      this.iconDescStatus = false
    }
    this.cityName = this.crossCommunicationServ.getSelectedCity()
  }

  @HostListener('window:resize', ['$event']) onResize() {
    if (this.searchBarElement.nativeElement.offsetWidth > 315) {
      this.searchPlaceHolder = 'Search for a restaurant, cuisine or area...'
      this.iconDescStatus = true
    } else {
      this.searchPlaceHolder = 'Search Here...'
      this.iconDescStatus = false
    }
  }

  onSelected(cityValue: string) {
    this.crossCommunicationServ.setSelectedCity(cityValue)
    this.cityName = this.crossCommunicationServ.getSelectedCity()
  }
}
