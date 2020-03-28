/**
 * もろもろのイベントハンドラー
 */
const eventHandler = (): void => {
  // 撮影ボタンのイベント
  document.getElementById('screenshot-button')?.addEventListener('click', () => {
    // TODO: browser actionでは直接ページの内容にアクセスできないっぽいので、Event Pageを使ってイベントを作る
  })
}

/**
 * メイン
 */
const main = (): void => {
  eventHandler()
}

main()
