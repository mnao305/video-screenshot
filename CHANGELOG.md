# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.6.0](https://github.com/mnao305/Video-Screenshot/compare/v1.5.0...v1.6.0) (2023-01-29)


### Features

* 撮影ショートカットキーをブラウザの設定で設定できるように変更 ([#28](https://github.com/mnao305/Video-Screenshot/issues/28)) ([cff9f53](https://github.com/mnao305/Video-Screenshot/commit/cff9f532e69351315527411f0dbc46d5045a1593))


### Code Refactoring

* lintエラーの修正 ([c9fe654](https://github.com/mnao305/Video-Screenshot/commit/c9fe6540c51d6ff34833f443df38ddea5f2cc57f))

## [1.5.0](https://github.com/mnao305/Video-Screenshot/compare/v1.4.1...v1.5.0) (2020-11-18)


### Features

* jpg対応 ([6cafb7e](https://github.com/mnao305/Video-Screenshot/commit/6cafb7ea48893cb57609324085146352e9f0c34e)), closes [#22](https://github.com/mnao305/Video-Screenshot/issues/22)


### Code Refactoring

* オプションはフォームタグを使う感じに変更 ([4959253](https://github.com/mnao305/Video-Screenshot/commit/4959253c80e94263fa43b0e991b84449a95ddbb6))

### [1.4.1](https://github.com/mnao305/Video-Screenshot/compare/v1.4.0...v1.4.1) (2020-09-29)


### Bug Fixes

* アラートが連発してしまう問題を修正した ([ff3abc0](https://github.com/mnao305/Video-Screenshot/commit/ff3abc06b5895d56ed618e8cc96efefa3d972196)), closes [#20](https://github.com/mnao305/Video-Screenshot/issues/20)

## [1.4.0](https://github.com/mnao305/Video-Screenshot/compare/v1.3.0...v1.4.0) (2020-04-25)


### Features

* sanitize-filenameを導入してファイル名のサニタイズ処理 ([5d9b574](https://github.com/mnao305/Video-Screenshot/commit/5d9b574c8ff4e775e35fe90ca97d6a76ac1f7e6f))
* タイトルと時間はアンスコでつなげるように変更 ([d037c4e](https://github.com/mnao305/Video-Screenshot/commit/d037c4e01dd3c61803a77f43b53b5ac5d5fb60c0))


### Build System

* fix webpack config ([9aed355](https://github.com/mnao305/Video-Screenshot/commit/9aed355619897806bcc3ea1705fd72db7d08cb37))

## [1.3.0](https://github.com/mnao305/Video-Screenshot/compare/v1.2.0...v1.3.0) (2020-04-15)


### Features

* オプションからショートカットキーのオンオフできるようになった ([7c35446](https://github.com/mnao305/Video-Screenshot/commit/7c35446f70cbcd0cbb74b41bf9f729acf3a3ed22))
* ショートカットキーでスクリーンショットを撮れるようになった ([6fa82b0](https://github.com/mnao305/Video-Screenshot/commit/6fa82b02b1c15edb222e1e48c0928f6a37c9d25a)), closes [#3](https://github.com/mnao305/Video-Screenshot/issues/3)


### Code Refactoring

* 不要なログ出力の削除 ([7c14fac](https://github.com/mnao305/Video-Screenshot/commit/7c14fac1c7f23893032928949d943e20f074a002))

## [1.2.0](https://github.com/mnao305/Video-Screenshot/compare/v1.1.3...v1.2.0) (2020-04-12)


### Features

* suffixを現在時間から動画の再生位置に変更 ([555bd99](https://github.com/mnao305/Video-Screenshot/commit/555bd9977619fa682f1773acc443dfd7f92954c1)), closes [#13](https://github.com/mnao305/Video-Screenshot/issues/13)


### Code Refactoring

* 不要なログ出力の削除 ([3983624](https://github.com/mnao305/Video-Screenshot/commit/39836240dacbd4ca7d18d66d90d8c1d8b97769b9))

### [1.1.3](https://github.com/mnao305/Video-Screenshot/compare/v1.1.2...v1.1.3) (2020-04-11)


### Build System

* productionモードではソースマップを出力しない ([c944893](https://github.com/mnao305/Video-Screenshot/commit/c9448938d2e2caad863e7efefe8f63131d103efe))

### [1.1.2](https://github.com/mnao305/Video-Screenshot/compare/v1.1.1...v1.1.2) (2020-04-11)


### Others

* 権限周りを変更 ([a9f3a87](https://github.com/mnao305/Video-Screenshot/commit/a9f3a8796f65e5baf53306744021fca56082d2b6))

### [1.1.1](https://github.com/mnao305/Video-Screenshot/compare/v1.1.0...v1.1.1) (2020-04-11)


### Others

* 不要だった権限の削除 ([9d1203a](https://github.com/mnao305/Video-Screenshot/commit/9d1203a7a2ee9c497c518d4dda784bf2f1658638))

## [1.1.0](https://github.com/mnao305/Video-Screenshot/compare/v1.0.0...v1.1.0) (2020-04-11)


### Features

* 動画本来の解像度でスクショを撮れるようにする ([a009baa](https://github.com/mnao305/Video-Screenshot/commit/a009baa6621f6134c7a497e6853772ce458c9f3c)), closes [#12](https://github.com/mnao305/Video-Screenshot/issues/12)


### Others

* browser actionは今は使わないので消しておく ([ac48202](https://github.com/mnao305/Video-Screenshot/commit/ac482023ff16d8640bae0e4e01323a68d37e37ae))

## [1.0.0](https://github.com/mnao305/Video-Screenshot/compare/v0.0.1...v1.0.0) (2020-04-11)


### Others

* add versionrc ([b8d2a75](https://github.com/mnao305/Video-Screenshot/commit/b8d2a75f25c2ea5db3e04297457e1e9a7bb2795b))
* fix json format ([631e248](https://github.com/mnao305/Video-Screenshot/commit/631e248fe63a050dfd69e9673665efdd38fc1ec9))
* lint scriptを作成 ([3ac0bb7](https://github.com/mnao305/Video-Screenshot/commit/3ac0bb7835c93c419d82ad753d99922565c88c99))
* update release.yml ([2422fa8](https://github.com/mnao305/Video-Screenshot/commit/2422fa85d2397deb58638f888c8d78740dfd94f5))
* アイコンの変更 ([e9787e3](https://github.com/mnao305/Video-Screenshot/commit/e9787e3c2c2f9a21966d93e5684ded15ce6242d7))
* 説明文の修正 ([032ede1](https://github.com/mnao305/Video-Screenshot/commit/032ede135df8a992b187b0b41873f52d62bee4d2))


### Build System

* developモードとproductionモードでビルドスクリプトを分けた ([e8d07e7](https://github.com/mnao305/Video-Screenshot/commit/e8d07e75d12d3584cd6ae1378ca29e251b6eae3a))
* zip化するための機構 ([f137977](https://github.com/mnao305/Video-Screenshot/commit/f1379779095bba50132e396fb735b5731750928e)), closes [#8](https://github.com/mnao305/Video-Screenshot/issues/8)


### Docs

* add JSDoc ([20fe551](https://github.com/mnao305/Video-Screenshot/commit/20fe5511a3000d56166294ef81fb9f959d533327))


### CI

* create ci.yml ([88eff45](https://github.com/mnao305/Video-Screenshot/commit/88eff4580ff9317cd677dcb610428b81c4f5b2c8))
* create release.yml ([fa3503a](https://github.com/mnao305/Video-Screenshot/commit/fa3503ae80b7f95c005fabf5e3d94a6b7cc0da8d)), closes [#9](https://github.com/mnao305/Video-Screenshot/issues/9)

### 0.0.1 (2020-04-04)


### Features

* 右クリックからのコンテキストメニューからスクリーンショットを撮れるようになった ([9d49164](https://github.com/mnao305/Video-Screenshot/commit/9d491641def01a98e6e31bc0bf7b296b748c8ba0)), closes [#1](https://github.com/mnao305/Video-Screenshot/issues/1)
* 撮影ボタンとそれに対するイベントの追加 ([7467f57](https://github.com/mnao305/Video-Screenshot/commit/7467f575a94c08a923ba06a6226ce90ca296556d))
