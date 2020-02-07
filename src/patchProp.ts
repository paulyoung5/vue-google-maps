import {
  ComponentInternalInstance,
  SuspenseBoundary,
  VNode
} from '@vue/runtime-core'

export function patchProp(
  marker: google.maps.Marker,
  key: string,
  nextValue: any,
  prevValue: any,
  isSVG: boolean,
  prevChildren?: VNode[],
  parentComponent?: ComponentInternalInstance,
  parentSuspense?: SuspenseBoundary<Node, Element>,
  unmountChildren?: any
  ) {
    if (marker === undefined) {
      return
    }

    switch (key) {
      case 'directives':
        console.log(nextValue)
        break
      case 'attrs':
        const props = Object.entries(nextValue)

        props.forEach(([prop, value]: [string, any]) => {
          switch (prop) {
            case 'title':
              const title: string = value
              return marker.setTitle(title)
            case 'label':
              const label: string = value
              return marker.setLabel(label)
            case 'position':
              const position: google.maps.LatLngLiteral = value
              return marker.setPosition(position)
            case 'draggable':
              const draggable: boolean = value
              return marker.setDraggable(draggable)
            case 'icon':
              const icon: google.maps.Icon = value
              return marker.setIcon(icon)
            default:
              console.log(value)
              console.info(`Unrecognised prop: ${key}`)
              break
          }
        })
    }
  }