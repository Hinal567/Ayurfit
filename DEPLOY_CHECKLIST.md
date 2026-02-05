# Quick Deployment Checklist

## ✅ Pre-Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Backend CSV file (`backend/dataset/data.csv`) is committed
- [ ] All dependencies listed in `requirements.txt` and `package.json`
- [ ] Environment variables documented in `.env.example`

## 🚀 Deployment Steps

### 1. Backend (Render)
- [ ] Create Web Service on Render
- [ ] Set Root Directory: `backend`
- [ ] Build: `pip install -r requirements.txt`
- [ ] Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- [ ] Copy backend URL: `https://______.onrender.com`

### 2. Frontend (Vercel)
- [ ] Import GitHub repo to Vercel
- [ ] Set Root Directory: `frontend`
- [ ] Add env var: `NEXT_PUBLIC_API_URL` = `https://______.onrender.com`
- [ ] Deploy

### 3. Test
- [ ] Visit your Vercel app
- [ ] Test symptom analysis
- [ ] Verify results display correctly

## 📝 URLs

**Backend**: https://______.onrender.com
**Frontend**: https://______.vercel.app

## 🔄 To Update

```bash
git add .
git commit -m "Your changes"
git push
```

Both Vercel and Render will auto-deploy!

---

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.
