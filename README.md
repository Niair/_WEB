# Professional Git Commits — How It's Actually Done at Work

## 1. The Conventional Commits Standard

This is what most companies use. Every commit follows this format:

```
<type>(<scope>): <short summary>

<body - optional but important>

<footer - optional>
```

**Types you'll use daily:**

| Type | When to use |
|------|-------------|
| `feat` | Adding a new feature |
| `fix` | Fixing a bug |
| `refactor` | Restructuring code, no behavior change |
| `chore` | Config, deps, tooling (no production code) |
| `docs` | Documentation only |
| `test` | Adding/fixing tests |
| `perf` | Performance improvement |
| `style` | Formatting, whitespace (no logic change) |

**Real examples:**
```bash
feat(auth): add Google OAuth login

fix(cart): prevent duplicate item on fast double-click

chore(deps): upgrade axios from 1.4 to 1.7

refactor(api): extract user validation into separate service
```

---

## 2. The Golden Rule — Atomic Commits

One commit = one logical change. This is the most important habit.

```bash
# ❌ BAD — a commit that does too much
git commit -m "fixed stuff and added feature and updated deps"

# ✅ GOOD — each commit tells one story
git commit -m "fix(login): handle expired JWT token gracefully"
git commit -m "feat(login): add remember-me checkbox"
git commit -m "chore(deps): bump jsonwebtoken to 9.0"
```

**Why this matters at work:** When something breaks in production, your team uses `git bisect` or `git log` to find *exactly which commit* caused it. If your commits are atomic, they can pinpoint and revert just that one change safely.

---

## 3. Writing a Body — The "Why", Not the "What"

The summary line says *what*. The body explains *why*. The code already shows what changed — the commit message should explain the thinking.

```bash
git commit
# This opens your editor (usually vim or nano). Write:
```

```
fix(payment): retry failed Stripe charges up to 3 times

Previously, a single network timeout would silently drop the charge,
causing orders to appear successful on the frontend but never process.

Added exponential backoff retry logic (1s, 2s, 4s) before failing.
Stripe's idempotency key is reused per attempt to avoid double charges.

Closes #412
```

Now anyone reading this 6 months later knows *exactly* why it was written.

---

## 4. Referencing Issues & Pull Requests

At companies, every commit is tied to a ticket (Jira, GitHub Issues, Linear, etc.):

```bash
# GitHub automatically closes the issue when this merges to main
git commit -m "feat(dashboard): add export to CSV button

Closes #89"

# Just referencing without closing
git commit -m "fix(search): normalize query before hitting API

Related to #102"
```

This is how your team traces *which business requirement* each commit addresses.

---

## 5. Co-Authors — One Account, Multiple Authors

This is how pair programming or AI-assisted commits are credited:

```bash
git commit -m "feat(onboarding): redesign welcome flow

Co-authored-by: Priya Sharma <priya@company.com>
Co-authored-by: Rahul Gupta <rahul@company.com>"
```

GitHub reads the `Co-authored-by` trailer and shows **all authors' avatars** on that commit. This is the standard — even GitHub Copilot suggests it. You can have as many co-authors as needed.

**Setting this up as a template** so you don't type it every time:
```bash
# Create a commit template file
echo "
# Co-authored-by: Name <email>" > ~/.gitmessage

# Tell git to use it
git config --global commit.template ~/.gitmessage
```

---

## 6. Configuring Your Identity for Work

Since you have a personal account but will work on a company repo, set **per-repo** identity so your work commits don't mix with personal ones:

```bash
# Inside your company project folder only:
git config user.name "Your Name"
git config user.email "yourname@company.com"

# Your global (personal) config stays untouched
git config --global user.name "YourPersonalName"
git config --global user.email "personal@gmail.com"
```

Git uses the local config first, global as fallback.

---

## 7. The Commit Workflow Professionals Actually Use

```bash
# 1. See what changed
git status
git diff

# 2. Stage ONLY what belongs in this commit (not everything blindly)
git add src/auth/login.js       # specific file
git add -p                      # interactive — pick specific lines/hunks

# 3. Commit with a message
git commit -m "fix(auth): redirect to /dashboard after login instead of /"

# 4. Before pushing, pull and rebase to keep history clean
git pull --rebase origin main

# 5. Push
git push origin feature/your-branch-name
```

**Never push directly to `main`** at a company. Always work on a feature branch and open a Pull Request.

---

## 8. Reading Commits — Figuring Out What Not to Touch

```bash
# See who last changed each line of a file (and which commit)
git blame src/payment/stripe.js

# See full history of one specific file
git log --follow -p src/payment/stripe.js

# Search commits by message keyword
git log --grep="payment" --oneline

# See what a specific commit changed
git show a3f92bc
```

If `git blame` shows a commit with a message like `fix(payment): critical idempotency fix — do not revert`, that's your signal to be careful around that code.

---

## Quick Reference Card

| Goal | Command |
|------|---------|
| Stage specific file | `git add <file>` |
| Stage partial changes | `git add -p` |
| Commit with message | `git commit -m "type(scope): summary"` |
| Amend last commit | `git commit --amend` |
| See commit history | `git log --oneline --graph` |
| Who wrote this line | `git blame <file>` |
| What did this commit do | `git show <hash>` |
| Undo last commit (keep changes) | `git reset --soft HEAD~1` |