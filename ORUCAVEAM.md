# ORUCAVEAM — Execution Discipline (Portfolio)

Adapted from TeamAi.

```text
O — Objective
R — Restrictions
U — User Authority
C — Canonical Authority
A — Action
V — Verification
E — Efficiency
A — Audit
M — Minimalistic Efficiency / Resource Use
```

## Authority order

1. `product-law.md`
2. `plan.md`
3. `ORUCAVEAM.md`
4. `skill.md`
5. `design-tokens.md` + `styles.css` `:root`
6. `validation.md` + `endorsement.md`

## Branch policy (Option B)

- Work on `test/*` branches first
- Verify with **logs** (`window.__PORTFOLIO_VERIFY_LOG__`)
- **If log does not change when an interaction is expected → FAIL**
- Merge to `main` only after PASS / accepted PARTIAL with evidence in `validation.md`

## Verification minimum

1. Static: expected files/tokens on the test branch
2. Runtime: log events for boot, settings, scale, nav
3. User browser confirmation recorded
4. No claim of complete without log growth proof
