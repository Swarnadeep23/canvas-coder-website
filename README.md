# NOIR Design System Landing Page

A minimalist, modern landing page built with Next.js, featuring a custom Three.js ShapeBlur effect and Supabase database integration.

## Features

- **6 Custom Sections**: Navigation, Hero, Logo Grid, Services, About, Contact
- **Three.js ShapeBlur**: Interactive background effect in hero section
- **Supabase Database**: Contact form submissions stored in PostgreSQL
- **NOIR Design System**: Minimalist-dark theme with high contrast
- **Fully Responsive**: Mobile-first design approach
- **TypeScript**: Full type safety throughout the application

## Tech Stack

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Three.js** for WebGL effects
- **Supabase** for database and authentication
- **CSS Modules** for styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account

### Installation

1. **Clone and install dependencies:**
   ```bash
   cd noir-next
   npm install
   ```

2. **Set up Supabase:**
   - Create a new Supabase project
   - Get your project URL and anon key
   - Create a table called `contact_submissions` with columns:
     - `id` (uuid, primary key)
     - `name` (text)
     - `email` (text)
     - `message` (text)
     - `created_at` (timestamp with timezone)

3. **Configure environment variables:**
   Create `.env.local` in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=https://nwlkmtsuiipznpxjcbjh.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```

4. **Update Supabase configuration:**
   Edit `src/lib/supabase.ts` and replace `your-anon-key-here` with your actual anon key.

### Database Setup

Run this SQL in your Supabase SQL editor:

```sql
-- Create contact_submissions table
CREATE TABLE contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (optional)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (adjust as needed)
CREATE POLICY "Allow inserts" ON contact_submissions
  FOR INSERT WITH CHECK (true);
```

### Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
noir-next/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── ShapeBlur.tsx      # Three.js WebGL effect
│   │   │   └── ContactForm.tsx    # Database-connected form
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts       # API endpoint for form
│   │   ├── page.tsx               # Main landing page
│   │   ├── layout.tsx             # Root layout
│   │   ├── globals.css            # Global styles
│   │   └── page.module.css        # Component styles
│   └── lib/
│       └── supabase.ts            # Database configuration
├── public/                        # Static assets
└── package.json
```

## Customization

### ShapeBlur Effect
- Modify `variation` prop (0-3) for different shapes
- Adjust `shapeSize`, `roundness`, `borderSize` for styling
- Change opacity in CSS for visibility

### Styling
- All styles are in `src/app/page.module.css`
- Follows NOIR Design System color palette
- Responsive breakpoints included

### Database
- Contact form submissions go to `contact_submissions` table
- API route handles server-side validation
- Success/error messages included

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Public anon key | Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key (server-side) | Yes |

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, check the Next.js and Supabase documentation, or create an issue in this repository.
