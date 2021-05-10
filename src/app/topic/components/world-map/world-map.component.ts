import { Component, OnInit } from '@angular/core'
import Globe from 'globe.gl'

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.scss']
})
export class WorldMapComponent implements OnInit {
  constructor () {}

  ngOnInit (): void {
    const element = document.getElementById('world__map')
    console.log(element)
    const myGlobe = Globe()
    fetch(
      'https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_populated_places_simple.geojson'
    )
      .then(res => res.json())
      .then(places => {
        myGlobe(element)
          .globeImageUrl(
            'https://unpkg.com/three-globe@2.18.2/example/img/earth-night.jpg'
          )
          .backgroundImageUrl(
            'https://unpkg.com/three-globe@2.18.2/example/img/night-sky.png'
          )
          .labelsData(places.features)
          //@ts-ignore
          .labelLat(d => d.properties.latitude)
          //@ts-ignore
          .labelLng(d => d.properties.longitude)
          //@ts-ignore
          .labelText(d => d.properties.name)
          //@ts-ignore
          .labelSize(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          //@ts-ignore
          .labelDotRadius(d => Math.sqrt(d.properties.pop_max) * 4e-4)
          .labelColor(() => 'rgba(255, 165, 0, 0.75)')
          .labelResolution(2)
          .backgroundColor('white')
      })
  }
}
