import accepts from 'attr-accept'
import { curry, filter, flip, gt, gte, isEmpty, lt, lte, map, not, pipe, prop, sum } from 'ramda'

const verifiedFileType = accepts |> flip |> curry
const invalidFileType = pipe(verifiedFileType, not) |> curry

const getSize = prop('size')
const totalSize = pipe(map(getSize), sum)

const biggerItems = ((maxItemSize, file) => file |> getSize |> lt(maxItemSize)) |> curry
const smallerItems = ((minItemSize, file) => file |> getSize |> gt(minItemSize)) |> curry

export const validFileTypes =
  ((onError, accept, files) => {
    const badFiles = files |> filter(invalidFileType(accept))
    if (isEmpty(badFiles)) return true
    onError && onError({ message: 'Bad file type', files: badFiles })
    return false
  }) |> curry

export const validMaxTotalSize =
  ((onError, maxTotalSize, files) => {
    const totalFileSize = files |> totalSize
    if (totalFileSize |> gte(maxTotalSize)) return true
    onError && onError({ message: 'Total size exceeded', totalFileSize })
    return false
  }) |> curry

export const validMaxItemSize =
  ((onError, maxItemSize, files) => {
    const badFiles = files |> filter(biggerItems(maxItemSize))
    if (isEmpty(badFiles)) return true
    onError && onError({ message: 'File size exceeded', files: badFiles })
    return false
  }) |> curry

export const validMinTotalSize =
  ((onError, minTotalSize, files) => {
    const totalFileSize = files |> totalSize
    if (totalFileSize |> lte(minTotalSize)) return true
    onError && onError({ message: 'Total size too small', totalFileSize })
    return false
  }) |> curry

export const validMinItemSize =
  ((onError, minItemSize, files) => {
    const badFiles = files |> filter(smallerItems(minItemSize))
    if (isEmpty(badFiles)) return true
    onError && onError({ message: 'File size too small', files: badFiles })
    return false
  }) |> curry

export default { validFileTypes, validMaxItemSize, validMaxTotalSize, validMinItemSize, validMinTotalSize }
