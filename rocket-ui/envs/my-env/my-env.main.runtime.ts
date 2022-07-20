import { MainRuntime } from '@teambit/cli'
import { ReactAspect, ReactMain /*, UseTypescriptModifiers*/ } from '@teambit/react'
import { CompilerAspect } from '@teambit/compiler'
import { BabelAspect, BabelMain } from '@teambit/babel'
import babelConfig from './babel.config'
import { EnvsAspect, EnvsMain } from '@teambit/envs'
import { MyEnvAspect } from './my-env.aspect'
//import {
//  previewConfigTransformer,
//  devServerConfigTransformer
//} from './webpack/webpack-transformers';
//import {
//  devConfigTransformer,
//  buildConfigTransformer,
//} from "./typescript/ts-transformer";

export class MyEnvMain {
  static slots = []

  static dependencies = [ReactAspect, EnvsAspect, BabelAspect]

  static runtime = MainRuntime

  static async provider([react, envs, babel]: [ReactMain, EnvsMain, BabelMain]) {
    //const webpackModifiers: UseWebpackModifiers = {
    //  previewConfig: [previewConfigTransformer],
    //  devServerConfig: [devServerConfigTransformer],
    //};

    //const tsModifiers: UseTypescriptModifiers = {
    //  devConfig: [devConfigTransformer],
    //  buildConfig: [buildConfigTransformer],
    //};

    // const babelCompiler = babel.createCompiler({
    //   babelTransformOptions: babelConfig
    // })

    // // Get React's build pipeline
    // const basicBuildPipeline = react.reactEnv.getBuildPipe()
    // // Filter out compilation build tasks
    // const basicBuildPipelineWithoutCompilation = basicBuildPipeline.filter(task => task.aspectId !== CompilerAspect.id)

    // const compilerBuildTask = [compiler.createTask('BabelCompiler', babelCompiler), ...basicBuildPipelineWithoutCompilation]

    const MyEnvEnv = envs.compose(react.reactEnv, [
      /**
       * Uncomment to override the config files for TypeScript, Webpack or Jest
       * Your config gets merged with the defaults
       */

      // react.useTypescript(tsModifiers),  // note: this cannot be used in conjunction with react.overrideCompiler
      // react.useWebpack(webpackModifiers),
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
            config.addPlugins(['@babel/preset-react', '@babel/plugin-proposal-pipeline-operator'])
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
          // '@types/react': '17.0.3'
        }
      }),

      envs.override({
        getDependencies: () => {
          const baseDependencies = react.reactEnv.getDependencies()

          return {
            ...baseDependencies,
            peers: [
              {
                name: '@mui/material',
                supportedRange: '^5.0.0',
                version: '^5.9.1'
              },
              {
                name: 'react-chartjs-2',
                supportedRange: '^4.0.0',
                version: '4.2.0'
              },
              { name: 'chart.js', supportedRange: '^3.0.0', version: '3.8.0' }
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
