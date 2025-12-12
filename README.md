Next-Gen Security Intelligence for TypeScript, React, Next.js, Python & Full Project Folders

SentinelAI is an AI-driven cybersecurity engine that scans entire project folders, individual files, or code snippets to detect vulnerabilities, insecure patterns, misconfigurations, and risky dependencies.
It is designed for developers, CTOs, startups, and security teams who need continuous, automated security insights without running traditional heavyweight security tools.

Built for scale. Built for accuracy. Built for speed.

🔥 Key Features

AI Vulnerability Scanner (Core Engine)
Scans TypeScript, Next.js, React, Python & more using a hybrid rule-based + LLM security engine.

Full Project Folder Upload (Premium)
Drag-and-drop a complete codebase; SentinelAI recursively analyzes every file, dependency, and config.

Local Static Analysis + AI Reasoning
Combines static security rules (AST parsing) with powerful security-trained LLM judging.

OWASP, MITRE, SAST-Level Detection
Detects top vulnerabilities: XSS, SSRF, RCE, CSRF, insecure auth, exposed keys, misconfigured env, API leaks, and more.

Project Security Score
Generates a 0–100 score and a prioritized list of fixes.

Instant Fix Suggestions
Auto-generated patches, code rewrites, and best-practice recommendations.

Team/Org Accounts
Shared dashboards, RBAC controls, audit logs.

🏗️ Tech Stack
Frontend

Next.js 14 (App Router)

TypeScript

ShadCN UI + Tailwind

Clerk (Auth, Sessions, RBAC)

UploadThing / Supabase Storage (Folder & file handling)

Backend

Supabase (Postgres + Storage + Auth Webhooks)

Edge Functions for SAST preprocessing

AI Runtime (OpenAI o1/o3 + security-fine-tuned models)

Custom Rule-Based Scanner (AST parser for JS/TS/Python)

Infrastructure & Reliability

Sentry for monitoring

Vercel for hosting

Supabase RLS for org-level safety

Background Workers for large folder analysis

🚀 Quick Start
1. Clone the repo
git clone https://github.com/sentinelai/security-scanner.git
cd sentinelai

2. Install dependencies
npm install

3. Create .env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=...
CLERK_SECRET_KEY=...
SUPABASE_URL=...
SUPABASE_SERVICE_ROLE=...
OPENAI_API_KEY=...
SENTRY_DSN=...

4. Start dev server
npm run dev

🎯 How SentinelAI Works
1 — User uploads code snippet OR full project folder

→ Indexed by file type
→ Static analysis preprocessor reads AST

2 — Vulnerability Rules Engine runs

→ Pattern-based detections
→ Dependency risk scoring
→ Configuration scanning

3 — AI Security Judge analyzes findings

→ Ranks severity
→ Explains rationale
→ Suggests fixes

4 — Report Generated

Critical issues

Patches

Code references

Project Risk Score

💰 Pricing Model
Free Tier

10 scans/month

Snippet/file scans only

Basic vulnerability detection

Pro Tier

Unlimited scans

Full folder uploads

Advanced LLM engine

PDF reports & API access

Enterprise

SOC2-ready auditing

Multi-user organizations

Custom fine-tuned private security models

🛠️ Development Roadmap

 Private model fine-tuning on real-world vuln datasets

 CI/CD integration plugin

 VSCode extension

 Automated PR patch generation

 Multi-language expansion (Go, Rust, Java)

 Red Team / Pentest Simulation Mode

🤝 Contributing

Contributions are welcome! Create an issue or open a PR.

🛡️ License

MIT License — free for commercial and private use.

🌐 Official Links

Landing Page: Coming soon
Docs: Coming soon
