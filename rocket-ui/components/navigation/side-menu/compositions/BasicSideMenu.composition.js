import React from 'react'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'
import HistoryIcon from '@mui/icons-material/History'
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser'
import PublishIcon from '@mui/icons-material/Publish'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import SideMenu from '../SideMenu'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

export const SideMenuContainer = () => (
  <SideMenu
    content={
      <MenuList>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <OpenInBrowserIcon />
          </ListItemIcon>
          <Typography>{'Load template'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <CloudDownloadIcon />
          </ListItemIcon>
          <Typography>{'Export Yaml'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <PublishIcon />
          </ListItemIcon>
          <Typography>{'Import Yaml'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <CompareArrowsIcon />
          </ListItemIcon>
          <Typography>{'Compare configuration'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <HistoryIcon />
          </ListItemIcon>
          <Typography>{'Configuration history'}</Typography>
        </MenuItem>
      </MenuList>
    }
  />
)
