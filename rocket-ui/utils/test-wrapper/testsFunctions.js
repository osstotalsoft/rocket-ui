import { render as baseRender, fireEvent } from '@testing-library/react'
import TestingWrapper from './TestingWrapper'
// import { renderHook } from '@testing-library/react-hooks'

export const render = (ui, options) => baseRender(ui, { wrapper: TestingWrapper, ...options })
// const customRenderHook = (hook, options) => renderHook(hook, { wrapper: TestingWrapper, ...options })

// more comprehensive simulation of a user click (mousedown + click)
export const userClick = element => {
  fireEvent.mouseDown(element)
  fireEvent.mouseUp(element)
  element.click()
}

// export * from '@testing-library/react'
/*, customRenderHook as renderHook*/
