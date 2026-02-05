# 🚀 Deployment Guide - AyurFit

## Overview
- **Frontend**: Deploy to **Vercel**
- **Backend**: Deploy to **Render**

---

## 📦 Prerequisites

1. **GitHub Account** - Push your code to GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Render Account** - Sign up at [render.com](https://render.com)

---

## 🔧 Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/ayurfit.git
git branch -M main
git push -u origin main
```

---

## 🐍 Step 2: Deploy Backend to Render

### Option A: Using Render Dashboard

1. **Go to Render Dashboard**: https://dashboard.render.com/
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure:**
   - **Name**: `ayurfit-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Python 3`
   - **Build Command**: `pip install -r requirements.txt`
   - **Start Command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
   - **Plan**: Free

5. **Click "Create Web Service"**
6. **Wait for deployment** (5-10 minutes)
7. **Copy your backend URL** (e.g., `https://ayurfit-backend.onrender.com`)

### Option B: Using render.yaml (Blueprint)

1. In Render Dashboard, click **"New +" → "Blueprint"**
2. Connect your GitHub repo
3. Render will auto-detect `backend/render.yaml`
4. Click **"Apply"**

⚠️ **Important**: Render free tier may sleep after 15 minutes of inactivity. First request may be slow.

---

## 🌐 Step 3: Deploy Frontend to Vercel

### Using Vercel Dashboard

1. **Go to Vercel**: https://vercel.com/new
2. **Import your GitHub repository**
3. **Configure:**
   - **Framework Preset**: `Next.js`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)

4. **Add Environment Variable:**
   - **Name**: `NEXT_PUBLIC_API_URL`
   - **Value**: `https://your-backend-url.onrender.com` (from Step 2)

5. **Click "Deploy"**
6. **Wait for deployment** (2-3 minutes)

### Using Vercel CLI (Alternative)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
cd frontend
vercel

# Follow prompts:
# - Link to existing project? No
# - Project name: ayurfit
# - Directory: ./
# - Want to override settings? No
```

---

## 🔐 Step 4: Environment Variables

### Frontend (Vercel)
In Vercel Dashboard → Your Project → Settings → Environment Variables:

```
NEXT_PUBLIC_API_URL=https://ayurfit-backend.onrender.com
```

After adding, **redeploy** your frontend.

---

## ✅ Step 5: Test Deployment

1. Visit your Vercel URL (e.g., `https://ayurfit.vercel.app`)
2. Enter symptoms and click "Analyze"
3. Check if results load correctly

### Troubleshooting

**Frontend can't connect to backend:**
- Check CORS settings in `backend/main.py` (already set to allow all origins)
- Verify `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- Check Render logs for backend errors

**Backend errors on Render:**
- Check Render logs: Dashboard → Your Service → Logs
- Verify CSV file is included in git
- Ensure all dependencies are in `requirements.txt`

**Render service sleeping:**
- First request after 15 min may take 30-60 seconds
- Consider upgrading to paid plan for 24/7 uptime
- Or use a cron job to ping your service every 10 minutes

---

## 🔄 Updating Your Deployment

### Backend Updates
Push to GitHub → Render auto-deploys

### Frontend Updates
Push to GitHub → Vercel auto-deploys

Or manually trigger:
```bash
cd frontend
vercel --prod
```

---

## 📊 Monitoring

### Vercel
- **Dashboard**: https://vercel.com/dashboard
- **Analytics**: Built-in analytics available
- **Logs**: Real-time function logs

### Render
- **Dashboard**: https://dashboard.render.com/
- **Logs**: Real-time service logs
- **Metrics**: CPU, Memory, Response time

---

## 💰 Cost

- **Vercel**: Free tier includes:
  - Unlimited deployments
  - 100 GB bandwidth/month
  - Automatic HTTPS

- **Render**: Free tier includes:
  - 750 hours/month
  - Sleeps after 15 min inactivity
  - Automatic HTTPS

Both are **FREE** for personal projects! 🎉

---

## 🆘 Need Help?

**Common Issues:**

1. **Build fails on Vercel**: Check Node.js version in `package.json`
2. **Backend crashes**: Check Render logs for Python errors
3. **CORS errors**: Verify backend CORS middleware settings
4. **Slow first load**: Render free tier wakes from sleep (30-60s)

**Resources:**
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- FastAPI Docs: https://fastapi.tiangolo.com/
