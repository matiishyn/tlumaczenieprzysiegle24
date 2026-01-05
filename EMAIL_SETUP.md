# Email Setup Guide

The quote form now sends emails using **Resend**. Follow these steps to complete the setup:

## 1. Create Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Free tier includes:
   - 100 emails/day
   - 3,000 emails/month
   - All features included

## 2. Get API Key

1. Log in to Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Copy the API key (starts with `re_`)

## 3. Configure Environment Variable

Create a `.env.local` file in the project root:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

**Important:** Never commit this file to git! It's already in `.gitignore`.

## 4. Domain Verification (Production Only)

For production, verify your domain to send from `@tlumaczenieprzysiegle24.pl`:

1. In Resend dashboard, go to **Domains**
2. Click **Add Domain**
3. Enter: `tlumaczenieprzysiegle24.pl`
4. Add the DNS records shown (SPF, DKIM, DMARC)
5. Wait for verification (usually 5-10 minutes)

### DNS Records to Add:
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.resend.com ~all

Type: TXT  
Name: resend._domainkey
Value: [provided by Resend]

Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none
```

## 5. Testing

### Test Locally:

```bash
# Start development server
npm run dev

# Go to http://localhost:3000
# Fill out the quote form and submit
```

### Test API Directly:

```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "phone": "+48 123 456 789",
    "message": "This is a test message",
    "locale": "pl"
  }'
```

## 6. Development Tips

**Without Domain Verification:**
- You can only send emails to your own verified email address
- Perfect for testing during development

**After Domain Verification:**
- You can send to any email address
- Emails will come from `noreply@tlumaczenieprzysiegle24.pl`
- Better deliverability and professional appearance

## 7. What Happens When Form is Submitted?

1. **Customer fills form** with name, email, phone, message
2. **Two emails are sent:**
   - **To business owner** (`tlumaczenieprzysiegle24@gmail.com`):
     - Contains all form details
     - Formatted with HTML styling
     - Customer's email as reply-to address
   - **To customer** (confirmation):
     - Thank you message
     - Confirms request received
     - Includes business contact info
3. **Form shows success message** and resets

## 8. Troubleshooting

### "Email service not configured" error
- Check that `RESEND_API_KEY` is set in `.env.local`
- Restart the development server after adding the key

### Emails not arriving
- Check Resend dashboard logs for delivery status
- Verify email addresses are correct
- Check spam folder
- For production, ensure domain is verified

### Rate limits exceeded
- Free tier: 100 emails/day
- Upgrade to paid plan if needed ($20/month for 50k emails)

## 9. Production Deployment

When deploying to production (Vercel, etc.):

1. Add `RESEND_API_KEY` to environment variables in hosting platform
2. Verify domain in Resend
3. Update DNS records
4. Test thoroughly before going live

## Support

- Resend Documentation: [resend.com/docs](https://resend.com/docs)
- Resend Support: support@resend.com

