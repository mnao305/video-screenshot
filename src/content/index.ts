import { browser } from 'webextension-polyfill-ts'
import { Options } from '../options'
import sanitize from 'sanitize-filename'

const screenshot = async (): Promise<void> => {
  const video = document.querySelector('video')
  if (video != null) {
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    if (context == null) {
      alert('Unable to save.')
      return
    }
    context.drawImage(video, 0, 0, canvas.width, canvas.height)
    const image = new Image()
    const { fileType } = await browser.storage.local.get({ fileType: 'png' }) as Options
    image.src = fileType === 'png' ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg')
    const a = document.createElement('a')
    a.download = sanitize(`${document.title}_${Math.round(video.currentTime * 10)}.${fileType}`)
    a.target = '_blank'
    a.href = image.src
    a.click()
  } else {
    alert('There is no video tag.')
  }
}

// メッセージ受信でスクリーンショットを撮る
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.text === 'screenshot') {
    await screenshot()
  }
})
