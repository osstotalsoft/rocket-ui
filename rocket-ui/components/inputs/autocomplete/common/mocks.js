import { includes } from 'ramda'

export const options = [
  { id: 1, name: 'Esign IDM' },
  { id: 2, name: 'Hera IDM', isDisabled: true },
  { id: 3, name: 'Leasing IDM' },
  { id: 4, name: 'Medical' }
]
export const primitiveOptions = ['first option', 'second option', 'third option']
export const numericOptions = [{ period: 1 }, { period: 2 }, { period: 3 }]

function sleep(delay = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

const filterResults = input => options.filter(o => includes(input, o.name))

export const loadFilteredOptions = async input => {
  await sleep(1e3)
  return new Promise(res => (input ? res(filterResults(input)) : res(options)))
}

export const loadOptions = async () => {
  await sleep(1e3)
  return new Promise(res => res(options))
}

export const getOptionDisabled = option => option.isDisabled
