import { PreviewRuntime } from '@teambit/preview'
import { ReactAspect, ReactPreview } from '@teambit/react'
// uncomment the line below and install the theme if you want to use our theme or create your own and import it here
// import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
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
