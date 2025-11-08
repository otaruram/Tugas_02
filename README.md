# 🌤️ Weather App Brutalist - Jakarta Weather Dashboard

![Project Banner](https://img.shields.io/badge/Weather%20App-Brutalist%20Design-000000?style=for-the-badge&logo=weather&logoColor=white)
![Tech Stack](https://img.shields.io/badge/Tech%20Stack-HTML%20%7C%20CSS%20%7C%20JavaScript-ffffff?style=for-the-badge)
![Build Status](https://img.shields.io/badge/Build-Passing-00ff00?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## 🎯 Project Overview

**Weather App Brutalist** adalah aplikasi cuaca modern yang menampilkan data real-time untuk Jakarta dengan desain brutalist yang bold dan functional. Aplikasi ini dibangun dengan prinsip **zero dependencies**, **single-file architecture**, dan **performance-first approach**.

### 🌐 **(https://tugasku-kedua-ya.vercel.app/)**


## ✨ Features

### 🎨 **Design Features**
- ✅ **Brutalist Design Philosophy** - Bold, functional, minimal
- ✅ **Pure Black & White Palette** - High contrast for accessibility
- ✅ **Bold Typography System** - Arial Black with strategic spacing
- ✅ **Geometric Layout** - Thick borders and clean lines
- ✅ **Responsive Grid System** - Works on all devices

### ⚡ **Technical Features**
- ✅ **Zero Dependencies** - No external libraries
- ✅ **Single File Architecture** - Easy deployment
- ✅ **Real-time API Integration** - Open-Meteo Weather API
- ✅ **Comprehensive Error Handling** - Graceful error states
- ✅ **TypeScript Support** - Type-safe development
- ✅ **Progressive Enhancement** - Works without JavaScript

### 📊 **Performance Metrics**
- 📦 **File Size:** ~15KB (compressed)
- ⚡ **Load Time:** < 100ms (local)
- 🌐 **Browser Support:** 95%+ (modern browsers)
- 📱 **Responsive:** 3 breakpoints (mobile, tablet, desktop)

---

## 🏗️ Architecture

### **System Architecture (4-Layer Design)**

```
┌─────────────────────────────────────────┐
│           PRESENTATION LAYER            │
│     HTML5 Structure & Components       │
├─────────────────────────────────────────┤
│             STYLING LAYER               │
│       CSS3 Brutalist Design System     │
├─────────────────────────────────────────┤
│              LOGIC LAYER                │
│    JavaScript ES6+ & TypeScript        │
├─────────────────────────────────────────┤
│              DATA LAYER                 │
│       API Integration & Processing      │
└─────────────────────────────────────────┘
```

### **Data Flow Architecture**

```
USER INTERACTION → EVENT HANDLER → API CALL → DATA PROCESSING → DOM UPDATE
```

### **Component Structure**

```
weather-app/
├── Header Component (Brand & Title)
├── Controls Component (Status & Actions)
├── Data Table Component (Weather Display)
└── Info Component (Metadata & Credits)
```

---

## 🚀 Quick Start

### **Prerequisites**
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional for file:// protocol issues)

### **Installation & Setup**

1. **Clone Repository**
```bash
git clone https://github.com/otaruram/Project-001.git
cd Project-001/"Tugas 2"
```

2. **Option A: TypeScript Version**
```bash
npm install
npm run build
npm run serve
```

3. **Option B: Pure HTML Version**
```bash
# Start any local server
python -m http.server 9000
# OR
npx http-server . -p 9000
```

4. **Access Applications**
- Architecture: `http://localhost:9000/architecture-visualization.html`
- Weather App: `http://localhost:9000/weather-app-complete.html`
- TypeScript: `http://localhost:8080`

---

## 📋 Usage Guide

### **Weather Application**
1. **Refresh Data** - Click "REFRESH DATA" untuk load cuaca Jakarta
2. **View Data** - Lihat data 24 jam ke depan dengan waktu dan suhu
3. **Responsive Test** - Resize browser untuk test responsive design
4. **Error Handling** - Disconnect internet untuk test error states

### **Architecture Visualization**
1. **Navigation** - Click tabs atau tekan 1-5 untuk pindah section
2. **Interactive Components** - Click komponen untuk detailed explanation
3. **Demo Buttons** - Test semua fitur aplikasi
4. **Code Examples** - Lihat implementation details

### **Debug Utilities**
```javascript
// Available in browser console
window.debug.getAppState()    // View application state
window.debug.simulateError()  // Test error handling
window.debug.clearData()      // Clear table data
```

---

## 🛠️ Technology Stack

### **Core Technologies**
| Technology | Version | Purpose |
|------------|---------|---------|
| **HTML5** | Latest | Semantic structure & accessibility |
| **CSS3** | Latest | Brutalist design system |
| **JavaScript** | ES6+ | Application logic & API integration |
| **TypeScript** | 5.2+ | Type safety & development experience |

### **APIs & Services**
| Service | Purpose | Documentation |
|---------|---------|---------------|
| **Open-Meteo** | Weather data for Jakarta | [API Docs](https://open-meteo.com/en/docs) |
| **Fetch API** | HTTP client for API calls | [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) |

### **Development Tools**
| Tool | Purpose |
|------|---------|
| **TypeScript Compiler** | Type checking & compilation |
| **HTTP-Server** | Local development server |
| **ESLint** | Code quality & consistency |

---

## 📁 Project Structure

```
weather-app-brutalist/
├── 📄 index.html                      # TypeScript version entry
├── 📄 weather-app-complete.html       # Pure HTML version
├── 📄 architecture-visualization.html # Architecture demo
├── 📄 styles.css                      # Brutalist design system
├── 📁 src/
│   └── 📄 main.ts                     # TypeScript application logic
├── 📁 dist/                           # Compiled JavaScript output
├── 📄 package.json                    # Project dependencies
├── 📄 tsconfig.json                   # TypeScript configuration
├── 📄 README.md                       # This file
└── 📁 docs/
    ├── 📄 ARCHITECTURE_DOCUMENTATION.md
    ├── 📄 PRESENTATION_GUIDE.md
    ├── 📄 PRESENTATION_SCRIPT.md
    └── 📄 VIDEO_SUMMARY.md
```

---

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--black: #000000;    /* Text, borders, backgrounds */
--white: #ffffff;    /* Backgrounds, text on dark */
--gray: #f0f0f0;     /* Even table rows */
--dark-gray: #666;   /* Cool temperature indicators */
```

### **Typography Scale**
```css
/* Headings */
h1: 4rem, 900 weight, 10px letter-spacing
h2: 2.5rem, 900 weight, 5px letter-spacing
h3: 1.5rem, 900 weight, 3px letter-spacing

/* Body */
body: 1rem, bold weight, Arial Black family
code: 0.9rem, Courier New family
```

### **Responsive Breakpoints**
```css
/* Mobile First Approach */
mobile: 0px - 480px
tablet: 481px - 768px
desktop: 769px+
```

---

## ⚡ Performance Optimization

### **Bundle Analysis**
- **Total Size:** ~15KB compressed
- **Critical CSS:** Inlined for fast rendering
- **JavaScript:** Minified ES6+ modules
- **Images:** None (pure CSS design)
- **Fonts:** System fonts only

### **Loading Strategy**
1. **Critical HTML/CSS:** Inline for immediate rendering
2. **JavaScript:** Defer loading until DOM ready
3. **API Calls:** On-demand with loading states
4. **Error Boundaries:** Graceful degradation

### **Caching Strategy**
- **Static Assets:** Long-term browser cache
- **API Responses:** In-memory cache with timestamp
- **User Preferences:** localStorage persistence

---

## 🧪 Testing

### **Manual Testing Checklist**
- ✅ **API Integration:** Data loads successfully
- ✅ **Error Handling:** Network errors handled gracefully
- ✅ **Responsive Design:** Works on mobile, tablet, desktop
- ✅ **Accessibility:** High contrast, keyboard navigation
- ✅ **Performance:** Fast loading, smooth interactions
- ✅ **Cross-browser:** Chrome, Firefox, Safari, Edge

### **Browser Support Matrix**
| Browser | Version | Status |
|---------|---------|--------|
| Chrome | 90+ | ✅ Full Support |
| Firefox | 88+ | ✅ Full Support |
| Safari | 14+ | ✅ Full Support |
| Edge | 90+ | ✅ Full Support |
| Opera | 76+ | ✅ Full Support |

---

## 🚀 Deployment

### **Static Hosting Options**
- **GitHub Pages** - Free hosting untuk public repos
- **Netlify** - Drag & drop deployment
- **Vercel** - Git integration dengan auto-deploy
- **Firebase Hosting** - Google Cloud integration

### **Deployment Steps**
1. **Build TypeScript** (optional)
```bash
npm run build
```

2. **Upload Files**
- Upload semua HTML files
- Include CSS dan JS files
- No server-side requirements

3. **Configure Hosting**
- Set `index.html` sebagai entry point
- Enable HTTPS untuk API calls
- Configure custom domain (optional)

### **Environment Variables**
```javascript
// Configuration dapat di-customize
const CONFIG = {
    apiUrl: 'https://api.open-meteo.com/v1/forecast...',
    maxHours: 24,
    temperatureThreshold: { hot: 30, cool: 20 },
    locale: 'id-ID'
};
```

---

## 🤝 Contributing

### **Development Workflow**
1. **Fork** repository
2. **Create feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit changes** (`git commit -m 'Add amazing feature'`)
4. **Push to branch** (`git push origin feature/amazing-feature`)
5. **Open Pull Request**

### **Code Standards**
- **TypeScript:** Strict mode enabled
- **CSS:** BEM methodology untuk naming
- **JavaScript:** ES6+ features only
- **Comments:** JSDoc format untuk functions

### **Commit Convention**
```
feat: add new weather data visualization
fix: resolve API timeout issues
docs: update installation guide
style: improve responsive design
perf: optimize DOM rendering
test: add error handling tests
```

---

## 📚 Documentation

### **Available Documentation**
- 📋 **[Architecture Documentation](docs/ARCHITECTURE_DOCUMENTATION.md)** - Detailed system design
- 🎬 **[Presentation Guide](docs/PRESENTATION_GUIDE.md)** - Video presentation walkthrough
- 📝 **[Presentation Script](docs/PRESENTATION_SCRIPT.md)** - Step-by-step coding demo
- 📊 **[Video Summary](docs/VIDEO_SUMMARY.md)** - Project highlights untuk video

### **API Documentation**
- **Open-Meteo API:** [https://open-meteo.com/en/docs](https://open-meteo.com/en/docs)
- **Endpoint:** `GET /v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m`
- **Response Format:** JSON dengan time dan temperature arrays

---

## 🎯 Use Cases

### **Educational**
- ✅ Learn modern JavaScript architecture
- ✅ Understand API integration patterns
- ✅ Study responsive design principles
- ✅ Explore brutalist design methodology

### **Professional**
- ✅ Portfolio showcase project
- ✅ Client presentation template
- ✅ Code architecture demonstration
- ✅ Performance optimization example

### **Personal**
- ✅ Daily weather checking untuk Jakarta
- ✅ Responsive design testing
- ✅ Browser compatibility testing
- ✅ API integration learning

---

## 🐛 Troubleshooting

### **Common Issues**

#### **API Not Loading**
```javascript
// Check browser console for errors
// Verify internet connection
// Test API endpoint directly:
fetch('https://api.open-meteo.com/v1/forecast?latitude=-6.2&longitude=106.8&hourly=temperature_2m')
```

#### **Responsive Issues**
```css
/* Verify viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* Check CSS media queries */
@media (max-width: 768px) { /* styles */ }
```

#### **TypeScript Compilation**
```bash
# Clear cache dan rebuild
rm -rf dist/ node_modules/
npm install
npm run build
```

---

## 📈 Roadmap

### **Planned Features**
- 🔄 **Auto-refresh** - Periodic data updates
- 🌍 **Multi-city** - Support untuk cities lain
- 📊 **Charts** - Visual temperature trends
- 🎨 **Themes** - Alternative color schemes
- 💾 **Offline** - Service worker untuk offline support
- 📱 **PWA** - Progressive Web App features

### **Performance Improvements**
- ⚡ **Lazy Loading** - Component-based loading
- 🗜️ **Compression** - Gzip/Brotli compression
- 📦 **Bundle Splitting** - Separate vendor chunks
- 🚀 **CDN** - Static asset optimization

---

## 📞 Support

### **Get Help**
- 📧 **Email:** [your-email@domain.com](mailto:your-email@domain.com)
- 💬 **GitHub Issues:** [Create an issue](https://github.com/otaruram/Project-001/issues)
- 📚 **Documentation:** Check docs/ folder
- 🎬 **Video Guide:** Available in repository

### **FAQ**
**Q: Kenapa tidak pakai framework seperti React?**
A: Single-file architecture memberikan zero dependencies, faster load time, dan easier deployment.

**Q: Bagaimana menambah cities lain?**
A: Modify CONFIG.apiUrl dengan latitude/longitude city yang diinginkan.

**Q: Apakah support offline?**
A: Currently tidak, tapi planned untuk future release dengan service workers.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Weather App Brutalist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

### **Inspiration & Resources**
- **[Open-Meteo](https://open-meteo.com/)** - Free weather API
- **[Brutalist Web Design](https://brutalistwebsites.com/)** - Design inspiration
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[MDN Web Docs](https://developer.mozilla.org/)** - Web standards reference

### **Special Thanks**
- Weather data provided by **Open-Meteo API**
- Typography inspiration from **brutalist design movement**
- Performance optimization techniques from **web.dev**
- Accessibility guidelines from **WCAG 2.1**

---

## 📊 Project Stats

![GitHub repo size](https://img.shields.io/github/repo-size/otaruram/Project-001?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/otaruram/Project-001?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/otaruram/Project-001?style=flat-square)
![GitHub pull requests](https://img.shields.io/github/issues-pr/otaruram/Project-001?style=flat-square)

**Built with ❤️ using pure web technologies**

---

*For more information, visit the [project documentation](docs/) or check out the [live demo](http://localhost:9000/architecture-visualization.html).*
