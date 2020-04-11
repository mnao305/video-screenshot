import { browser } from 'webextension-polyfill-ts'

const screenshot = (): void => {
  console.log(document)
  const video = document.querySelector('video')
  console.log(video)
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
    image.src = canvas.toDataURL('image/png')
    const a = document.createElement('a')
    a.download = `${document.title}\\${new Date().toISOString()}.png`
    a.target = '_blank'
    a.href = image.src
    a.click()
  } else {
    alert('There is no video tag.')
  }
}

// メッセージ受信でスクリーンショットを撮る
browser.runtime.onMessage.addListener((message, sender) => {
  if (message.text === 'screenshot') {
    screenshot()
  }
})
