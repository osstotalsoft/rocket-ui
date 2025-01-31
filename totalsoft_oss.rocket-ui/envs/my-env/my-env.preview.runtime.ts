import { PreviewRuntime } from '@teambit/preview'
import { ReactAspect, ReactPreview } from '@teambit/react'
import { ThemeProvider } from '@totalsoft_oss/rocket-ui.providers.theme'

import { MyEnvAspect } from './my-env.aspect'

export class MyEnvPreviewMain {
  static runtime = PreviewRuntime

  static dependencies = [ReactAspect]

  static async provider([react]: [ReactPreview]) {
    const myEnvPreviewMain = new MyEnvPreviewMain()
    react.registerProvider([ThemeProvider])

    return myEnvPreviewMain
  }
}

MyEnvAspect.addRuntime(MyEnvPreviewMain)
