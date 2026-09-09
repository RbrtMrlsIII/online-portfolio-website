# ORUCAVEAM — Execution Discipline (Portfolio)

Adapted from TeamAi `skills/execution/orucaveam/SKILL.md`.

## Definition

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

## Authority order (this project)

1. `product-law.md` — product authority
2. `plan.md` — chronological plan / gates
3. `ORUCAVEAM.md` (this file) — execution discipline
4. `skill.md` — continuity + root/component rules
5. `design-tokens.md` + `styles.css` `:root` — visual roots
6. `validation.md` + `endorsement.md` — evidence + continuation

## Rule

An implementation is **not complete** because code was pushed.

It is complete only when:

`Product Law → Plan item → ORUCAVEAM → implementation → verification evidence → endorsement`

is traceable.

## How every meaningful slice must run

```text
O  One clear objective (one user request / one plan gate)
R  Out of scope + boundaries
U  Explicit user approval / standing instruction
C  Product Law, plan, tokens, existing code
A  Smallest compliant change
V  Real verification (browser / file presence / token values)
E  Minimal files and tools
A  Audit: what changed, what did not, limitations
M  No speculative second systems
```

## Verification minimum for UI changes

- Confirm the target files on `main` contain the expected tokens/classes
- Confirm video asset exists and is referenced
- Confirm settings / header / mobile nav markup exists
- Record PASS / PARTIAL / FAIL in `validation.md`
- Do not claim visual PASS without browser evidence when environment allows

## Anti-patterns

- Pushing code and calling it done without verification
- Treating chat memory as authority over repo documents
- Skipping Product Law updates when the user introduces a new product idea
- Creating a second execution framework alongside ORUCAVEAM
