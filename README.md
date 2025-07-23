Welcome to **TraceLog**, a web analytics platform that combines user behavior tracking with AI to provide deeper insights than traditional tools.

This quick-start guide covers everything you need to integrate TraceLog into your project in minutes.

## 🔀 Choose Your Setup Mode

### 🌐 **Option A: Managed** (Recommended)
Dashboard, AI insights, easy setup. Data processed by TraceLog.

### 🏠 **Option B: Self-Hosted**
Full data control, no external dependencies. You manage everything.

## 📦 Installation

```bash
npm install @tracelog/client
```

## 🌐 Option A: Managed

1. Sign up at [tracelog.io](https://tracelog.io)
2. Get your Project ID from your dashboard

```javascript
import { TraceLog } from '@tracelog/client';

TraceLog.init({
  id: 'your-project-id' // Your Project ID from tracelog.io
});

TraceLog.event('button_click', { buttonId: 'subscribe-btn' });
```

### Optional: Set Up a Custom Subdomain for Browser Compatibility

To prevent browser restrictions, it’s highly recommended to create a CNAME record in your DNS settings:

| Host               | Type  | Value             |
| ------------------ | ----- | ----------------- |
| `YOUR_TRACELOG_ID` | CNAME | `mdw.tracelog.io` |

Replace `YOUR_TRACELOG_ID` with the ID provided in your TraceLog account. This setup helps ensure reliable event tracking across all browsers.

## 🏠 Option B: Self-Hosted

**No TraceLog account needed** - all data goes to your servers.

```javascript
import { TraceLog } from '@tracelog/client';

// Basic setup - events go to your API
TraceLog.init({
  apiUrl: 'https://analytics.example.com/tracelog'
});

// With remote config from your backend
TraceLog.init({
  apiUrl: 'https://analytics.example.com/tracelog',
  remoteConfigApiUrl: 'https://analytics.example.com/config'
});

// With static config
TraceLog.init({
  apiUrl: 'https://analytics.example.com/tracelog',
  samplingRate: 1,
  excludedUrlPaths: ['/admin']
});

TraceLog.event('button_click', { buttonId: 'subscribe-btn' });
```

### Configuration Rules

**Self-hosted mode:**
- ❌ Don't use `id` field (causes error)
- ✅ `apiUrl` is required
- ⚠️ `remoteConfigApiUrl` only works with `apiUrl`

**Both modes:**
- ⚠️ `TraceLog.init()` can only be called once
- ⚠️ `sessionTimeout` uses milliseconds (min: 30000ms)
- ⚠️ Use `allowHttp: true` only for development

### Troubleshooting
- **CORS errors**: Add `Access-Control-Allow-Origin` headers to your server
- **Config errors**: Ensure `remoteConfigApiUrl` returns valid JSON
- **HTTPS blocked**: Set `allowHttp: true` for development endpoints

---

## 📖 Documentation

* [API Reference](https://www.tracelog.io/docs?guide=api)
* [Advanced Configuration](https://www.tracelog.io/docs?guide=advanced-configuration)  
* [Best Practices](https://www.tracelog.io/docs?guide=best-practices)
