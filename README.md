# Kurt Monteclaro’s Portfolio

A personal portfolio built with the Next.js App Router, React, TypeScript, Tailwind CSS, and Lucide icons.

## Run locally

Use Node.js 22 or 24 and npm. From the repository root, run:

```sh
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Check the project

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build locally.

## Edit the portfolio

- `src/data/portfolio.ts` contains the profile, skills, education, navigation, and project details. A project can have a `github` link and a `demo` URL.
- `src/components/` contains the header, footer, hero, project cards, and shared presentation components.
- `src/app/` contains the single-page portfolio, theme styles, and page and social metadata.
- The Hero uses `public/images/coding-cat.gif` and displays `public/images/coding-cat-still.webp` when reduced motion is enabled.
- `public/kurt-david-monteclaro-resume.pdf` is the downloadable résumé. To update it, replace the PDF at that path or update the résumé link in the portfolio data file.

## Deploy to Vercel

1. Commit the project and push it to your GitHub repository.
2. In Vercel, select **Add New → Project** and import the repository.
3. Keep the **Next.js** framework preset and the repository root. Select Node.js 24.x or 22.x if you need to set a Node.js version. The app needs no environment variables.
4. Select **Deploy**. Vercel provides the portfolio URL once the build succeeds.

[Vercel’s Next.js deployment guide](https://vercel.com/docs/frameworks/full-stack/nextjs)
