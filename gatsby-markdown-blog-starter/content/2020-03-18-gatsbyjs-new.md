---
date: 2020-03-18
title: "Gatsbyjsでblogをさくっと構築する"
cover: "https://unsplash.it/1152/300/?random?BirchintheRoses"
categories: 
    - Gatsby
tags:
    - gatsbyjs
---

## 導入手順

https://www.gatsbyjs.org/docs/quick-start/

これだけの手順で構築出来ちゃった

```bash
npm install -g gatsby-cli
gatsby new gatsby-starter-markdown https://github.com/cvluca/gatsby-starter-markdown
cd gatsby-starter-markdown
npm install
npm audit fix
gatsby build
gatsby serve
```

### タイトルとか設定を変更する

```bash
vi data/SiteConfig.js
```