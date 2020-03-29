---
date: 2020-03-29-roadmap-frontend
title: "フロントエンドちょっときついのできちんと基礎から学び直す計画を立てます"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - Frontend
tags:
    - Frontend
---

## なぜフロントエンドを学ぶのか

今、お仕事でディープラーニングや機械学習のシステム基盤やバックエンドを開発している。  色々なツールを組み合わせて利用することが多くDashboardを作成したい、というのが一番のモチベーションである。  

どうせ作るのであれば高いレベルのものを作りたいので一からきちんと学びたい。  ただこれまでにも挫折してきた経緯があるのでなぜなのか考察する。  

ゴールはDashboard（内部 or toB向け程度）をさらっと1週間以内で作れるレベルになること。 故に、プロレベルでは必要そうなSEO、sketchやワイヤフレーム、  そもそものどういうサイトにすべきかのユーザ分析とそれを踏まえた設計などは対象外とする。   

## 何がフロントエンドが難しいのか考察する

バックエンドエンジニアでこれまで全くフロントエンドをやってきていない人間が、フロントエンドを学ぶのはとてもハードルが高いと感じる。

理由を書き出す。  

1. 何からやっていいのかわからない  
  頑張ってぐぐったのでこの記事で学習方針をまとめる
1. 流行りすたりが激しいので何を信じて学べばいいかわからない  
  とりあえずいい感じの本を読み漁る
1. 本は古いものが多く流れが速いこともありどれを買えばいいかわからない  
  新しい本のみ買う
1. 公式docsを読むのはいいのだろうけど基礎力が低いのだろうか読むのがきつい
1. PWA, レスポンシブデザイン、Atomic デザイン、CSS Grid、など色々あって意味不明
1. Javascriptは古いものをやっても無駄感あるのでTypescriptから学んでもいい？
1. 何を作ろうか悩んで結局作りきらずにやめる
1. デザインセンスの問題  
  どうにもならんので既にあるフレームワーク様に頼る、その勉強をする
1. 絵を描くような地道な作業が苦手なのでスタイリングでめんどい無理っとなる

## 今のレベル

色々最新の動向などをググりまくって学びたいものをまとめた。  
主に自分が学びたいものに対しての現状のレベルを書いておく。  

- HTML/CSS  
  ごまかしごまかしかける程度、Grid layoutやflexboxなど用語レベルでなんとなく理解している。   
  ペライチのページ作れと言われると綺麗に作り上げることができない。  
- Javascript/Typescript  
  本を一冊読んだ程度で手を動かして何かを作ることはほぼしていない。  
  そもそもTypescriptから学ぶのではダメなのか？古い記法が多いのでよくわからん・・という状態。  
- npm  
  仕事で多少使っているくらい。package.jsonやらwebpack周りはざっくり理解している。  
- React.js  
  本を一冊読んだくらいでまだ積極的に手を動かしていない。  
  Gatsbyjsで本記事を書いているので中身を追ってみたくらい。  
- Redux, hooks  
  何もわからん
- jest  
  使い方もわからん
- Styled Components  
  本で出てきたので少し知っているくらい。実務には到底耐えない。  
- Bootstrap(Reactstrap)  
  使ったことない
- Material-UI  
  使ったことない
- GraphQL(Apollo)  
  美味しいの？チョコ？
- axios  
  わかりませんわ・・

## 学ぶ順序と方法

これで正しいかわからないがやっていく。  
終わった後で振り返りの記事を書く。  

自分は本を選ぶときは、
- 発売日(分野にもよるが3年以上古いときつい)
- 誤字脱字、正誤表の有無  
  誤字脱字は致し方ないが、正誤表にあまりにミスが多いと買う気をなくす。  
  そもそも正誤表がないのは誠実ではないのであまり書いたいと思わない。  
- 初級すぎるものはNG  
  オライリーのように深い内容で体系的に学べた感があるものが好き
- 古くないもの、モダンな内容が含まれているもの  
  利用ツールが古かったりするとその時点で買わないことが多い

## HTML/CSS

Grid Layout、レスポンシブデザインについて書いてあるもの。  
実際になんらかの制作を本を通して行うこと。  
BEMやらの設計については不要、Styled componentsで最終的には書きたいから。  

これが一番良さそうなのでポチった。  

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/4797398892/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4797398892&linkCode=as2&tag=littlem4649-22&linkId=259c504e5ddcf93f44d183cd79acef75"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4797398892&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=littlem4649-22" ></a><img src="//ir-jp.amazon-adsystem.com/e/ir?t=littlem4649-22&l=am2&o=9&a=4797398892" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

上記で到達できるレベル次第だが、以下もレベル高そうだが読む価値はありそう。  

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/4873117666/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873117666&linkCode=as2&tag=littlem4649-22&linkId=77bc84d84acfcbb7fc8c697725c3c2f6"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4873117666&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=littlem4649-22" ></a><img src="//ir-jp.amazon-adsystem.com/e/ir?t=littlem4649-22&l=am2&o=9&a=4873117666" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## Typescript

最低限Javasciptは理解しているので、Typescriptを学ぶ。  
大好きなオライリーから最新のTypescriptの本が出ている！！ポチった  

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/4873119049/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4873119049&linkCode=as2&tag=littlem4649-22&linkId=417af066c02cd4048472c4f34f1531d5"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4873119049&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=littlem4649-22" ></a><img src="//ir-jp.amazon-adsystem.com/e/ir?t=littlem4649-22&l=am2&o=9&a=4873119049" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

こちらのリンクはJavascriptを経ずにいきなりTypescriptを学習するためのページらしく読んでみる。  
https://future-architect.github.io/typescript-guide/

## React

こちらの本を一冊読んだので後は手を動かしていく。  
Jestやらhooks, GraphQLなどは公式docsを読みつつやりながら覚えるしかない。  
BootstrapやらMaterial UIはCSS学習進めば理解度も上がると思うので後で学習方法は考える。  

<a target="_blank"  href="https://www.amazon.co.jp/gp/product/4839960496/ref=as_li_tl?ie=UTF8&camp=247&creative=1211&creativeASIN=4839960496&linkCode=as2&tag=littlem4649-22&linkId=30fd49889615604af90e19968f3add4a"><img border="0" src="//ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=JP&ASIN=4839960496&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=littlem4649-22" ></a><img src="//ir-jp.amazon-adsystem.com/e/ir?t=littlem4649-22&l=am2&o=9&a=4839960496" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" />

## まとめ

やっていくにあたっての計画を立てた。  