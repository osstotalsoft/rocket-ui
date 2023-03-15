import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Checkbox from '@mui/material/Checkbox'
import Tooltip from '@mui/material/Tooltip'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import CheckBoxIcon from '@mui/icons-material/CheckBox'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'
import { Option as BaseOption } from './AutocompleteStyles'

const Option = ({ optionLabel, createdLabel, selected, withCheckboxes, ...rest }) => {
  const optionRef = useRef(null)
  const [isOverflow, setIsOverflow] = useState(false)

  const label = createdLabel ? `${createdLabel} "${optionLabel}"` : optionLabel

  useEffect(() => {
    setIsOverflow(optionRef?.current?.scrollWidth > optionRef?.current?.clientWidth)
  }, [])

  return withCheckboxes ? (
    <li {...rest}>
      <Checkbox
        icon={<CheckBoxOutlineBlankIcon fontSize='small' />}
        checkedIcon={<CheckBoxIcon fontSize='small' />}
        style={{ marginRight: 8 }}
        checked={selected}
      />
      {optionLabel}
    </li>
  ) : (
    <Tooltip title={optionLabel} disableHoverListener={!isOverflow}>
      <li {...rest}>
        <BaseOption ref={optionRef}>
          <Typography>{label}</Typography>
        </BaseOption>
      </li>
    </Tooltip>
  )
}

Option.propTypes = {
  optionLabel: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  withCheckboxes: PropTypes.bool,
  createdLabel: PropTypes.string
}

export default Option
