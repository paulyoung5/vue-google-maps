import {
  createRenderer,
  warn,
  CreateAppFunction
} from '@vue/runtime-core'
import { patchProp } from './patchProp'
import { nodeOps } from './nodeOps'

const { render, createApp: baseCreateApp } = createRenderer({
  patchProp,
  ...nodeOps
})

const createApp: CreateAppFunction<google.maps.Map> = (...args) => {
  const app = baseCreateApp(...args)
  const { mount } = app

  app.mount = function (map): any {
    if (map === null) {
      return warn(`Failed to mount app: map was null.`)
    }

    return mount(map)
  }

  return app
}

export { render, createApp }
export * from '@vue/runtime-core'
