# API Routes

## Quote Form Email API

### Setup

1. **Get Resend API Key:**
   - Sign up at [resend.com](https://resend.com)
   - Go to API Keys section
   - Create a new API key

2. **Configure Environment Variable:**
   Create a `.env.local` file in the project root:
   ```bash
   RESEND_API_KEY=re_your_api_key_here
   ```

3. **Verify Domain (for production):**
   - In Resend dashboard, add your domain: `tlumaczenieprzysiegle24.pl`
   - Add DNS records as instructed
   - Once verified, emails will be sent from `noreply@tlumaczenieprzysiegle24.pl`

4. **For Development:**
   - Resend allows sending to your own email without domain verification
   - Update the `to` field in `/app/api/quote/route.ts` to your email for testing

### Endpoints

#### POST `/api/quote`

Sends quote request email to business owner and confirmation email to customer.

**Request Body:**
```json
{
  "name": "Jan Kowalski",
  "email": "jan@example.com",
  "phone": "+48 123 456 789",
  "message": "Potrzebuję tłumaczenia aktu urodzenia...",
  "locale": "pl"
}
```

**Response (Success):**
```json
{
  "success": true,
  "data": { "id": "email_id_from_resend" }
}
```

**Response (Error):**
```json
{
  "error": "Error message"
}
```

### Free Tier Limits

Resend free tier includes:
- 100 emails per day
- 3,000 emails per month
- All features included

### Testing

Test the API route:
```bash
curl -X POST http://localhost:3000/api/quote \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "+48 123 456 789",
    "message": "Test message",
    "locale": "pl"
  }'
```

