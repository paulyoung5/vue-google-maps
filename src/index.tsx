import { Loader, LoaderOptions } from 'google-maps'
import { h as mapsH, createApp } from './vue-google-maps'
import { Fragment } from '@vue/runtime-core'

const mapEl = document.querySelector('.google-maps')

;(async function () {
  const options: LoaderOptions = {}
  const loader = new Loader(process.env.GOOGLE_MAPS_API_KEY, options)

  const google = await loader.load()
  const mapInstance = new google.maps.Map(mapEl, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  })

  const ChildComponent = {
    props: {
      draggableMarkers: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        markers: [
          {
            title: 'Marker A',
            label: 'A',
            position: {
              lat: -34.397,
              lng: 150.644
            }
          }
        ]
      }
    },
    render () {
      const h = mapsH
      const getMarker = props => {
        const { title, position, icon, label } = props

        return <marker
            title={title}
            label={label}
            draggable={this.draggableMarkers}
            icon={icon}
            position={position}
        />
      }
      return this.markers.map(getMarker)
    }
  }

  const RootComponent = {
    compoennts: { ChildComponent },
    render () {
      const h = mapsH

      return <Fragment>
        <ChildComponent draggableMarkers={true} />
      </Fragment>
    }
  }
  
  window['app'] = createApp(RootComponent).mount(mapInstance)
})()
