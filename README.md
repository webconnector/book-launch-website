# Book Launch Landing Page

A simple static website split into separate HTML, CSS, JavaScript, and image folders.

## Project structure

```text
book-launch-project/
├── index.html          # Page content and metadata
├── css/
│   └── style.css       # All page styling and responsive rules
├── js/
│   └── main.js         # Copy-account buttons, mobile navigation, footer year
├── images/             # Place local image files here
└── .vscode/
    └── extensions.json # Recommends Live Server in VS Code
```

## Open it in Visual Studio Code

1. Download and extract the project ZIP.
2. Open Visual Studio Code.
3. Choose **File → Open Folder…** (on Windows, `Ctrl+K`, then `Ctrl+O` may open a file dialog; use **Open Folder** from the File menu).
4. Select the extracted `book-launch-project` folder—not just `index.html`.
5. If prompted, install the recommended **Live Server** extension.
6. In the Explorer panel, right-click `index.html` and select **Open with Live Server**. Your browser should open the page. Save changes in VS Code and the browser will refresh.

You can also double-click `index.html` to preview it, but Live Server is more convenient while editing.

## Where to make changes

- Text, links, section order, image references: `index.html`
- Colors, spacing, typography, sizing, responsive layout: `css/style.css`
- Button actions and other interactive behavior: `js/main.js`
- Local image files: `images/`

The HTML links to the external files like this:

```html
<link rel="stylesheet" href="css/style.css">
<script src="js/main.js" defer></script>
```

Keep the folder names and relative paths as shown unless you update the links in `index.html`.

## Moving the images into the images folder

At present, the three book/author images still point to the original external image host because the actual image files were not included with the HTML and could not be downloaded in this environment. The `images/` folder is ready for them.

Save the original images into `images/` with these filenames:

- `moonlight-stories-cover.jpg`
- `serving-my-fatherland-cover.jpg`
- `author-portrait.jpg`

Then update the matching `src` attributes in `index.html` to the paths below. The Moonlight cover appears twice and the Serving My Fatherland cover appears twice, so update both references for each cover.

```html
src="images/moonlight-stories-cover.jpg"
src="images/serving-my-fatherland-cover.jpg"
src="images/author-portrait.jpg"
```

Use the correct extension (`.jpg`, `.png`, `.webp`, etc.) for each file you actually save. Also, `og:image` in the page metadata should use an absolute public URL after deployment; a local `images/...` path is not sufficient for social previews.

## Important

This is a static HTML/CSS/JavaScript project. You do not need Node.js, npm, a framework, or a build command to preview it.
