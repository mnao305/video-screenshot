import { browser } from 'webextension-polyfill-ts'

export interface Options {
  useShortcut: boolean
}

const shortcutOption = document.getElementById('shortcut') as HTMLInputElement

// 初期読み込み時に設定済みのオプション内容を反映させる
;(async function () {
  const option = await browser.storage.local.get({ useShortcut: true }) as Options
  shortcutOption.checked = option.useShortcut
}())

// ショートカットキーでスクリーンショットを撮るかのオプション
shortcutOption?.addEventListener('change', (e) => {
  browser.storage.local.set(
    {
      useShortcut: (e.target as HTMLInputElement).checked
    }
  ).catch(e => {
    console.error(e)
  })
})
