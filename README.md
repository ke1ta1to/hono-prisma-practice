# hono-prisma-practice

## 開発環境起動

```bash
# 1. 依存関係インストール
pnpm install

# 2. PostgreSQLサーバー起動
docker compose up -d

# 3. Prismaマイグレーション実行
npx prisma migrate dev

# 4. 開発サーバー起動
pnpm dev
```
