import { browser } from 'webextension-polyfill-ts'

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
