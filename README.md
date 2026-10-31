# Patil Dhaba — Demo Website ("Tamba Mati": copper on smoked clay)

Demo website for **Patil Dhaba (पाटील ढाबा) — Malvani Mejwani**, Dandfata, Takedevi Mandir, Mumbai–Pune Highway, Tal. Khalapur, Dist. Raigad – 410206.
Sister site of Hotel Tejas (same owner, same menu). Built by Currikit.

## Open it on your PC

1. **Extract the zip first** (right-click → Extract All).
2. Double-click `index.html`. Keep the internet on so the fonts (Tiro Devanagari Marathi, Kalam, Mukta) load.
3. Phone view: Chrome → `F12` → `Ctrl + Shift + M`.

## What's on the page

| Section | What it does |
| --- | --- |
| Header | Round copper seal logo, Marathi / English switch, Call button |
| First screen | Name and buttons on the clay wall; a copper-rim plate that slowly turns and changes dish every 5 s (Prawns, Gavthi Kombdi, Surmai, Paplet, Chicken Malvani Handi), with dots to choose |
| Specialities | Swipe row of round copper plates (Gavthi Kombdi, Surmai, Paplet, Prawns) with price tags, plus 4 more favourites |
| Thali | Thali photo with numbered labels on each bowl, and all 12 thali prices |
| Menu | One long menu. Desktop: sticky section list on the left that follows your scroll. Phone: "विभाग निवडा / Sections" button opens a list. Search and Veg / Non-veg filter |
| Our kitchen | Chulha, copper handi, fresh fish — each has a "real photo goes here" note |
| Reviews | Hidden until real Google reviews are added (see below) |
| Visit | Live Google map with a copper card: address, landmark, both phone numbers, WhatsApp, hours, drive times; review button; link to Hotel Tejas |
| Phone pill | Floating copper Call · WhatsApp · Map pill after the first screen |

## Files

```
patil-dhaba-website/
├── index.html          Page structure and all fixed text (Marathi + English)
├── css/style.css       Colours, fonts, layout, animations
├── js/menu-data.js     Specials, thalis and the full menu with prices (same as Hotel Tejas)
├── js/app.js           Turning plate, menu, search, filter, sections list, language, reviews
├── img/                Dish photos; plate_*.jpg are the round crops for the plate and specials
└── README.md
```

## Editing

- **Prices / dishes:** `js/menu-data.js`, one line per dish: `["Marathi", "English", price]`, or `P(plate, half)` / `HF(half, full)`.
- **Colours:** top of `css/style.css`: `--clay` (wall), `--clay-2` (cards), `--copper`, `--copper-lt` (prices), `--ivory` (text).
- **Plate dishes:** in `index.html`, find `class="plate-in"`; each `<img>` has the Marathi name, English name and price.
- **Add real Google reviews:** in `js/app.js`, fill `const REVIEWS = []` like
  `{ name: "Rahul P.", stars: 5, text: "Best surmai on the highway", when: "Nov 2026" }`. Only copy real reviews from Google. The section appears by itself.
- **Kitchen photos:** replace the "real photo goes here" notes when the owner sends photos.

## Placeholders to replace before going live

| What | Where | Search for |
| --- | --- | --- |
| Phone numbers (confirm they are right for Patil Dhaba) | `index.html` | `tel:+91` and `confirm` |
| Which side of the highway / how to spot it | `index.html` | `add side` |
| 24-hour timing | `index.html` | `२४ तास` / `24 hours` |
| FSSAI licence number | `index.html` footer | `FSSAI Lic. No.` |
| Demo strip | `index.html` | `<div class="demo">` (delete the line) |
| Photos | `img/` | Replace with the dhaba's own photos, same file names |

Google listing: "Patil Dhaba" at this pin (place id `ChIJ4RFOQgDl5zsRjHrkEZZPnYU`). Its address on Google wrongly says Palaspe Phata, Panvel — the owner should claim it and correct it. The review button opens its review box.

## Checks done (1 Nov 2026)

- HTML validator: no errors (inline animation delays are intentional).
- Every feature tested in a browser: plate dots, language switch, search, Veg filter, sections list, Copy, WhatsApp, Directions.
- Works down to 320px-wide phones with no side-scrolling.
- Lighthouse, mobile, slow 4G: Performance 96, Accessibility 100, Best practices 100, SEO 100.

## Going live

Upload this folder to Netlify as a second project in the same account, name it `patildhaba` → **https://patildhaba.netlify.app**. Click **Make public** after the first deploy. Full steps: the "Hotel Tejas — Website & Google Setup Guide" doc.

## Photo credits

Photos from Wikimedia Commons under free licences; authors are listed in the footer under "Photo credits". Keep that list while these photos are used.
