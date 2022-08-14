import { getElement, getElements, getDoc, delay } from '@/utils/commons'
import { Logger } from '@/utils/logger'

const logger = new Logger('Fetch All Images')

/**
 * 若 gallery 的頁數超過1頁，在第1頁時，會依序載入後面的頁面 (間隔3秒)
 */
async function fetchAllImages() {
  if (!isFirstPage()) {
    logger.log('Not first page, do nothing')
    return
  }

  logger.log('Start')
  const pageUrls = getPageUrls()

  if (!pageUrls) {
    return
  }

  if (pageUrls.length === 0) {
    logger.log('Only one page, do nothing')
    return
  }

  for (const url of pageUrls) {
    try {
      await delay(3000)

      logger.log(`fetching ${url}`)
      const doc = await getDoc(url)
      const imageElements = getImageElements(doc)
      if (!imageElements) {
        return
      }

      appendImages(imageElements)
      // TODO: 把這個邏輯抽出去
      // firstImagesOfRows = getFirstImagesOfRows()
    } catch (error) {
      if (error instanceof Error) {
        logger.error(`fetch ${url} failed`, error)
      }
    }
  }

  logger.log('Done')

  function isFirstPage() {
    return getElement('.ptds')?.innerText === '1'
  }

  function getImageElements(doc: Document) {
    return getElements('.gdtl', doc)
  }

  function getPageUrls() {
    const lastPageElement = getElement('.ptt td:nth-last-child(2)')
    if (!lastPageElement) {
      logger.error('Get last page element failed')
      return
    }

    const pageCount = Number(lastPageElement.innerText)
    if (pageCount === 1) {
      return []
    }

    const { href } = window.location
    return Array(pageCount - 1)
      .fill('')
      .map((_, index) => `${href}?p=${index + 1}`)
  }

  function appendImages(elements: NodeListOf<HTMLElement>) {
    getElement('#gdt > .c')
      ?.before(...elements)
  }
}

export default fetchAllImages
