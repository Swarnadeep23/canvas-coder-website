# 🎨 CANVAS CODER - Professional Web Development

A modern, minimalist website built with Next.js and the NOIR Design System. Clean, professional web experiences with a focus on typography and negative space.

## ✨ Features

- **Modern Design System** - NOIR-inspired minimalist-dark theme
- **Interactive 3D Background** - Three.js ShapeBlur component
- **Text Typing Animation** - Dynamic hero text effects
- **Contact Form Integration** - EmailJS-powered contact system
- **Responsive Design** - Mobile-first approach
- **Shiny Navigation** - Glowing text effects
- **MagicBento Cards** - Glassmorphism UI components
- **Interactive Profile Card** - 3D tilt effects and animations

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Modules
- **UI Components**: shadcn/ui
- **3D Graphics**: Three.js
- **Email Service**: EmailJS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Netlify

## 🎯 Pages

- **Home** - Landing page with hero, services, and contact sections
- **Services** - Detailed service offerings
- **About** - Company mission and values
- **Contact** - Contact form with interactive profile card

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/yourusername/canvas-coder-website.git
cd canvas-coder-website

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## 🌐 Deployment

### Netlify (Recommended)
1. Push code to GitHub
2. Connect Netlify to your GitHub repository
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy automatically on every push

### Environment Variables
Create `.env.local` with:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🎨 Design System

### Color Palette
- **Primary**: #000000 (Background), #1a1a1a (Surface)
- **Text**: #ffffff (White), #888888 (Muted)
- **Accent**: #ff4500 (Orange), #ff6633 (Hover)

### Typography
- **Hero**: System fonts with responsive sizing
- **Hierarchy**: Clear visual hierarchy through spacing
- **Principles**: Minimalism, contrast, consistency

## 📱 Responsive Design

- **Mobile-first** approach
- **Breakpoints**: 768px, 1024px, 1200px
- **Grid system**: 12-column responsive layout
- **Touch-friendly** interactions

## 🔧 Customization

### Components
- `ShapeBlur` - Interactive 3D background
- `TextType` - Typing animation component
- `ProfileCard` - Interactive profile display
- `ContactForm` - Email integration

### Styling
- CSS Modules for component-specific styles
- Tailwind CSS for utility classes
- Custom CSS variables for theming

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: swarnadeepmaity67@gmail.com
- **Website**: [CANVAS CODER](https://your-domain.com)

---

**Built with ❤️ using Next.js and the NOIR Design System**
