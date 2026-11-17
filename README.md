# Salon Defteri â€” Abonelikli SaaS Ã–rneÄŸi

KuafÃ¶r ve gÃ¼zellik salonlarÄ± iÃ§in **abonelik modeliyle** Ã§alÄ±ÅŸan randevu/mÃ¼ÅŸteri defteri uygulamasÄ± (demo). Ãœyelik, giriÅŸ, plan ve veritabanÄ± katmanÄ± hazÄ±rdÄ±r.

## Ã–zellikler
- E-posta/ÅŸifre ile kayÄ±t ve giriÅŸ (JWT oturum)
- Abonelik planlarÄ± ve ekip/kullanÄ±cÄ± yÃ¶netimi
- PostgreSQL + Drizzle ORM ÅŸemasÄ± ve migrasyonlar
- Next.js App Router ile panel arayÃ¼zÃ¼

## Ã‡alÄ±ÅŸtÄ±rma
```bash
pnpm install
cp .env.example .env        # DATABASE_URL, AUTH_SECRET vb. deÄŸerleri doldur
pnpm db:migrate
pnpm dev
```

## AtÄ±f
MIT lisanslÄ± [Next.js SaaS Starter](https://github.com/nextjs/saas-starter) Ã¼zerine kuruludur; lisans korunmuÅŸtur. Salon sektÃ¶rÃ¼ne uyarlama ve arayÃ¼z bana aittir.

**Teknolojiler:** Next.js Â· TypeScript Â· PostgreSQL Â· Drizzle ORM Â· Tailwind CSS