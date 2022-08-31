import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SideMenuWrapper, SideMenuButton, SideMenuContent } from './SideMenuStyles'
import PropTypes from 'prop-types'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'

const SideMenu = ({ icon: Icon, content, buttonProps, contentProps, iconProps }) => {
  const [show, setShow] = useState(false)
  const sideMenuRef = useRef()

  const handleClickOutside = useCallback(e => {
    if (sideMenuRef.current && !sideMenuRef.current.contains(e.target)) {
      setShow(false)
    }
  }, [])

  const handleButtonClick = useCallback(() => {
    setShow(current => !current)
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

  return (
    <SideMenuWrapper ref={sideMenuRef}>
      <SideMenuButton onClick={handleButtonClick} {...buttonProps}>
        <Icon fontSize='small' style={{ color: 'white', height: '100%' }} {...iconProps} />
      </SideMenuButton>
      <SideMenuContent show={show} {...contentProps}>
        {content}
      </SideMenuContent>
    </SideMenuWrapper>
  )
}

SideMenu.defaultProps = {
  icon: MenuOpenIcon
}

SideMenu.propTypes = {
  /**
   * Content of the menu
   */
  content: PropTypes.node,
  /**
   * Icon to be displayed on the button
   */
  icon: PropTypes.object,
  /**
   * Props applied to the button
   */
  buttonProps: PropTypes.object,
  /**
   * Props applied to the content
   */
  contentProps: PropTypes.object,
  /**
   * Props applied to the icon
   */
  iconProps: PropTypes.object
}

export default SideMenu
