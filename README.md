# マナビ比較（manabi-hikaku）サイト雛形

Astro製の静的サイト。Cloudflare Pages（Free）へのGit連携公開を前提とする。

## ローカル確認

```bash
npm install
npm run dev      # 開発サーバー
npm run build    # dist/ に静的ファイルを生成
npm run preview  # ビルド結果の確認
```

## 記事の追加と公開フロー

1. `src/content/posts/` に Markdown を追加（frontmatter に `draft: true`）
2. Muse が下書きを作成 → ユーザーが内容を確認・承認
3. 承認後、`draft: false` に変更してコミット → main へ push で自動公開
   （公開＝GitHub書き込みのため、都度ユーザーの承認が必要）

## Cloudflare Pages のビルド設定（連携時）

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`
- Production branch: `main`

## 未設定（公開前に必要）

- 独自ドメイン manabi-hikaku.com の取得・接続（課金＝要承認）。それまでは `*.pages.dev` で確認
- 運営者情報ページの「要記入」2か所（運営者名・問い合わせ先）
- A8.net 等のメディア登録（契約＝要承認）
