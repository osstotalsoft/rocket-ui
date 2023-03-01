import { SkeletonProps as MuiSkeletonProps } from '@mui/material'

export interface LoadingFakeTextProps extends Omit<MuiSkeletonProps, 'animation'> {
  /**
   * @default 'wave'
   * The animation. If false, the animation effect is disabled
   */
  animation?: 'pulse' | 'wave' | 'false'
  /**
   * @default 1
   * The number of fake line texts that will be rendered
   */
  lines?: number
  /**
   * @default false
   * If set to true, the fake text will render on a Paper component
   */
  onPaper?: boolean
}

/**
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/feedback/loading-fake-text
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/feedback/loading-fake-text
 *
 * Material-UI component used:
 *
 * - Skeleton: https://mui.com/api/skeleton
 *
 */

export default function LoadingFakeText(props: LoadingFakeTextProps): JSX.Element
