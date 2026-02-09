import { browser } from 'webextension-polyfill-ts'
import { Options } from '../options'

interface DownloadScreenshotMessage {
  text: 'download-screenshot'
  url: string
  filename: string
}

type DownloadDirectoryOption = Pick<Options, 'downloadDirectory'>

// ダウンロード用メッセージかどうかを判定する
const isDownloadScreenshotMessage = (message: unknown): message is DownloadScreenshotMessage => {
  if (typeof message !== 'object' || message == null) return false
  const candidate = message as Record<string, unknown>
  return candidate.text === 'download-screenshot' &&
    typeof candidate.url === 'string' &&
    typeof candidate.filename === 'string'
}

const normalizeDownloadDirectory = (downloadDirectory: string): string => {
  return downloadDirectory
    .replace(/\\/g, '/')
    .split('/')
    .map(segment => segment.trim())
    .filter(segment => segment !== '' && segment !== '.' && segment !== '..')
    .join('/')
}

const buildDownloadFilename = (downloadDirectory: string, filename: string): string => {
  const normalizedDownloadDirectory = normalizeDownloadDirectory(downloadDirectory)
  if (normalizedDownloadDirectory === '') return filename
  return `${normalizedDownloadDirectory}/${filename}`
}

// 拡張機能インストール時にコンテキストメニューを設定する
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    type: 'normal',
    id: 'screenshot',
    title: 'Video screenshot'
  })
})

// コンテキストメニューがクリックされたら
browser.contextMenus.onClicked.addListener((info, tab) => {
  if (tab == null || tab.id == null) return
  // コンテンツスクリプト側にメッセージを送信
  browser.tabs.sendMessage(tab.id, { text: 'screenshot', tabID: tab.id }).then(v => {
  }).catch(err => { console.error(err) })
})

// ショートカットキーがクリックされたら
browser.commands.onCommand.addListener((command) => {
  browser.tabs.query({ currentWindow: true, active: true }).then(tabs => {
    const tab = tabs[0]
    if (command === 'shoot' && tab.id != null) {
      // コンテンツスクリプト側にメッセージを送信
      browser.tabs.sendMessage(tab.id, { text: 'screenshot', tabID: tab.id }).then(v => {
      }).catch(err => { console.error(err) })
    }
  }).catch(err => { console.error(err) })
})

// コンテンツスクリプトから受け取った画像を保存する
browser.runtime.onMessage.addListener((message) => {
  if (!isDownloadScreenshotMessage(message)) return
  const saveScreenshot = async (): Promise<void> => {
    const option = await browser.storage.local.get({ downloadDirectory: '' }) as DownloadDirectoryOption
    const { downloadDirectory } = option
    await browser.downloads.download({
      url: message.url,
      filename: buildDownloadFilename(downloadDirectory, message.filename),
      saveAs: false
    })
  }
  saveScreenshot().catch(err => {
    console.error(err)
  })
})
