import { browser } from 'webextension-polyfill-ts'

export interface Options {
  fileType: 'png' | 'jpg'
}

const optionsForm = document.getElementById('options') as HTMLFormElement

// 初期読み込み時に設定済みのオプション内容を反映させる
;(async function () {
  const option = await browser.storage.local.get({ fileType: 'png' }) as Options
  optionsForm['file-type'].value = option.fileType
}())

// ショートカットキーでスクリーンショットを撮るかのオプション
optionsForm.addEventListener('change', () => {
  browser.storage.local.set(
    {
      fileType: optionsForm['file-type'].value
    }
  ).catch(e => {
    console.error(e)
  })
})
