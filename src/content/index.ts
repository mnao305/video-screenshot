import { browser } from 'webextension-polyfill-ts'
import { Options } from '../options'
import sanitize from 'sanitize-filename'

interface DownloadScreenshotMessage {
  text: 'download-screenshot'
  url: string
  filename: string
}

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
    const { fileType } = await browser.storage.local.get({ fileType: 'png' }) as Options
    const message: DownloadScreenshotMessage = {
      text: 'download-screenshot',
      url: fileType === 'png' ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg'),
      filename: sanitize(`${document.title}_${Math.round(video.currentTime * 10)}.${fileType}`)
    }
    try {
      // 背景スクリプト側にダウンロード処理を依頼する
      await browser.runtime.sendMessage(message)
    } catch (error) {
      console.error(error)
      alert('Unable to save.')
    }
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
