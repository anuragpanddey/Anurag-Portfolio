# Firebase Setup Guide for Anurag Portfolio

This guide walks you through setting up Firebase Storage to host all images and videos for your portfolio, replacing local assets.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Step 1: Create a Firebase Project](#step-1-create-a-firebase-project)
3. [Step 2: Set Up Firebase Storage](#step-2-set-up-firebase-storage)
4. [Step 3: Configure Your React App](#step-3-configure-your-react-app)
5. [Step 4: Upload Media to Firebase](#step-4-upload-media-to-firebase)
6. [Step 5: Update Data References](#step-5-update-data-references)
7. [Step 6: Test & Deploy](#step-6-test--deploy)
8. [Firebase Rules & Security](#firebase-rules--security)
9. [Troubleshooting](#troubleshooting)

---

## Prerequisites

- A [Google Account](https://accounts.google.com/)
- Node.js installed locally
- Your portfolio cloned/downloaded
- All media files ready (images in `public/assets/images/`, videos in `public/assets/videos/`)

---

## Step 1: Create a Firebase Project

### 1.1 Go to Firebase Console

1. Open [Firebase Console](https://console.firebase.google.com/) in your browser.
2. Click **"Create a project"** or **"Add project"**.

### 1.2 Configure the Project

1. **Project name:** Enter `anurag-portfolio` (or your preferred name).
2. **Analytics:** Optional. Disable or enable as needed.
3. Click **"Create project"** and wait for setup to complete (~2 min).

### 1.3 Register Your Web App

1. On the project dashboard, click the **Web icon** (`</>`).
2. Register app as `anurag-portfolio-web`.
3. You'll get a **Firebase config object**—copy and save it (you'll need it in Step 3).

**Example config (yours will be different):**
```javascript
const firebaseConfig = {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abc123",
};
```

---

## Step 2: Set Up Firebase Storage

### 2.1 Enable Storage in Firebase Console

1. In Firebase Console, go to **Build** → **Storage** (left sidebar).
2. Click **"Create bucket"** or **"Get started"**.
3. Accept the default settings and click **"Create"**.

### 2.2 Set Storage Location

- Choose a region closest to your users (e.g., `us-central1` for global).
- Click **"Done"**.

---

## Step 3: Configure Your React App

### 3.1 Install Firebase SDK

Run this in your project root:

```bash
npm install firebase
```

### 3.2 Create a Firebase Configuration File

Create a new file: `src/firebase.js`

```javascript
// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSy_YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123xyz",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Storage and get a reference to the service
export const storage = getStorage(app);
export default app;
```

**Replace the values with your Firebase config** (from Step 1.3).

### 3.3 Keep Config Secure (Optional but Recommended)

For production, use environment variables:

1. Create `.env.local` in your project root:
```
VITE_FIREBASE_API_KEY=AIzaSy_YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123xyz
```

2. Update `src/firebase.js` to use env variables:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
```

---

## Step 4: Upload Media to Firebase

### 4.1 Option A: Upload via Firebase Console (Easy)

1. In Firebase Console, go to **Storage**.
2. Click **"Upload folder"** or drag & drop files.
3. Create folders:
   - `portfolio/images/` → upload all `.jpeg`, `.png` files
   - `portfolio/videos/` → upload all `.mp4` files
   - `portfolio/blog/` → upload blog cover images

4. For each uploaded file, click it to see the **download URL**. You'll use these in Step 5.

### 4.2 Option B: Upload via Firebase Admin SDK (Programmatic)

If you have many files, use a Node script to bulk upload:

```javascript
// upload-to-firebase.js (run from your local machine)
const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Download your service account key from Firebase Console
// Settings → Service Accounts → Generate Key
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-project.appspot.com',
});

const bucket = admin.storage().bucket();

const uploadFolder = async (localDir, firebaseDir) => {
  const files = fs.readdirSync(localDir);
  
  for (const file of files) {
    const localPath = path.join(localDir, file);
    const remotePath = `${firebaseDir}/${file}`;
    
    if (fs.statSync(localPath).isFile()) {
      await bucket.upload(localPath, { destination: remotePath });
      console.log(`Uploaded: ${remotePath}`);
    }
  }
};

(async () => {
  await uploadFolder('./public/assets/images', 'portfolio/images');
  await uploadFolder('./public/assets/videos', 'portfolio/videos');
  console.log('Upload complete!');
})();
```

Run: `node upload-to-firebase.js`

---

## Step 5: Update Data References

### 5.1 Get Download URLs from Firebase

For each asset in Firebase Storage:
1. Click the file in Console.
2. Click the three dots → **"Copy download URL"**.

**Example URLs:**
```
https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fimages%2Fa1.jpeg?alt=media&token=abc123
https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fvideos%2FCAFEVERT.mp4?alt=media&token=xyz789
```

### 5.2 Update `src/data.js`

Replace all local asset paths with Firebase URLs.

**Before:**
```javascript
export const galleryData = [
  { id: 1, image: "./assets/images/a1.jpeg", category: "advertisement" },
  { id: 8, video: "./assets/videos/CAFEVERT.mp4", category: "advertisement" },
  // ...
];

export const blogData = [
  {
    id: 1,
    title: "Designing the Future",
    image: blogCoverrend,  // local import
    // ...
  },
];
```

**After:**
```javascript
export const galleryData = [
  { id: 1, image: "https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fimages%2Fa1.jpeg?alt=media&token=abc123", category: "advertisement" },
  { id: 8, video: "https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fvideos%2FCAFEVERT.mp4?alt=media&token=xyz789", category: "advertisement" },
  // ...
];

export const blogData = [
  {
    id: 1,
    title: "Designing the Future",
    image: "https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fblog%2Fblogcover.jpeg?alt=media&token=xyz789",
    // ...
  },
];
```

**Tip:** For 50+ images, use a script to automate URL replacement:

```javascript
// generate-firebase-urls.js
const fs = require('fs');
const localToFirebase = (localPath) => {
  const filename = localPath.split('/').pop();
  const category = localPath.includes('videos') ? 'videos' : 'images';
  // Build URL based on your bucket
  return `https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2F${category}%2F${filename}?alt=media&token=YOUR_TOKEN`;
};

// Read data.js, replace paths, write back
const dataFile = fs.readFileSync('./src/data.js', 'utf8');
const updated = dataFile.replace(/\.\/assets\/(images|videos)\/([^"']+)/g, (match, category, filename) => {
  return `https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2F${category}%2F${filename}?alt=media`;
});

fs.writeFileSync('./src/data.js', updated);
console.log('URLs updated!');
```

### 5.3 Update Direct Component References

In `src/components/Contact.jsx`, replace:

**Before:**
```jsx
<video src="./assets/videos/CAFEVERT.mp4" autoPlay loop muted playsInline />
```

**After:**
```jsx
<video src="https://firebasestorage.googleapis.com/v0/b/your-project.appspot.com/o/portfolio%2Fvideos%2FCAFEVERT.mp4?alt=media&token=xyz789" autoPlay loop muted playsInline />
```

Similarly in `src/components/Hero.jsx`, update `heroData.backgroundVideo`.

### 5.4 Remove Local Asset Imports from `src/data.js`

**Before:**
```javascript
import blogCoverDesign from "./assets/f1.jpeg";
import blogCover3d from "./assets/b1.png";
```

**After:**
Remove these imports and use Firebase URLs directly in the data.

---

## Step 6: Test & Deploy

### 6.1 Test Locally

```bash
npm run dev
```

- Check that images and videos load correctly in the gallery.
- Open browser DevTools → **Network** tab to verify files load from `firebasestorage.googleapis.com`.

### 6.2 Build for Production

```bash
npm run build
```

### 6.3 Deploy to Netlify or Vercel

**Netlify:**
1. Connect your repo to Netlify.
2. Set **Build command:** `npm run build`
3. Set **Publish directory:** `dist`
4. Add environment variables in Netlify dashboard (Settings → Environment):
   - `VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_PROJECT_ID`, etc.
5. Deploy.

**Vercel:**
1. Import your repo to Vercel.
2. Add environment variables in project settings.
3. Deploy.

---

## Firebase Rules & Security

### Public Read Access (Recommended for Portfolio)

By default, Firebase Storage requires authentication. For a public portfolio, allow read access:

1. In Firebase Console, go to **Storage** → **Rules**.
2. Replace the default rules with:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Allow public read access to all files in 'portfolio' folder
    match /portfolio/{allPaths=**} {
      allow read;
      allow write: if request.auth != null; // Only authenticated users can write
    }
  }
}
```

3. Click **"Publish"**.

### Secure Write Access (If You Add Admin Uploads Later)

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /portfolio/{allPaths=**} {
      allow read;
      // Only users with custom claim 'admin: true' can write
      allow write: if request.auth.token.admin == true;
    }
  }
}
```

---

## Troubleshooting

### Issue: Images/Videos Not Loading

**Solution:**
1. Check browser console for CORS errors.
2. Verify download URLs are correct (copy directly from Firebase Console).
3. Check **Storage Rules** allow `read` access.

### Issue: Firebase Config Not Working

**Solution:**
1. Copy the entire config from Firebase Console again.
2. Double-check `storageBucket` is correct (format: `your-project.appspot.com`).
3. Test with: `firebase --version` in terminal.

### Issue: Large File Uploads Timing Out

**Solution:**
1. Split files into chunks using Firebase SDK:
```javascript
import { ref, uploadBytes } from 'firebase/storage';
const chunkSize = 1024 * 1024; // 1MB chunks
```

2. Or use a CDN like Cloudinary for video delivery alongside Firebase for images.

### Issue: CORS Errors on Build

**Solution:**
1. Ensure Storage Rules allow cross-origin requests (public read rule does).
2. Clear browser cache (Cmd+Shift+Delete).

---

## Optimization Tips

### 1. Image Optimization

Use a service like **ImageKit** or **Cloudinary** alongside Firebase:
- Upload originals to Firebase.
- Serve optimized versions via CDN.

### 2. Video Optimization

For faster video delivery:
- Use MP4 format with H.264 codec.
- Create multiple quality versions (480p, 720p, 1080p).
- Lazy-load videos (use `loading="lazy"` or IntersectionObserver).

### 3. Caching

Firebase CDN caches files automatically. Add cache headers:

**In your deployment (Netlify/Vercel):**
```
[[headers]]
  for = "/portfolio/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

---

## Next Steps

1. **Optional: Add Firestore** for dynamic blog posts and project updates without redeploying.
2. **Optional: Add Firebase Auth** if you want an admin dashboard.
3. **Optional: Set up CDN** (e.g., Cloudflare) for faster global delivery.

---

## Quick Reference Commands

```bash
# Install Firebase SDK
npm install firebase

# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Netlify/Vercel
# (Follow their deployment guides)

# Check Firebase project status
firebase projects:list
```

---

## Support & Resources

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Storage](https://firebase.google.com/docs/storage)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [React + Firebase Tutorial](https://firebase.google.com/docs/database/web/start)

---

**Last Updated:** April 2026  
**Firebase SDK Version:** v9+  
**React Version:** 19.2.4