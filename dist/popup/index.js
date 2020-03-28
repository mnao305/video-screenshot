"use strict";
/**
 * もろもろのイベントハンドラー
 */
var eventHandler = function () {
    var _a;
    // 撮影ボタンのイベント
    (_a = document.getElementById('screenshot-button')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        // TODO: browser actionでは直接ページの内容にアクセスできないっぽいので、Event Pageを使ってイベントを作る
    });
};
/**
 * メイン
 */
var main = function () {
    eventHandler();
};
main();
