# Angirash Global Technologies — Website V1

Welcome. This is the official website of Angirash Global Technologies.

This guide is written for non-technical users. You do not need to know coding to make changes to this website.

---

## Table of Contents

1. How to run the website on your computer
2. How to change text
3. How to change colors
4. How to change or add products
5. How to change navigation links
6. How to change social media links
7. How to replace images
8. How to deploy the website live
9. How to update the website after making changes
10. Roadmap to Version 2

---

## 1. How to Run the Website on Your Computer

Open PowerShell and type these commands one by one:

    cd C:\Projects\Website\Website\angirash
    npm run dev

Then open your browser and go to:

    http://localhost:3000

To stop the website, press CTRL + C in PowerShell.

---

## 2. How to Change Text

All text on the website lives in ONE file:

    config/site.config.ts

Open this file in any text editor (Notepad works, VS Code is better).

You will see sections like:

- company - Company name, tagline, email, phone
- hero - Headline, subheadline, button labels
- about - About section text
- mission - Mission statement and 3 pillars
- vision - Vision statement
- future - Future section
- seo - Search engine title and description

To change text, simply replace the text inside the quotes.

Example:

    name: "Angirash Global Technologies"

Change to:

    name: "Your New Name Here"

Save the file. Refresh the browser. Done.

---

## 3. How to Change Colors

All colors live in ONE file:

    config/colors.config.ts

Colors are written in hex codes (like #C9A84C).

You can pick colors from: https://coolors.co

Change any hex code, save the file, refresh browser.

The main color to change is:

    primary: "#C9A84C"   (this gold color)

---

## 4. How to Change or Add Products

All products live in ONE file:

    config/products.config.ts

Each product looks like this:

    {
      id: "product-001",
      name: "Angirash Learn",
      category: "Education",
      tagline: "Ancient Knowledge. Modern Delivery.",
      description: "A premium learning platform...",
      status: "coming-soon",
      href: "#",
      icon: "flame"
    }

To add a new product: Copy any existing product block, paste it below, change the values.

To remove a product: Delete the entire product block.

Available icons: flame, network, leaf, star, globe, shield

Available statuses: live, beta, coming-soon

---

## 5. How to Change Navigation Links

Open:

    config/navigation.config.ts

Add, remove or rename links inside the links array.

---

## 6. How to Change Social Media Links

Open:

    config/site.config.ts

Find the social section and replace with your actual URLs.

Leave empty ("") if you do not want a link.

---

## 7. How to Replace Images

All images live in:

    public/images/

Folders:

- public/images/hero/ - Hero background image
- public/images/products/ - Product images
- public/images/brand/ - Logo, favicon, og-image

To replace an image, simply delete the old file and add the new file with the same name.

---

## 8. How to Deploy the Website Live

The easiest way is Vercel (free, no credit card required).

Step-by-step:

1. Create a free account at https://vercel.com
2. Push your code to GitHub (ask a technical friend to help once)
3. In Vercel, click New Project
4. Import your GitHub repository
5. Click Deploy
6. Wait 2 minutes
7. Your website is LIVE

Vercel gives you a free URL like:

    https://angirash.vercel.app

To use your own domain, buy it from Namecheap or GoDaddy and connect it in Vercel settings.

---

## 9. How to Update the Website After Making Changes

If you have deployed on Vercel:

1. Make your changes locally
2. Save the files
3. Push to GitHub
4. Vercel will automatically re-deploy in 1-2 minutes

---

## 10. Roadmap to Version 2

Version 1 (current) is built with subtle cinematic animations and a lightweight architecture.

Version 2 will add:

- Real-time flowing Ganga (GPU water simulation)
- Real 3D Shiva model
- Procedural fire
- Volumetric fog
- Real reflections
- Advanced shaders
- Mouse interactions

The architecture already supports this. Version 2 will not require rewriting Version 1. Only new modules will be added.

---

## File Structure Quick Reference

    angirash/
    - app/                    (Root page and layout)
    - components/
      - layout/               (Navbar, Footer)
      - sections/             (Hero, About, Mission, Products, Vision, Future)
      - effects/              (Fog, Fire, Light)
      - ui/                   (Reusable components)
    - config/                 (EDIT THESE FILES)
      - site.config.ts        (All text)
      - colors.config.ts      (All colors)
      - products.config.ts    (All products)
      - navigation.config.ts  (All links)
      - animations.config.ts  (Animation settings)
    - lib/                    (Utilities and hooks - do not edit)
    - public/
      - images/               (REPLACE IMAGES HERE)
    - README.md               (This file)

---

## Need Help?

If something breaks:

1. Do not panic
2. Ask a developer friend
3. Or restore the file from backup

Every important edit is in ONE file. Nothing is scattered.

---

## Credits

Built with love and craftsmanship for Angirash Global Technologies.

Rooted in Ancient Wisdom. Built for the Future.
