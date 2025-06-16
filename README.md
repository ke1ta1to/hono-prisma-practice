# hono-prisma-practice

## 開発環境起動

```bash
# 1. 依存関係インストール
pnpm install

# 2. 環境変数ファイルをコピー
cp .env.example .env

# 3. PostgreSQLサーバー起動
docker compose up -d

# 4. Prismaマイグレーション実行
npx prisma migrate dev

# 5. 開発サーバー起動
pnpm dev
```
