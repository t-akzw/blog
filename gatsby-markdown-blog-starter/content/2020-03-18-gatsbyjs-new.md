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

# bioを変更する
vi ./src/components/Bio.js

# aboutを変更する
vi ./src/components/About.js

# contactを変更する
vi ./src/pages/contact.js
```

### github pagesへのデプロイ

```bash
npm install gh-pages --save-dev
npm audit fix

# パスを修正しておく
vi data/SiteConfig.js
# pathPrefix: "/blog"

vi package.json
# {
#   "scripts": {
#     "deploy": "gatsby build --prefix-paths && gh-pages -d public -b gh-pages"
#   }
# }

npm run deploy
```

### 文字化け

URLに日本語が入ってしまい、URLをコピペして記事に貼ってもうまくURLが表示できない。

**2020/03/20 追記**

titleを元にslugというパスを生成するように作られていたので、node idをパスにする修正をした。  
titleでパス生成しちゃうと同じtitleにしたときに動かない気が。。

```javascript
//vi gatsby-node.js
    if (
      Object.prototype.hasOwnProperty.call(node, "frontmatter") &&
      Object.prototype.hasOwnProperty.call(node.frontmatter, "title")
    ) {
      slug = `/${node.id}`; //ここを修正した
    } else if (parsedFilePath.name !== "index" && parsedFilePath.dir !== "") {
      slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
    } else if (parsedFilePath.dir === "") {
      slug = `/${parsedFilePath.name}/`;
    } else {
      slug = `/${parsedFilePath.dir}/`;
    }
```

## graphiql便利！！

ちょっと特殊な記法だけど、jsonで出すときの形と同じなので書きやすい。  
そして、Explorerがあるので見るのが楽ちん！

![hoge](https://lh3.googleusercontent.com/wlL4GdXiGpcIfviQ9rsB-HxuNMYVL-gywzS2WlZNOk-UcKyiJT71GQz89OoypNLTue1XP9XmxTmGM346lH8qhGpuqB3Cfdj8DYvqzrLkAw1xOY8SefF242z4B1bTaK94LnBAGFS30Pv6n64UabsBDAG7GqyFPfbCpExmxXnPU6YNi46-fjI1SaSBKyQ_Fraas9_xPZlOXsx_UciBVDDLhx3A9vF_allhBljb-rvua3bxcOzBsAk3J3D8mQcewkJls4vA2UIsNR8dtXIMjAbJ51yv30DnIHT15kAdtLV0MmzaLfUMtkBYffjWRFzhGqNlzABeIozVlT7qyp4ctq4Pwt61MV0DJx8gT2rIxUDOIX48n-esuMahitufHZ2wyZrsOmTbPR0_aTrny3QlPOVIiN__xfTUKpOIYF_T_HK1pPwVYrtkw6mvMYd7DpIiPE3CeSQl904Anc6c_p_fn3TMCZNNgmshyDiJUaTV_MQRWk3yadgU8CCcWGDMw9sUrvcUfK3eqGe1PQgDlVmIsru87R9fX-Dr46MGBaU8g_uHpUKKulxNBp8JZbEO7h47byFRgeiHC-IfUmPEZUnrhtPehsnMmVoSzjWFFmqlrPbmjVZpBXyESeUOYQoFR_7h4dOgb_q_oj540Y77vpM1BOWUacLppH8HtkVv6BZ40C4LcZde-YEn1WKsOSFlHeqyxABmU2LuJBhBPWZ4VIg2GhJi238PLf3NS0laXHOdV91oXa_Bm4hSQNfP2A=w4186-h2458-no)