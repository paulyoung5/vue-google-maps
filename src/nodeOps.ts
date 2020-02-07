const isFragment = '__isFragment'

interface Container {
  children: any[]
}
interface Map extends google.maps.Map, Container {}
class Fragment implements Container {
  [isFragment]: true
  children: []
  setMap: () => null
}

type Plottable = google.maps.Marker | google.maps.OverlayView

export const nodeOps = {
  insert (plottable: Plottable, parent: Map | Fragment) {
    plottable = plottable || null

    if (plottable === null) {
      console.log(parent)
      return console.warn('Node was undefined')
    }

    if (parent instanceof google.maps.Map) {
      return plottable.setMap(parent)
    }
  },

  remove (plottable: Plottable) {
    return plottable.setMap(null)
  },

  createElement (tag: string) {
    switch (tag) {
      case 'marker':
        return new google.maps.Marker()
      case 'overlay-view':
        return new google.maps.OverlayView()
    }
  },

  createText (text: string) {
    return
  },

  createComment (text: string) {
    return
  },

  setText (node: Text, text: string) {
    return
  },

  setElementText (plottable: Plottable, text: string) {
    return
  },

  parentNode (plottable: Plottable): google.maps.Map | null {
    return
  },

  nextSibling (node: Node) {
    return
  },

  querySelector (selector: string) {
    return
  },

  setScopeId (plottable: Plottable, id: string) {
    return
  }
}