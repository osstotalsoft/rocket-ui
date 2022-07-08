import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Accordion from '@totalsoft_oss/rocket-ui.components.surfaces.accordion'

const AccordionList = ({ content, canExpandAll, defaultExpanded, ...rest }) => {
  const [localActive, setLocalActive] = useState(defaultExpanded)
  const handleChange = panel => (_, expanded) => setLocalActive(expanded ? panel : -1)

  return (
    <>
      {content?.map((prop, key) => {
        return (
          <Accordion
            key={key}
            title={prop?.title}
            content={prop?.details}
            {...rest}
            {...(canExpandAll ? {} : { expanded: localActive === key, onChange: handleChange(key) })}
          />
        )
      })}
    </>
  )
}

AccordionList.defaultProps = {
  canExpandAll: false
}

AccordionList.propTypes = {
  /**
   * Default expanded accordion.
   */
  defaultExpanded: PropTypes.number,
  /**
   * If false, only one accordion at a time can be expanded
   */
  canExpandAll: PropTypes.bool,
  /**
   * The content of accordion.
   */
  content: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      details: PropTypes.node
    })
  ).isRequired
}

export default AccordionList
