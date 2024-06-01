# はじめに

Power Apps に独自開発のコンポーネントを利用できる、[Power Apps Component Framework](https://learn.microsoft.com/ja-jp/power-apps/developer/component-framework/overview?wt.mc_id=DX-MVP-5003651)というものがあります。

このリポジトリでは、私が作成した Power Apps Component Framework を公開しています。

# 免責事項

このリポジトリ内で公開されているソースコードのすべて、もしくは一部を利用したことにより発生した全ての損害について、責任を負いかねます。

予めご了承ください。

# 公開中のコンポーネント

|コンポーネント名|機能名|利用先|最新情報|
|:--|:--|:--|:--|
|[MarkdownControl](./MarkdownControl/)|Markdown 記述表示|キャンバスアプリ|Math式に対応しました。|

# コンポーネントの利用の前提条件

## 開発環境

[Power Apps Component Framework チュートリアル](https://learn.microsoft.com/ja-jp/power-apps/developer/component-framework/implementing-controls-using-typescript?wt.mc_id=DX-MVP-5003651&tabs=before#prerequisites) を参考にしてください。

## Power Apps 環境

適用先の環境設定にて、以下の設定が行われている必要があります。

- Power Platform 管理センター
  - 適用する環境
    - 機能
      - キャンバスアプリの Power Apps Component Framework
        - コードコンポーネントでキャンバスアプリの公開を許可する
          - 有効

