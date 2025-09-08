# NextJS Free Trial Template

A modern, responsive NextJS template for SaaS free trial landing pages, built with Cursor AI and optimized for Vercel deployment.

## 🚀 Live Demo

Check out the live demo: [https://www.linkhouse.store/](https://www.linkhouse.store/)

## ✨ Features

- **Modern Design**: Clean, professional UI with Tailwind CSS
- **Responsive**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety and better development experience
- **Analytics Ready**: Built-in Vercel Analytics integration
- **Form Handling**: Web3Forms integration for contact forms
- **SEO Optimized**: Proper meta tags and structured data
- **Fast Performance**: Optimized for Core Web Vitals

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.2 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Analytics**: Vercel Analytics
- **Forms**: Web3Forms
- **Deployment**: Vercel (recommended)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/nextjs-freetrial-template.git
   cd nextjs-freetrial-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` and add your Web3Forms access key:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 🔧 Configuration

### Web3Forms Setup

1. Go to [Web3Forms](https://web3forms.com/)
2. Sign up for a free account
3. Get your access key from the dashboard
4. Add it to your `.env.local` file:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

### Customization

- **Content**: Edit the pages in the `app/` directory
- **Styling**: Modify `app/globals.css` or use Tailwind classes
- **Images**: Replace images in the `public/` directory
- **Analytics**: Update Google Tag Manager ID in `app/layout.tsx`

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with analytics
│   ├── page.tsx             # Home page
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   ├── thank-you/
│   │   └── page.tsx         # Thank you page
│   └── utils/
│       └── analytics.ts     # Analytics utilities
├── public/                  # Static assets
├── .env.example            # Environment variables template
└── README.md
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

This template works with any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🎨 Customization Guide

### Changing Colors
Update the color scheme in `app/globals.css` or use Tailwind's color utilities.

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Export a default React component

### Modifying Forms
The contact form in `app/thank-you/page.tsx` uses Web3Forms. You can customize the form fields and styling as needed.

## 📊 Analytics

The template includes:
- **Vercel Analytics**: Automatic performance and usage analytics
- **Google Tag Manager**: Ready for custom tracking (update GTM ID in `app/layout.tsx`)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Cursor AI](https://cursor.sh/)
- Designed for [Vercel](https://vercel.com/)
- Icons and assets from various sources
- Inspired by modern SaaS landing pages

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Visit [Web3Forms documentation](https://web3forms.com/docs)

---

**Made with ❤️ using Cursor AI for Vercel**