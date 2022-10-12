// import React from 'react'
// import fns from '@totalsoft_oss/rocket-ui.utils.test-wrapper'
// import ReactTestUtils from 'react-dom/test-utils'

// const { render } = fns

// import FavIcon from './FavIcon'
// import { screen, fireEvent, createEvent } from '@testing-library/dom'

// describe('FavIcon', () => {
//   it('should render default icon', () => {
//     const t = render(
//       <>
//         <img data-testid='favicon' id='favicon' href='#' />
//         <FavIcon favIconSource='https://i.imgur.com/8woNLN2.jpeg' />
//       </>
//     )
//     //act
//     fireEvent.load(getByTestId('favicon'))
//     const doc = screen.getByTestId('favicon')

//     ReactTestUtils.Simulate.load(t.container)

//     createEvent('load', doc)
//     fireEvent(doc, new Event('load'))
//     const link = doc.getAttribute('href')
//     //assert
//     debugger
//     expect(doc).toHaveAttribute('href', 'https://i.imgur.com/8woNLN2.jpeg')
//     expect(link).toBe('https://i.imgur.com/8woNLN2.jpeg')
//   })
// })
