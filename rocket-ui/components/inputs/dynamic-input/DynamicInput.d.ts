export interface DynamicInputProps {
  /**
   * The type of control.
   */
  controlType?: 'INT' | 'NUM' | 'STR' | 'CLST' | 'VCLST' | 'BOOL'
  /**
   * Callback fired when the value is changed.
   */
  onChange: (input: unknown) => void
  /**
   * Used in `CLST` and `VCLST` control types.
   * Function that returns a promise, which resolves to the set of options to be used once the promise resolves.
   */
  loadOptions?: (input: string) => Promise<any>
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value?: unknown
  /**
   * The default component.
   */
  DefaultComp?: (props: unknown) => JSX.Element
  /**
   * The props of the default component.
   */
  defaultCompProps?: unknown
}
/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/inputs/dynamic-input
 *
 *  Take a look over the code for further information:https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/DynamicInput/DynamicInput.js
 * 
 * Components used:
 * 
 * - TextField: https://mui.com/api/text-field/
 * - Switch: https://mui.com/api/switch/
 * - Autocomplete: https://mui.com/api/autocomplete/
 * 
 */
export default function DynamicInput(props: DynamicInputProps): JSX.Element
