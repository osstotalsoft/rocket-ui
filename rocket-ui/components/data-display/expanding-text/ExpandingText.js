import React, { useCallback, useState } from 'react'
import { PropTypes } from 'prop-types'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import ShowButton from './ExpandingTextStyles'

const ExpandingText = ({ text, minLength, showLessText, showMoreText, display, textProps, buttonProps, expanded, ...rest }) => {
  const shouldCollapse = text.length > minLength
  const [localExpanded, setLocalExpanded] = useState(expanded)

  const displayedText = shouldCollapse && !localExpanded ? `${text.substring(0, minLength)}...` : text
  const toggleExpanded = useCallback(() => setLocalExpanded(current => !current), [])

  return (
    <>
      <Typography style={{ whiteSpace: 'pre-wrap' }} display={display} {...textProps}>
        {displayedText + ' '}
      </Typography>
      {shouldCollapse && (
        <ShowButton display={display} onClick={toggleExpanded} {...buttonProps} {...rest}>
          {localExpanded ? showLessText : showMoreText}
        </ShowButton>
      )}
    </>
  )
}

ExpandingText.defaultProps = {
  showLessText: 'Show less',
  showMoreText: 'Show more',
  display: 'block',
  expanded: false
}

ExpandingText.propTypes = {
  /**
   * Text to be displayed.
   */
  text: PropTypes.string.isRequired,
  /**
   * Length of text to be displayed.
   */
  minLength: PropTypes.number,
  /**
   * @default 'Show less'
   * Text of `showLess` button.
   */
  showLessText: PropTypes.node,
  /**
   * @default 'Show more'
   * Text of `showMore` button.
   */
  showMoreText: PropTypes.node,
  /**
   * @default 'block'
   * CSS `display` prop applied to the text.
   */
  display: PropTypes.oneOf(['inline', 'block', 'inline-block', 'flex', 'inline-flex', 'none']),
  /**
   * Props applied to the text.
   */
  textProps: PropTypes.object,
  /**
   * Props applied to the button.
   */
  buttonProps: PropTypes.object,
  /**
   * @default false
   * Expanded state of the text.
   */
  expanded: PropTypes.bool
}

export default ExpandingText
