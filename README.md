# 🚀 AstroWind

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/lighthouse-score.png" align="right"
     alt="AstroWind Lighthouse Score" width="100" height="358">

🌟 _Most *starred* & *forked* Astro theme in 2022 & 2023_. 🌟

**AstroWind** is a free and open-source template to make your website using **[Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/)**. Ready to start a new project and designed taking into account web best practices.

- ✅ **Production-ready** scores in **PageSpeed Insights** reports.
- ✅ Integration with **Tailwind CSS** supporting **Dark mode** and **_RTL_**.
- ✅ **Fast and SEO friendly blog** with automatic **RSS feed**, **MDX** support, **Categories & Tags**, **Social Share**, ...
- ✅ **Image Optimization** (using new **Astro Assets** and **Unpic** for Universal image CDN).
- ✅ Generation of **project sitemap** based on your routes.
- ✅ **Open Graph tags** for social media sharing.
- ✅ **Analytics** built-in Google Analytics, and Splitbee integration.

<br>

<img src="https://raw.githubusercontent.com/onwidget/.github/main/resources/astrowind/screenshot-astrowind-1.png" alt="AstroWind Theme Screenshot">

[![onWidget](https://custom-icon-badges.demolab.com/badge/made%20by%20-onWidget-556bf2?style=flat-square&logo=onwidget&logoColor=white&labelColor=101827)](https://onwidget.com)
[![License](https://img.shields.io/github/license/onwidget/astrowind?style=flat-square&color=dddddd&labelColor=000000)](https://github.com/onwidget/astrowind/blob/main/LICENSE.md)
[![Maintained](https://img.shields.io/badge/maintained%3F-yes-brightgreen.svg?style=flat-square)](https://github.com/onwidget)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat-square)](https://github.com/onwidget/astrowind#contributing)
[![Known Vulnerabilities](https://snyk.io/test/github/onwidget/astrowind/badge.svg?style=flat-square)](https://snyk.io/test/github/onwidget/astrowind)
[![Stars](https://img.shields.io/github/stars/onwidget/astrowind.svg?style=social&label=stars&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)
[![Forks](https://img.shields.io/github/forks/onwidget/astrowind.svg?style=social&label=forks&maxAge=86400&color=ff69b4)](https://github.com/onwidget/astrowind)

<br>

<details open>
<summary>Table of Contents</summary>

- [🚀 AstroWind](#-astrowind)
  - [Demo](#demo)
  - [🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!](#-upcoming-astrowind-20--we-need-your-vision)
  - [Getting started](#getting-started)
    - [Project structure](#project-structure)
    - [Commands](#commands)
    - [Configuration](#configuration)
      - [Customize Design](#customize-design)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
      - [Deploy to Netlify](#deploy-to-netlify)
      - [Deploy to Vercel](#deploy-to-vercel)
  - [Frequently Asked Questions](#frequently-asked-questions)
  - [Related projects](#related-projects)
  - [Contributing](#contributing)
  - [Acknowledgements](#acknowledgements)
  - [License](#license)
  - [MEMO](#memo)
  - [ライブラリー](#ライブラリー)
  - [静的サイトを開発段階で表示する](#静的サイトを開発段階で表示する)
  - [URL](#url)

</details>

<br>

## Demo

📌 [https://astrowind.vercel.app/](https://astrowind.vercel.app/)

<br>

## 🔔 Upcoming: AstroWind 2.0 – We Need Your Vision!

We're embarking on an exciting journey with **AstroWind 2.0**, and we want you to be a part of it! We're currently taking the first steps in developing this new version and your insights are invaluable. Join the discussion and share your feedback, ideas, and suggestions to help shape the future of **AstroWind**. Let's make **AstroWind 2.0** even better, together!

[Share Your Feedback in Our Discussion!](https://github.com/onwidget/astrowind/discussions/392)

<br>

## Getting started

**AstroWind** tries to give you quick access to creating a website using [Astro 4.0](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). It's a free theme which focuses on simplicity, good practices and high performance.

Very little vanilla javascript is used only to provide basic functionality so that each developer decides which framework (React, Vue, Svelte, Solid JS...) to use and how to approach their goals.

In this version the template supports all the options in the `output` configuration, `static`, `hybrid` and `server`, but the blog only works with `prerender = true`. We are working on the next version and aim to make it fully compatible with SSR.

### Project structure

Inside **AstroWind** template, you'll see the following folders and files:

```
/
├── public/
│   ├── _headers
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── favicons/
│   │   ├── images/
│   │   └── styles/
│   │       └── tailwind.css
│   ├── components/
│   │   ├── blog/
│   │   ├── common/
│   │   ├── ui/
│   │   ├── widgets/
│   │   │   ├── Header.astro
│   │   │   └── ...
│   │   ├── CustomStyles.astro
│   │   ├── Favicons.astro
│   │   └── Logo.astro
│   ├── content/
│   │   ├── post/
│   │   │   ├── post-slug-1.md
│   │   │   ├── post-slug-2.mdx
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   │   ├── MarkdownLayout.astro
│   │   └── PageLayout.astro
│   ├── pages/
│   │   ├── [...blog]/
│   │   │   ├── [category]/
│   │   │   ├── [tag]/
│   │   │   ├── [...page].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── 404.astro
│   │   ├-- rss.xml.ts
│   │   └── ...
│   ├── utils/
│   ├── config.yaml
│   └── navigation.js
├── package.json
├── astro.config.ts
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

[![Edit AstroWind on CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://githubbox.com/onwidget/astrowind/tree/main) [![Open in Gitpod](https://svgshare.com/i/xdi.svg)](https://gitpod.io/?on=gitpod#https://github.com/onwidget/astrowind) [![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/onwidget/astrowind)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file `README.md`. Update `src/config.yaml` and contents. Have fun!

<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `npm install`       | Installs dependencies                              |
| `npm run dev`       | Starts local dev server at `localhost:3000`        |
| `npm run build`     | Build your production site to `./dist/`            |
| `npm run preview`   | Preview your build locally, before deploying       |
| `npm run check`     | Check your project for errors                      |
| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/onwidget/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fonwidget%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.

https://docs.astro.build/ja/recipes/i18n/

src/components/widget/Header.astro

```
{showToggleTheme && <ToggleTheme iconClass="w-6 h-6 md:w-5 md:h-5 md:inline-block" />}
      {
        showRssFeed && (
          <a
            class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
            aria-label="RSS Feed"
            href={getAsset('/rss.xml')}
          >
            <Icon name="tabler:rss" class="w-5 h-5" />
          </a>
        )
      }
      <!-- 言語切り替えボタン --> //実際の変更はまだ
      {showLanguageSwitcher && (
        <button
          class="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
          aria-label="Language Switcher"
        >
          <Icon name="tabler:language" class="w-5 h-5" />
        </button>
      )}
    </div>
```
## MEMO

frontmatter: Markdown記事のタイトルや日付、タグなどのメタデータ。
AST


Markdown → HTML 変換の全体の流れ
	1.	MarkdownをASTに変換（Remark）。
	2.	ASTを操作してデータを追加または変更（RemarkPlugin）。
	3.	ASTをHTMLに変換（Rehype）。
	4.	HTMLをさらにカスタマイズ（RehypePlugin）。
	5.	最終的にHTMLとしてレンダリング。

## ライブラリー

import sitemap from '@astrojs/sitemap';
-> sitemapを作成するライブラリーindexを作成し、その中に、index-0のような構成。
import partytown from '@astrojs/partytown';
-> web workerといわれるメインスレッドと別に、外部スクリプトのスレッドを作成し、負荷を分裂させることができる。

## 静的サイトを開発段階で表示する

npm run dev
-> 動的なサイトをホットリロードなどを用いて開発ようにサーバーを立てること。

npm run build 
-> 静的サイトを含めたプロジェクト全体のビルドファイルをdistディレクトリに提供する。

npm serve dist
-> distファイルを元にローカルサーバーを立てる。


## URL

https://engineering.meetsmore.com/entry/2023/12/01/103600
(AST)[https://ja.wikipedia.org/wiki/%E6%8A%BD%E8%B1%A1%E6%A7%8B%E6%96%87%E6%9C%A8]
[MarkDown](https://docs.astro.build/ja/guides/markdown-content/)