import accepts from 'attr-accept'
import { curry, filter, flip, gt, gte, isEmpty, lt, lte, map, not, pipe, prop, sum } from 'ramda'

const verifiedFileType = curry(flip(accepts))
const invalidFileType = curry(pipe(verifiedFileType, not))

const getSize = prop('size')
const totalSize = pipe(map(getSize), sum)

const biggerItems = curry((maxItemSize, file) => lt(maxItemSize, getSize(file)))
const smallerItems = curry((minItemSize, file) => gt(minItemSize, getSize(file)))

export const validFileTypes = curry((onError, accept, files) => {
  const badFiles = filter(invalidFileType(accept), files)
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'Bad file type', files: badFiles })
  return false
})

export const validMaxTotalSize = curry((onError, maxTotalSize, files) => {
  const totalFileSize = totalSize(files)
  if (gte(maxTotalSize, totalFileSize)) return true
  onError && onError({ message: 'Total size exceeded', totalFileSize })
  return false
})

export const validMaxItemSize = curry((onError, maxItemSize, files) => {
  const badFiles = filter(biggerItems(maxItemSize), files)
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size exceeded', files: badFiles })
  return false
})

export const validMinTotalSize = curry((onError, minTotalSize, files) => {
  const totalFileSize = totalSize(files)
  if (lte(minTotalSize, totalFileSize)) return true
  onError && onError({ message: 'Total size too small', totalFileSize })
  return false
})

export const validMinItemSize = curry((onError, minItemSize, files) => {
  const badFiles = filter(smallerItems(minItemSize), files)
  if (isEmpty(badFiles)) return true
  onError && onError({ message: 'File size too small', files: badFiles })
  return false
})

export default { validFileTypes, validMaxItemSize, validMaxTotalSize, validMinItemSize, validMinTotalSize }
