import { browser } from 'webextension-polyfill-ts'

export interface Options {
  fileType: 'png' | 'jpg'
  downloadDirectory: string
}

const optionsForm = document.getElementById('options') as HTMLFormElement
const downloadDirectoryInput = document.getElementById('download-directory') as HTMLInputElement

// 初期読み込み時に設定済みのオプション内容を反映させる
;(async function () {
  const option = await browser.storage.local.get({ fileType: 'png', downloadDirectory: '' }) as Options
  optionsForm['file-type'].value = option.fileType
  downloadDirectoryInput.value = option.downloadDirectory
}())

// オプション変更時に設定を保存する
optionsForm.addEventListener('change', () => {
  browser.storage.local.set(
    {
      fileType: optionsForm['file-type'].value,
      downloadDirectory: downloadDirectoryInput.value
    }
  ).catch(e => {
    console.error(e)
  })
})
