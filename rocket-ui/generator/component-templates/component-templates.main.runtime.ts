import { MainRuntime } from '@teambit/cli'
import { GeneratorMain, GeneratorAspect, ComponentContext } from '@teambit/generator'
import { ComponentTemplatesAspect } from './component-templates.aspect'

export class ComponentTemplatesMain {
  static slots = []
  static dependencies = [GeneratorAspect]
  static runtime = MainRuntime
  static async provider([generator]: [GeneratorMain]) {
    /**
     * Array of templates. Add as many templates as you want
     * Separate the templates to multiple files if you prefer
     * Modify, add or remove files as needed
     * See the docs file of this component for more info
     */

    generator.registerComponentTemplate([
      {
        name: 'rocket-generator',
        description: 'A rocket component generator',
        generateFiles: (context: ComponentContext) => {
          return [
            // index file
            {
              relativePath: 'index.js',
              isMain: true,
              content: `import ${context.namePascalCase}  from './${context.namePascalCase}';
export default ${context.namePascalCase};
`
            },

            // component file
            {
              relativePath: `${context.namePascalCase}.js`,
              content: `import React from 'react';
import PropTypes from 'prop-types';
import ${context.namePascalCase} from './${context.namePascalCase}'

const ${context.namePascalCase} = () => {}

${context.namePascalCase}.propTypes = {}

export default ${context.namePascalCase}
`
            },

            // docs file
            {
              relativePath: `${context.namePascalCase}.docs.mdx`,
              content: `---
description: '${context.namePascalCase} component'
labels: ['text', 'ui', '${context.name}']
---

import  ${context.namePascalCase}  from './${context.namePascalCase}';

## Basic ${context.name} component

Basic example that renders a ${context.name}

### Component usage

\`\`\`js
<${context.namePascalCase} />
\`\`\`

### Use this live example to interact with ${context.name} component

Live example:

\`\`\`js
<${context.namePascalCase} />
\`\`\`
`
            },

            // composition file
            {
              relativePath: `compositions/${context.namePascalCase}.composition.js`,
              content: `import React from 'react';
import  ${context.namePascalCase}  from '../${context.namePascalCase}';

export const Basic${context.namePascalCase}  = () => (
  <${context.namePascalCase}  text="hello from ${context.namePascalCase} " />
);
`
            },

            // test file
            {
              relativePath: `${context.namePascalCase}.test.js`,
              content: `import React from 'react';
import { screen } from '@testing-library/react'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render } = fns

import ${context.namePascalCase} from './${context.namePascalCase}';

it('should render with the correct text', () => {
  const { getByText } = render(<${context.namePascalCase} />);
  const rendered = getByText('hello from ${context.namePascalCase}');
  expect(rendered).toBeTruthy();
});
`
            }
            // add more files here such as css/sass
          ]
        }
      }
    ])

    return new ComponentTemplatesMain()
  }
}

ComponentTemplatesAspect.addRuntime(ComponentTemplatesMain)
