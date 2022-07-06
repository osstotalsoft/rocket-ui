import reactJestConfig from '@teambit/react/jest/jest.config'
import { generateNodeModulesPattern } from '@teambit/dependencies.modules.packages-excluder'

const packagesToExclude = ['@totalsoft_oss']

module.exports = {
  ...reactJestConfig,
  transformIgnorePatterns: ['^.+.module.(css|sass|scss)$', generateNodeModulesPattern({ packages: packagesToExclude })]
}
