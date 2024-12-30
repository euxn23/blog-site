import { Components } from 'react-markdown'
import { STATIC_FILE_URL } from '@/src/config'

export const img: Components['img'] = ({ node, src, ...props }) => {
  // TODO: rehype でやる
  const resolvedSrc = src?.startsWith('/') ? `${STATIC_FILE_URL}${src}`: src
  return <img src={resolvedSrc} {...props} />
}
