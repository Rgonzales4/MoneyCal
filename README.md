# MoneyCal

A simple web app for tallying an Australian till at end-of-day. Enter the EFTPOS and Petty totals, count the notes and coins on hand, and MoneyCal works out the grand total plus a profit breakdown.

**Live:** https://rgonzales4.github.io/MoneyCal/

## What it does

- **Cash count** — inputs for every AU denomination ($100 down to 5c). Each row shows its running subtotal as you type.
- **Till totals** — separate fields for EFTPOS takings and Petty cash, plus a float toggle ($500 or $600) for the cash that always stays in the till.
- **Calculate** — sums everything into a single grand total.
- **Profit breakdown** — splits the result into EFTPOS, Petty, and Cash Profit. Cash Profit subtracts the selected float ($500 or $600) so only the actual day's takings show.

## Stack

Plain HTML, CSS, and vanilla JavaScript in a single `index.html` file — no build step, no dependencies. Fonts are loaded from Google Fonts (DM Sans + Bebas Neue). Mobile-friendly responsive layout.
