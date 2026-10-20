# Mutaka Rodney — Portfolio (first coded version)

A handcrafted **Astro + TypeScript + CSS** static portfolio implementing the editorial Figma visual direction. No purchased template, external database, backend, or required hosting cost.

## Run on Windows in VS Code

1. Install Node.js 20.11+ if it is not already installed.
2. Extract this ZIP to a normal folder (for example `Documents\\mutaka-rodney-portfolio`).
3. Open that folder in VS Code.
4. Open Terminal → New Terminal.
5. Run:

```powershell
npm install
npm run dev
```

Visit the URL printed by Astro (normally `http://localhost:4321`). To open on a phone on the same Wi-Fi, use your laptop's LAN IP with port `4321`, and allow access in Windows Firewall if prompted.

## Page map

- `/` — homepage, original photography, Budini, visual work, motion preview, contact section
- `/work/budini` — five actual mobile screens, documented as in development
- `/work/visuals` — seven selected paid client artwork pieces; click to enlarge
- `/work/motion` — three actual edited videos in browser-compatible H.264 video files
- `/about` — personal biography and portrait

## Important before public release

- **Contacts:** edit `src/data/content.ts` to set your approved public email, WhatsApp number, and professional social profiles. The homepage intentionally does not publish a private address by default.
- **Client permissions:** make sure publicly showing company branding and private birthday portraits is permitted by the clients and people concerned.
- **Project status:** Budini is intentionally labeled **In Development**, not launched.
- **Books:** Python and SQL books are intentionally excluded by request.
- **Excluded projects:** NexaBuild and Matuumu Homecoming Mixer are not included.
- **Motion:** edit title/caption text in `src/data/content.ts` if you want more precise descriptions of your on-camera and AI-editing workflow.
- **Video size:** the 3 MP4s in `public/media/` are resized and transcoded to H.264/AAC for broader web compatibility and lower data consumption.
- **Visual gallery:** originality relies on uploaded real work, custom editorial typography, and intentional space rather than AI website templates.

## Build

```powershell
npm run build
npm run preview
```

Astro generates the static website into `dist/`.

## Free deployment to Cloudflare Pages

1. Create a GitHub repository for the project and push this folder.
2. Connect that repository to Cloudflare Pages.
3. Set build command to `npm run build` and output directory to `dist`.
4. Use the free `*.pages.dev` subdomain to start. A custom domain is optional later.

## Design reference

Figma: https://www.figma.com/design/hLnZ56gYxKwmAZ7CUToCpy

The initial site is a first implementation, subject to final content and visual QA before public deployment.

## Professional CV and contact details

The approved one-page CV is included at `public/Mutaka_Rodney_CV.pdf` and is downloadable from the header, homepage, and About page. The public-facing contact details in `src/data/content.ts` are the number and email approved for the CV and portfolio.

When you publish the site on Cloudflare Pages, the CV download will work at `/Mutaka_Rodney_CV.pdf`. Once a permanent domain is selected, add that verified URL to the editable Word CV and re-export the PDF before the final launch.
