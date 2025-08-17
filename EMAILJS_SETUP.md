# 📧 EmailJS Setup Guide for CANVAS CODER

## 🚀 **Step-by-Step Setup:**

### **1. Sign Up for EmailJS**
- Go to [emailjs.com](https://emailjs.com)
- Click "Sign Up" and create a free account
- Verify your email address

### **2. Create an Email Service**
- In your EmailJS dashboard, go to "Email Services"
- Click "Add New Service"
- Choose your email provider (Gmail, Outlook, etc.)
- Connect your email account
- **Save the Service ID** (looks like: `service_xxxxxxx`)

### **3. Create an Email Template**
- Go to "Email Templates"
- Click "Create New Template"
- Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

New message from CANVAS CODER website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Sent from CANVAS CODER contact form
Time: {{current_date}}

---
Reply directly to: {{from_email}}
```

- **Save the Template ID** (looks like: `template_xxxxxxx`)

### **4. Get Your Public Key**
- Go to "Account" → "API Keys"
- **Copy your Public Key** (looks like: `public_key_xxxxxxx`)

### **5. Update the Contact Form**
Replace these placeholders in `src/app/components/ContactForm.tsx`:

```typescript
// Replace YOUR_PUBLIC_KEY with your actual public key
window.emailjs.init('YOUR_PUBLIC_KEY');

// Replace service_1234567 with your actual service ID
'service_1234567'

// Replace template_1234567 with your actual template ID
'template_1234567'
```

## ✅ **What You'll Get:**
- **Instant email notifications** at `swarnadeepmaity67@gmail.com`
- **Beautiful email templates** with customer details
- **No API key issues** - works directly from browser
- **Free tier** - 200 emails per month

## 🔧 **Example Configuration:**
```typescript
window.emailjs.init('public_key_abc123');
// ...
'service_xyz789', // Your service ID
'template_def456', // Your template ID
```

## 🎯 **Benefits of EmailJS:**
- ✅ **No server-side setup needed**
- ✅ **Works immediately after configuration**
- ✅ **Beautiful email templates**
- ✅ **Reliable delivery**
- ✅ **Free tier available**

## 📱 **Test Your Setup:**
1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your email at `swarnadeepmaity67@gmail.com`
4. You should receive the customer's message instantly!

---

**Need help?** The EmailJS dashboard is very user-friendly and guides you through each step! 