export interface FavIconProps {
  /**
   * Path to the image
   */
  favIconSource?: string
  /**
   * Path to the fallback image. this will be use when the onerror event occur
   */
  defaultFavIcon?: string
}

/**
 *
 * Demos:
 *
 * - https://bit.cloud/totalsoft_oss/rocket-ui/components/data-display/fav-icon
 *
 *  Take a look over the code for further information: https://github.com/osstotalsoft/rocket-ui/tree/main/rocket-ui/components/data-display/fav-icon
 *
 */

export default function FavIcon(props: FavIconProps): JSX.Element
