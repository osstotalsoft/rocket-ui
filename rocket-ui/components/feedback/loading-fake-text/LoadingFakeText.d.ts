import { SkeletonProps as MuiSkeletonProps } from '@mui/material'

export interface LoadingFakeTextProps extends Omit<MuiSkeletonProps, 'animation'> {
  /**
   * The animation. If false, the animation effect is disabled
   * @default 'wave'
   */
  animation?: 'pulse' | 'wave' | 'false'
  /*
   * The number of fake line texts that will be rendered
   */
  lines?: number
  /*
   * If set to true, the fake text will render on a Paper component
   */
  onPaper?: boolean
  /**
   * The shape of the loading fake text
   * @default 'text'
   */
  variant?: 'text' | 'circular' | 'rectangular'
}

/**
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/loading-fake-text
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-webapp-components/blob/master/components/FakeText/LoadingFakeText.js
 *
 * Material-UI component used:
 *
 * - Skeleton: https://mui.com/api/skeleton
 *
 */

export default function LoadingFakeText(props: LoadingFakeTextProps): JSX.Element
