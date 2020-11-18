import { browser } from 'webextension-polyfill-ts'

export interface Options {
  useShortcut: boolean
  fileType: 'png' | 'jpg'
}

const optionsForm = document.getElementById('options') as HTMLFormElement

// 初期読み込み時に設定済みのオプション内容を反映させる
;(async function () {
  const option = await browser.storage.local.get({ useShortcut: true, fileType: 'png' }) as Options
  optionsForm.shortcut.checked = option.useShortcut
  optionsForm['file-type'].value = option.fileType
}())

// ショートカットキーでスクリーンショットを撮るかのオプション
optionsForm.addEventListener('change', () => {
  browser.storage.local.set(
    {
      useShortcut: optionsForm.shortcut.checked,
      fileType: optionsForm['file-type'].value
    }
  ).catch(e => {
    console.error(e)
  })
})
