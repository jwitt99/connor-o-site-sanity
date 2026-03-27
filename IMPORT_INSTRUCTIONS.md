# Data Import Instructions

This guide will help you import all the data from the connor-o-site CMS into Sanity.

## Prerequisites

1. Install dependencies (if not already done):
```bash
npm install
```

## Steps to Import Data

### 1. Get Your Sanity API Token

1. Go to https://www.sanity.io/manage
2. Select your project (connor-o-site)
3. Go to **API** → **Tokens**
4. Click **Add API token**
5. Give it a name (e.g., "Import Script")
6. Set permissions to **Editor** or **Administrator**
7. Copy the token

### 2. Set Up Environment Variable

Create a `.env` file in the root directory:

```bash
SANITY_TOKEN=your_token_here
```

Replace `your_token_here` with the token you copied.

### 3. Run the Import Script

```bash
npm run import
```

This will import:
- 9 Gallery Items (theater productions)
- 3 Blog Posts
- 3 Experience entries
- 1 Education entry
- Site Settings (profile, contact info, agent info, skills)

### 4. Verify the Import

1. Start the Sanity Studio:
```bash
npm run dev
```

2. Open http://localhost:3333 in your browser
3. Check that all content types have been populated

## What Was Imported

### Gallery Items
All 9 theater production images with titles, descriptions, and categories.

**Note:** The actual images need to be uploaded manually through the Sanity Studio interface, as they reference local file paths in the original CMS.

### Blog Posts
- Building Modern Web Applications
- The Art of Clean Code
- Design Systems at Scale

### Experience
- Senior Software Engineer at Tech Company Inc.
- Software Engineer at Startup Co.
- Junior Developer at Digital Agency

### Education
- Bachelor of Science in Computer Science from University Name

### Site Settings
- Profile information (name, bio, title)
- Contact information (email, phone, Instagram)
- Agent information (full address and contact details)
- Skills list (12 technical skills)

## Next Steps

### Upload Images

For the gallery items, you'll need to upload the images manually:

1. Go to the Gallery Item documents in Sanity Studio
2. For each item, click on the image field
3. Upload the corresponding image from `/assets/gallery/` in the connor-o-site project

The images to upload are:
- A Bronx Tale, Dir. Billy Surges.webp
- Along the Banks, Dir. Brigid Reilly.webp
- Butterflies are Free, Dir. Joey Rizzolo, Photo by John Seyfried.webp
- Dave, Who is Not Dave, Dir. Kylie Gutierrez.webp
- La Ronde, Dir. Ramona Rotten.webp
- Measure for Measure, Dir. Paul Moser, Photo by John Seyfried.webp
- The Distrikt of Lake Michigun, Dir. Seth Wilson.webp
- The Ill-Conceived, Poorly Executed House Warming Party of Amy & Jaime, Dir. Ray Morgan.webp
- Three Sisters, Dir. Audrey Napoli, Photo by Joe Mazza.webp

### Upload Profile Assets

In Site Settings, upload:
- Headshot image (from `/assets/headshot.jpg`)
- Resume PDF (from `/assets/connor-o-resume.pdf`)

## Troubleshooting

### "SANITY_TOKEN is not defined"
Make sure you created the `.env` file with your token.

### "Unauthorized" error
Your token may not have the correct permissions. Create a new token with Editor or Administrator permissions.

### Import fails partway through
You can safely re-run the import script. Sanity will create new documents (it won't update existing ones unless you modify the script to do so).
