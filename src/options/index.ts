import { browser } from 'webextension-polyfill-ts'

export interface Options {
  useShortcut: boolean
}

const optionsForm = document.getElementById('options') as HTMLFormElement

// 初期読み込み時に設定済みのオプション内容を反映させる
;(async function () {
  const option = await browser.storage.local.get({ useShortcut: true }) as Options
  optionsForm.shortcut.checked = option.useShortcut
}())

// ショートカットキーでスクリーンショットを撮るかのオプション
optionsForm.addEventListener('change', () => {
  browser.storage.local.set(
    {
      useShortcut: optionsForm.shortcut.checked
    }
  ).catch(e => {
    console.error(e)
  })
})
