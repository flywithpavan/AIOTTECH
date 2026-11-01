# AIOTTECH SOLUTION — Website starter

Premium dark technology-themed React + Vite homepage and initial project catalogue.

## Run locally
1. Install Node.js 18 or newer.
2. Extract this folder.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL printed by Vite.

## Included in this first build
- Responsive dark technology homepage
- AIOTTECH AGRI and AIOTTECH PROJECTS divisions
- Featured project cards and domain categories
- Services, company profile, contact CTA and footer
- Starter project inventory in `src/data/products.js`

## Planned application structure
The following folders are recommended as the next implementation steps:

```text
src/
  components/       Shared header, footer, cards, forms
  pages/
    Home/
    Agri/
    Projects/
    ProductDetails/
    Services/
    About/
    Contact/
    Cart/
    Checkout/
    Customer/
    Admin/
  data/             Product and category seed data
  context/          Auth, cart and app state
  services/         API client, payment and upload adapters
  utils/            Validation, formatting and helpers
  styles.css
server/
  src/
    config/
    middleware/
    modules/
      auth/
      products/
      categories/
      cart/
      orders/
      payments/
      customers/
      enquiries/
      admin/
    routes/
    utils/
  uploads/
  database/
```

## Important launch checklist
- Replace stock image URLs with genuine AIOTTECH product photographs and demo videos.
- Verify project readiness, package contents, pricing and delivery terms before publishing.
- Add real company phone, email, social links and business address.
- Implement backend APIs, database migrations, authentication and role-based admin access.
- Integrate a payment gateway (for example Razorpay) using server-side order creation and webhook verification. Never expose secret keys in frontend code.
- Add shipping, refund, privacy, terms, warranty and support policies.
- Configure HTTPS, backups, logging, rate limiting and production hosting.

## Current status
This is the **homepage/UI foundation only**. Checkout, payment processing, customer login, admin authentication, database and order management are not yet implemented.
