import React from 'react'
import { CloudDownload, CompareArrows, History, OpenInBrowser, Publish } from '@mui/icons-material'
import { ListItemIcon, MenuItem, MenuList } from '@mui/material'
import SideMenu from '../SideMenu'
import Typography from '@totalsoft_oss/rocket-ui.components.data-display.typography'

export const SideMenuContainer = () => (
  <SideMenu
    content={
      <MenuList>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <OpenInBrowser />
          </ListItemIcon>
          <Typography>{'Load template'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <CloudDownload />
          </ListItemIcon>
          <Typography>{'Export Yaml'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <Publish />
          </ListItemIcon>
          <Typography>{'Import Yaml'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <CompareArrows />
          </ListItemIcon>
          <Typography>{'Compare configuration'}</Typography>
        </MenuItem>
        <MenuItem disableGutters dense>
          <ListItemIcon>
            <History />
          </ListItemIcon>
          <Typography>{'Configuration history'}</Typography>
        </MenuItem>
      </MenuList>
    }
  />
)
