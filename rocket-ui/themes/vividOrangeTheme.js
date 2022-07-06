import { createTheme } from '@mui/material';
import componentsOverride from './common/overrides';
import { generateCustomShadows, generateShadows } from './common/shadows';
import { palette } from './orangeTheme';
import typography from './common/typography'

const vividOrangeTheme = createTheme({
  palette: {
    ...palette,
    BACKGROUND: {
      main: '#eee',
    },
  },
  shape: { borderRadius: 8 },
  typography,
  shadows: generateShadows(palette),
  customShadows: generateCustomShadows(palette),
});

vividOrangeTheme.components = componentsOverride(vividOrangeTheme);

export default vividOrangeTheme;
