import React from 'react'
import { screen } from '@testing-library/react'
import DynamicInput from './DynamicInput'
import Autocomplete from '@totalsoft_oss/rocket-ui.components.inputs.autocomplete'
import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'

const { render, userClick } = fns

describe('DynamicInput', () => {
  test('renders a disabled text field if no control type and component were provided', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toHaveClass('Mui-disabled')
  })

  test('renders a text field if control type is `STR`', () => {
    const mockOnChange = jest.fn()
    const value = 'input value'
    render(<DynamicInput controlType='STR' value={value} onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByDisplayValue(value)).toBeInTheDocument()
  })

  test('renders a number field if control type is `NUM`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='NUM' value={1000} onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    // the separators depend on the browser settings, so we should cover both cases
    expect(screen.queryByDisplayValue('1,000.00') || screen.queryByDisplayValue('1.000,00')).not.toBeNull()
  })

  test('renders an integer field if control type is `INT`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='INT' value={1000} onChange={mockOnChange} />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByDisplayValue('1000')).toBeInTheDocument()
  })

  test('renders an Autocomplete if control type is `CLST`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='CLST' onChange={mockOnChange} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('renders an Autocomplete if control type is `VCLST`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='VCLST' onChange={mockOnChange} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  test('renders a Switch if control type is `BOOL`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='BOOL' onChange={mockOnChange} />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('calls onChange with the toggled value when control type is `BOOL`', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput controlType='BOOL' value={false} onChange={mockOnChange} />)
    userClick(screen.getByRole('checkbox'))
    expect(mockOnChange).toBeCalledWith(true)
  })

  test('can render a custom Comp', () => {
    const mockOnChange = jest.fn()
    render(<DynamicInput onChange={mockOnChange} DefaultComp={Autocomplete} defaultCompProps={{ options: [1, 2, 3], open: true }} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(3)
  })
})
