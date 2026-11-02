# Accessibility standard and pre-launch checklist

Target: WCAG 2.2 Level AA. Built to this standard by Claude, then verified by a human before launch. The site is "as accessible as possible"; no build is promised to be error-free.

## Built in (Claude checks these while building)

- [ ] Text contrast at least 4.5:1 (3:1 for large text), in light and dark mode. Ratios checked by script, not by eye.
- [ ] Form field borders, focus outlines, and other meaningful non-text elements at least 3:1 against their background.
- [ ] `lang` set on every page; one `<h1>` per page; headings in order with no skipped levels.
- [ ] Skip link to main content; header, nav, main, and footer landmarks.
- [ ] Visible keyboard focus on every link, button, and field.
- [ ] Every form field has a visible label; required fields say "(required)" in text and use `required` / `aria-required`.
- [ ] Form errors are described in text, linked to the field (`aria-invalid`, `aria-describedby`), announced by a live region, and focus moves to the first problem. Color is never the only signal.
- [ ] Decorative images hidden from screen readers (`aria-hidden` or empty `alt`); meaningful images have real alt text.
- [ ] Links make sense out of context; phone, email, and address shown as text.
- [ ] Layout reflows to one column at narrow widths with no horizontal scrolling, including 400% zoom (reflow at 320 CSS px).
- [ ] Touch targets at least 24×24 px (WCAG 2.2, 2.5.8).
- [ ] Animation respects `prefers-reduced-motion`.

## Verified by a human before launch

- [ ] Automated scan with WAVE and axe DevTools on every page; fix or document each result.
- [ ] Keyboard-only pass: tab through every page and the form; nothing trapped, focus always visible and in a logical order.
- [ ] Screen reader spot check (VoiceOver or NVDA): headings list, landmarks, form labels, error messages.
- [ ] Zoom to 400% and test on a real phone and a tablet in portrait and landscape.
- [ ] Review all alt text and link text in the client's real content.
