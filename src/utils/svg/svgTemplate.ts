/**
 * Template for React SVG
 *
 * Converts the given SVG into a TypeScript-compatible React component
 *
 * @see https://www.smooth-code.com/open-source/svgr/docs/typescript/
 * @see https://github.com/smooth-code/svgr
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function template(
  { template },
  opts,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { imports, componentName, props, jsx, exports }
) {
  const typeScriptTpl = template.smart({ plugins: ['typescript'] });

  return typeScriptTpl.ast`
import React from 'react';

const ${componentName} = (props: Props): JSX.Element => ${jsx};

type; Props = {

} & React.SVGProps<SVGSVGElement>;

export default ${componentName};
`;
}

module.exports = template;
