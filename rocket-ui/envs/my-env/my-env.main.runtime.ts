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
    //const webpackModifiers: UseWebpackModifiers = {
    //  previewConfig: [previewConfigTransformer],
    //  devServerConfig: [devServerConfigTransformer],
    //};

    //const tsModifiers: UseTypescriptModifiers = {
    //  devConfig: [devConfigTransformer],
    //  buildConfig: [buildConfigTransformer],
    //};

    const MyEnvEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */
      react.overrideJestConfig(require.resolve('./jest/jest.config')),

      /**
       * override the ESLint default config here then check your files for lint errors
       * @example
       * bit lint
       * bit lint --fix
       */
      react.useEslint({
        transformers: [
          config => {
            config.addPlugins(['@babel/preset-react'])
            return config
          }
        ]
      }),

      /**
       * override the Prettier default config here the check your formatting
       * @example
       * bit format --check
       * bit format
       */
      //react.usePrettier({
      //  transformers: [
      //    (config) => {
      //      config.setKey('tabWidth', 2);
      //      return config;
      //    }
      //  ]
      //}),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          '@types/react': '^18.0.17',
          '@types/react-dom': '^18.0.6',
          "@teambit/react.react-env": "0.0.23"
        },
        peers: [
          {
            name: 'react',
            version: '18.2.0',
            supportedRange: '^18.2.0',
            force: true
          },
          {
            name: 'react-dom',
            version: '18.2.0',
            supportedRange: '^18.2.0',
            force: true
          }
        ]
      }),

      envs.override({
        getDependencies: () => {
          const baseDependencies = react.reactEnv.getDependencies()

          return {
            ...baseDependencies,
            dependencies: {
              'chart.js': '3.x',
              'react-chartjs-2': '5.x'
            },
            peers: [
              {
                name: '@mui/material',
                supportedRange: '^5.0.0',
                version: '5.x'
              }
            ]
          }
        }
      })
    ])

    envs.registerEnv(MyEnvEnv)
    return new MyEnvMain()
  }
}

MyEnvAspect.addRuntime(MyEnvMain)
