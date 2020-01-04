# fav-music

[Fav Music](https://fav-music.tokyo/) は、とある東京在住の Web エンジニア（＝[僕](https://fav-music.tokyo/author.html)）が [Apple Music](https://www.apple.com/jp/apple-music/) で配信されている 5,000 万曲の中から超個人的嗜好で厳選したお気に入りの音楽をプレイリスト形式で紹介していく音楽ブログです。

このブログは、[僕](https://fav-music.tokyo/author.html) のライフワークである「ぼくのかんがえたさいきょうのプレイリスト」作りの成果をメインコンテンツとして、`AWS`, `WordPress`, `Static Site Generator`, `AMP`, `PWA`, `Google AdSense & Analytics` といった現在主流の Web 技術をキャッチアップしていく目的で構築・運用しています。

[Fav Music](https://fav-music.tokyo/) は当初 `WordPress` でサイトを構築しましたが、現在は [Jekyll](https://github.com/jekyll/jekyll) という [Ruby](https://github.com/ruby/ruby) 製の静的サイトジェネレーターを使用して全てのコンテンツを生成しており、このリポジトリでその全てを管理しています。

まだ手付かずのタスクやとりあえずリリース優先で雑に書いてしまったコード、変な言い回しや誤字脱字など至らない点は多々あると思いますが、[Jekyll](https://github.com/jekyll/jekyll) を使用して構築した静的サイトの Real World Example としてその全てを公開しようと思います。

このリポジトリが、これから [Jekyll](https://github.com/jekyll/jekyll) を使用して静的サイトを構築しようと思っている誰かの助けになれば幸いです :)

## 開発環境

以下は 2020 年 1 月現在の僕の MacBook の開発環境です。
- macOS Catalina 10.15.2
- Git 2.21.0 (Apple Git-122.2)
- Homebrew 2.2.2
- Rbenv 1.1.2
- Ruby 2.6.5

**補足**
- `macOS` のバージョンは多分 `Mavericks` とか `Yosemite` 以降なら大丈夫だと思います
- `Linux` 系はよっぽど古くなければほぼほぼ大丈夫じゃないですかね
- `Windows` は最近触ってないので全くわかりません💦
- `Git` はいつも `xcode select --install` で入れてます
- `Rbenv` は `Homebrew` で管理するのが楽だと思います
- `Ruby` は 2.4 以降なら大丈夫だと思いますが、`Rbenv` で最新安定版を使うのがオススメです

## 作業手順

**TL;DR**
```shell
% mkdir ~/workspace
% cd ~/workspace
% git clone https://github.com/hysh8392/fav-music.git
% cd ~/workspace/fav-music
% bundle install --path vendor/bundle
% bundle exec jekyll serve --incremental
```
👉ビルドが終わったらブラウザで http://127.0.0.1:4000 を開く

**補足**
- `~/workspace` は適当なフォルダに読み替えていただければと思います
- `bundle install` の `--path` は `macOS` 環境だと省略可能です（`.bundle/config` を読んでくれるので）
- `jekyll serve` の `--incremental` はコンテンツ編集時は絶対つけた方が良いです（全体のビルドにめちゃくちゃ時間がかかるので💦）
- ビルドするだけなら `bundle exec jekyll build` で OK です
- 本番サイトへのデプロイは👆で生成された `build` フォルダの中身を全部 [Amazon S3](https://aws.amazon.com/jp/s3/) にぶっ込むだけです笑

## 所感

[Jekyll](https://github.com/jekyll/jekyll) は [Liquid](https://github.com/Shopify/liquid) テンプレートエンジンの使い所が [Rails](https://rubyonrails.org/) エンジニアにとっては若干足枷になる（こうやって書けば動くだろうと思っても動かないことが多い）印象がありますが、静的サイトジェネレーターの老舗だし、なんと言っても [Front Matter](https://jekyllrb.com/docs/front-matter/) を標準化した功績は大きいと思うので、基本的な技術として抑えておきたいと思ってます。

静的サイトジェネレーターは [Jekyll](https://github.com/jekyll/jekyll) の他にも

- [Hugo](https://gohugo.io/) ([Go](https://golang.org/) 製)
- [Hexo](https://hexo.io/) ([Node.js](https://nodejs.org/) 製)
- [Gatsby](https://www.gatsbyjs.org/) ([React.js](https://reactjs.org/) 製)
- [VuePress](https://vuepress.vuejs.org/) ([Vue.js](https://vuejs.org/) 製)

あたりが良さそうなので、[Jekyll](https://github.com/jekyll/jekyll) をある程度極めたら次に試して見ようと思います :)
