import { MainRuntime } from '@teambit/cli'
import { ReactAspect, ReactMain /*, UseTypescriptModifiers*/ } from '@teambit/react'
import { BabelAspect } from '@teambit/babel'
import { EnvsAspect, EnvsMain } from '@teambit/envs'
import { MyEnvAspect } from './my-env.aspect'

export class MyEnvMain {
  static slots = []

  static dependencies = [ReactAspect, EnvsAspect, BabelAspect]

  static runtime = MainRuntime

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const MyEnvEnv = envs.compose(react.reactEnv, [
      react.overrideJestConfig(require.resolve('./jest/jest.config')),
      react.useEslint({
        transformers: [
          config => {
            config.addPlugins(['@babel/preset-react'])
            return config
          }
        ]
      }),
      //react.usePrettier({
      //  transformers: [
      //    (config) => {
      //      config.setKey('tabWidth', 2);
      //      return config;
      //    }
      //  ]
      //}),
      react.overrideDependencies({
        devDependencies: {
          '@types/react': '^18.0.17',
          '@types/react-dom': '^18.0.6',
          '@teambit/react.react-env': '0.0.23',
          'chart.js': '3.9.1',
          'react-chartjs-2': '4.3.1'
        },
        peerDependencies: {
          '@totalsoft_oss/rocket-ui.providers.theme': {
            version: 'latest',
            resolveFromEnv: true
          }
        }
      })
    ])

    envs.registerEnv(MyEnvEnv)
    return new MyEnvMain()
  }
}

MyEnvAspect.addRuntime(MyEnvMain)
