# Assets — KSC Portfolio

Drop your images into the folders below. The site shows a styled colour placeholder
automatically whenever a file is missing, so you can add photos gradually.

---

## Profile photo

```
public/assets/profile.jpg
```

- **File name:** exactly `profile.jpg` (or `profile.jpeg` / `profile.png` / `profile.webp`)
- **Dimensions:** portrait orientation, ideally 3 × 4 ratio (e.g. 900 × 1200 px)
- **Appears on:** About page, hero section

---

## Photography gallery

```
public/assets/photographs/{category}/{category}-{nn}.jpg
```

Each photo lives in its own category subfolder. Name files like:

| Category   | Example file names                          |
|------------|---------------------------------------------|
| `temple`   | `temple-01.jpg`, `temple-02.jpg`, …         |
| `portrait` | `portrait-01.jpg`, `portrait-02.jpg`, …     |
| `festival` | `festival-01.jpg`, `festival-02.jpg`, …     |
| `iaido`    | `iaido-01.jpg`, `iaido-02.jpg`, …           |
| `urban`    | `urban-01.jpg`, `urban-02.jpg`, …           |
| `landscape`| `landscape-01.jpg`, `landscape-02.jpg`, …   |
| `craft`    | `craft-01.jpg`, `craft-02.jpg`, …           |

### Rules
- Numbers are **zero-padded two digits**: `01`, `02`, … `10`, `11`
- Accepted formats: `.jpg`, `.jpeg`, `.png`, `.webp`
- Keep originals at **2400 px on the long edge** max — the gallery resizes them
- The `aspect` ratio in `Photography.jsx` controls the placeholder shape;
  update it to match your actual photo ratio when you add a new entry

### Adding a new photo

1. Drop the file into the correct subfolder
2. Open `src/pages/Photography.jsx`
3. Add an entry to the `photos` array at the top:

```js
{
  id: 10,                              // next sequential id
  title: 'Your Photo Title',
  location: 'City, Country',
  category: 'Temple',                  // must match a key in categories[]
  aspect: '4/5',                       // width/height ratio of the placeholder
  color: '#8B4513',                    // fallback colour shown before image loads
  file: 'temple/temple-03.jpg',        // path relative to public/assets/photographs/
}
```

---

## Open Graph / social preview

```
public/assets/og/og-image.jpg
```

- **Dimensions:** 1200 × 630 px (standard OG image)
- Referenced in `index.html` meta tags (add the tag there when ready)

---

## Folder tree

```
public/
└── assets/
    ├── README.md          ← you are here
    ├── profile.jpg        ← drop your profile photo here
    ├── photographs/
    │   ├── temple/
    │   ├── portrait/
    │   ├── festival/
    │   ├── iaido/
    │   ├── urban/
    │   ├── landscape/
    │   └── craft/
    └── og/
        └── og-image.jpg
```
