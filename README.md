# IntellyCode GitHub Pages Site

Static freelancing website for the `Intellycode` / `IntellyCode` GitHub account.

## Files

- `index.html` - single-page website.
- `assets/styles.css` - custom styling on top of Bootstrap.
- `assets/systems-visual.svg` - local visual asset for the hero section.

## Local Preview

From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

## GitHub Pages Deployment

1. Create or use a repository named `intellycode.github.io` under the GitHub account.
2. Copy this directory's contents to that repository root.
3. Commit and push to the default branch.
4. In GitHub, open `Settings -> Pages`.
5. Set the source to deploy from the default branch root.
6. After the Pages build completes, visit `https://intellycode.github.io/`.

The site is static and does not require a build step. Bootstrap is loaded from jsDelivr, so the page works best with normal internet access.
