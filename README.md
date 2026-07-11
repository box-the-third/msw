# My Saudi Wellness – Website Files

## File Structure

```
mysaudiwellness/
├── index.html              ← Main page (all content)
├── css/
│   └── style.css           ← All custom styles
└── assets/
    └── images/             ← Place your image files here
        │
        ├── logo.png                  ← Site logo (from: logo/1_logo.png)
        │
        │   HERO BANNERS
        ├── banner1.jpg               ← (from: mainbanners/1_sw1.jpg)
        ├── banner2.jpg               ← (from: mainbanners/2_sw2.jpg)
        ├── banner3.jpg               ← (from: mainbanners/3_sw3.jpg)
        │
        │   ABOUT
        ├── about-side.jpg            ← (from: aboutus/1_my_saudi_wellness_side.jpg)
        │
        │   PACKAGES
        ├── pkg-onsite.jpg            ← (from: packages/1_Onsite.jpg)
        ├── pkg-wellness.jpg          ← (from: packages/2_wellness-img.jpg)
        ├── pkg-screening.jpg         ← (from: packages/3_screening.jpg)
        ├── pkg-fitness.jpg           ← (from: packages/4_fitness-img.jpg)
        │
        │   PARTNERS
        ├── partner-rchp.jpg          ← (from: partners/1_rchp logo.jpg)
        ├── partner-peabodies.jpg     ← (from: partners/2_peabodieslogo.jpg)
        ├── partner-cs.jpg            ← (from: partners/3_CS_Wort-Bildmarke.jpg)
        ├── partner-disciplinex.jpg   ← (from: partners/5_DisciplineXgames-logo.jpg)
        ├── partner-hyjiya.jpg        ← (from: partners/7_Hyjiya-logo-25.2.14.jpg)
        ├── partner-aerofit.jpg       ← (from: partners/9_AeroFit_logo600.jpg)
        ├── partner-european.jpg      ← (from: partners/10_european-lifestyle-logo.jpg)
        │
        │   CONTACT
        ├── map.jpg                   ← (from: contactus/1_map.jpg)
        └── captcha.png               ← Captcha image (dynamic on original; use placeholder)
```

## How to recover the original images

Open the Wayback Machine URLs below in your browser and save each file:

- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/logo/1_logo.png
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/mainbanners/1_sw1.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/mainbanners/2_sw2.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/mainbanners/3_sw3.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/aboutus/1_my_saudi_wellness_side.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/packages/1_Onsite.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/packages/2_wellness-img.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/packages/3_screening.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/packages/4_fitness-img.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/1_rchp logo.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/2_peabodieslogo.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/3_CS_Wort-Bildmarke.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/5_DisciplineXgames-logo.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/7_Hyjiya-logo-25.2.14.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/9_AeroFit_logo600.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/partners/10_european-lifestyle-logo.jpg
- https://web.archive.org/web/20230405im_/http://mysaudiwellness.com/contactus/1_map.jpg

Save each file into the assets/images/ folder using the filenames listed above.

## Notes

- The page uses Bootstrap 3 and Font Awesome 4 loaded from CDN — no internet = no icons/grid.
  If you need a fully offline version, download those libraries too.
- The contact form's CAPTCHA was server-generated on the original; replace with a static image or
  a JS-based captcha (e.g. reCAPTCHA) for your live version.
- The navbar sticks to the top on scroll via the included JS in index.html.
