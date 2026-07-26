---
title: "Astro × Gemini Notebook で実現するナレッジ管理パイプライン"
pubDate: "2026-07-25"
category: "Project"
tags: ["Astro", "AI", "Portfolio"]
summary: "Gemini Notebookで自動生成した思考ログをMarkdownとして配置し、ポートフォリオへ自動反映させるパイプラインのファーストステップ。"
---

## 概要

日々の研究活動やプロトタイピングの記録、読書メモなどを「努力ゼロ」でアウトプットするための仕組みを構築中。
本仕組みの実現によりHTMLを書かずとも、mdファイルを配置するのみで、Notesに自動反映される。

### 実装のポイント
* **Content Collections** による型安全な記事管理
* AIが抽出した `summary` を一覧カードに表示
* タグやカテゴリによる視認性の向上

今後は、この構成をベースに思考の変遷を記録していく予定。