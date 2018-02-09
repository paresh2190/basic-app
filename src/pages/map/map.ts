import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import {GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
  CameraPosition,
  MarkerOptions,
  Marker} from '@ionic-native/google-maps';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  @ViewChild('map')
  private mapElement:ElementRef;
  private map:GoogleMap;
  private location:LatLng;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform) {
    this.location = new LatLng(28.704059,77.102490);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.platform.ready().then(() => {
        let element = this.mapElement.nativeElement;
        this.map = GoogleMaps.create(element);

        this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
          let option = {
            target : this.location,
            zoom: 18
          };

          
          
          setTimeout(()=>{ 
            this.addMarker()
          },3000);
        });
    });
  }

  addMarker() {
    this.map.addMarker({
      title: 'My Marker',
      //icon: 'assets/images/1.jpg',
      icon: {url: "assets/images/map-icon.png", min: 11, max: 30 },
      animation: 'Drop',
      position: {
      lat: this.location.lat,
      lng: this.location.lng
      }
      })
      .then(marker => {
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
      alert('Marker Clicked');
      });
      });
    }

}
