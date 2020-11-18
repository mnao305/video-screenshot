import { browser } from 'webextension-polyfill-ts'
import { Options } from '../options'
import sanitize from 'sanitize-filename'

let keyQFlg = false
let keyCtrlFlg = false

const screenshot = async (): Promise<void> => {
  const video = document.querySelector('video')
  if (video != null) {
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    const context = canvas.getContext('2d')
    if (context == null) {
      alert('Unable to save.')
      keyQFlg = false
      keyCtrlFlg = false
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
    keyQFlg = false
    keyCtrlFlg = false
  }
}

// メッセージ受信でスクリーンショットを撮る
browser.runtime.onMessage.addListener(async (message, sender) => {
  if (message.text === 'screenshot') {
    await screenshot()
  }
})

// ショートカットキーでスクリーンショットを撮る
document.onkeydown = async (e) => {
  // Ctrl key
  if (!keyCtrlFlg && e.key === 'Control') {
    keyCtrlFlg = true
  }
  // Q key
  if (!keyQFlg && e.key === 'q') {
    keyQFlg = true
  }

  if (keyQFlg && keyCtrlFlg) {
    const { useShortcut } = await browser.storage.local.get({ useShortcut: true }) as Options
    if (!useShortcut) return
    await screenshot()
  }
}
document.onkeyup = (e) => {
  // Ctrl key
  if (keyCtrlFlg && e.key === 'Control') {
    keyCtrlFlg = false
  }
  // Q key
  if (keyQFlg && e.key === 'q') {
    keyQFlg = false
  }
}
