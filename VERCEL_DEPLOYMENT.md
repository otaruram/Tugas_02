ni# 🚀 PANDUAN DEPLOY KE VERCEL

## ✅ PROJECT SUDAH DI-PUSH KE GITHUB!

**Repository URL:** https://github.com/otaruram/Tugas_02

---

## 🌐 CARA DEPLOY KE VERCEL

### **METODE 1: VERCEL DASHBOARD (RECOMMENDED)**

#### **1. Buka Vercel Dashboard**
- Go to [vercel.com](https://vercel.com)
- Login dengan GitHub account

#### **2. Import Repository**
```
1. Click "New Project"
2. Import from GitHub
3. Search: "otaruram/Tugas_02"
4. Click "Import"
```

#### **3. Configure Project**
```
Project Name: weather-app-brutalist
Framework Preset: Other
Root Directory: ./
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

#### **4. Environment Variables (Optional)**
```
No environment variables needed
- Pure frontend application
- No API keys required
```

#### **5. Deploy**
```
Click "Deploy"
Wait 2-3 minutes for build
Get live URL: https://tugas-02-[vercel-hash].vercel.app
```

---

### **METODE 2: VERCEL CLI**

#### **1. Install Vercel CLI**
```bash
npm install -g vercel
```

#### **2. Login & Deploy**
```bash
cd "c:\Users\asus\Downloads\Tugas 2"
vercel login
vercel --prod
```

#### **3. Follow Prompts**
```
? Set up and deploy "~/Tugas 2"? [Y/n] Y
? Which scope do you want to deploy to? [Your Account]
? What's your project's name? weather-app-brutalist
? In which directory is your code located? ./
? Want to override the settings? [y/N] N
```

---

## 🔗 EXPECTED LIVE URLs

### **Main Application**
- **Primary:** `https://tugas-02.vercel.app/`
- **TypeScript App:** `https://tugas-02.vercel.app/index.html`
- **Pure HTML App:** `https://tugas-02.vercel.app/weather-app-complete.html`
- **Architecture Demo:** `https://tugas-02.vercel.app/architecture-visualization.html`

### **Custom Domain (Optional)**
- Bisa set custom domain di Vercel dashboard
- Example: `weather-brutalist.yourdomain.com`

---

## ⚙️ VERCEL CONFIGURATION EXPLAINED

### **vercel.json Settings**
```json
{
  "version": 2,
  "name": "weather-app-brutalist",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "dist" }
    }
  ],
  "routes": [
    {
      "src": "/architecture-visualization.html",
      "dest": "/architecture-visualization.html"
    },
    {
      "src": "/weather-app-complete.html", 
      "dest": "/weather-app-complete.html"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### **Build Process**
```
1. npm install - Install dependencies
2. npm run build - Compile TypeScript
3. Copy HTML/CSS to dist/ - Static assets
4. Deploy dist/ folder - Production build
```

---

## 🔄 UPDATE DEPLOYMENT

### **Automatic Deployment**
- Setiap push ke main branch = auto deploy
- Vercel detects changes automatically
- No manual intervention needed

### **Manual Redeploy**
```bash
cd "c:\Users\asus\Downloads\Tugas 2"
git add .
git commit -m "update: your changes"
git push origin main
# Vercel auto-deploys dalam 2-3 menit
```

---

## 📊 POST-DEPLOYMENT CHECKLIST

### **✅ Test All URLs**
- [ ] Main app loads correctly
- [ ] Weather API integration works
- [ ] Architecture visualization accessible
- [ ] Pure HTML version functional
- [ ] Responsive design on mobile
- [ ] Error handling works

### **📱 Share URLs**
```markdown
🌤️ Live Demo - Weather App Brutalist:
- Main App: https://tugas-02.vercel.app/
- Architecture: https://tugas-02.vercel.app/architecture-visualization.html
- Pure HTML: https://tugas-02.vercel.app/weather-app-complete.html
- GitHub: https://github.com/otaruram/Tugas_02

Built with TypeScript, Brutalist Design, Zero Dependencies
```

---

## 🎯 UNTUK VIDEO PRESENTASI

### **Mention Live Demo**
```
"Aplikasi ini sudah live di production pada URL:
https://tugas-02.vercel.app

Deployed menggunakan Vercel dengan:
✓ Automatic deployment dari GitHub
✓ Global CDN untuk performance optimal  
✓ HTTPS encryption by default
✓ Zero configuration deployment

Semua fitur yang sudah kita bahas bisa diakses langsung
di live demo tersebut."
```

### **Architecture Benefits for Production**
```
✓ Zero dependencies = Faster build times
✓ Single file architecture = Easy deployment
✓ Static site = Global CDN distribution
✓ TypeScript = Type-safe production code
✓ Responsive design = Works on all devices
```

---

## 🔧 TROUBLESHOOTING

### **Build Fails**
```bash
# Check build locally first
npm run build
npm run preview

# If works locally, check vercel logs
vercel logs [deployment-url]
```

### **API CORS Issues**
- Open-Meteo API supports CORS
- No additional configuration needed
- If issues, check browser dev tools

### **Routing Issues**
- All routes configured in vercel.json
- SPA routing handled automatically
- Static files served correctly

---

## 🎉 DEPLOYMENT SUCCESS!

**Repository:** https://github.com/otaruram/Tugas_02  
**Live Demo:** https://tugas-02.vercel.app/ (after deployment)

**Follow langkah-langkah di atas untuk deploy ke Vercel! 🚀**