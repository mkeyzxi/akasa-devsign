import * as React from 'react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C0C0C] pt-16 pb-8 border-t border-white/10 text-white/70">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Akasa<span className="text-brand-primary">Dev</span>
              </span>
            </div>
            <p className="max-w-[300px] text-sm leading-relaxed">
              Bridging Visual Aesthetics with Powerful Code. Menghubungkan keindahan desain dengan kekuatan teknologi untuk menciptakan solusi digital berdampak.
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-between md:justify-around lg:justify-end lg:gap-24">
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm tracking-wide mb-2 uppercase">Navigasi</h4>
              <a href="#about" className="text-sm hover:text-white transition-colors">Tentang</a>
              <a href="#services" className="text-sm hover:text-white transition-colors">Layanan</a>
              <a href="#portfolio" className="text-sm hover:text-white transition-colors">Portfolio</a>
              <a href="#contact" className="text-sm hover:text-white transition-colors">Kontak</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-white font-semibold text-sm tracking-wide mb-2 uppercase">Layanan</h4>
              <a href="#services" className="text-sm hover:text-white transition-colors">Web Development</a>
              <a href="#services" className="text-sm hover:text-white transition-colors">Mobile App</a>
              <a href="#services" className="text-sm hover:text-white transition-colors">UI/UX Design</a>
              <a href="#services" className="text-sm hover:text-white transition-colors">Branding</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-center md:text-left">
            <p>&copy; {currentYear} Akasa Devsign. All rights reserved.</p>
            <p className="mt-1 text-xs text-white/50">Made with ❤️ in Makassar</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" aria-label="Behance" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 11.5c.34-.14.65-.35.9-.63.26-.28.46-.62.58-.98.1-.33.15-.68.15-1.04 0-1.44-.45-2.52-1.35-3.24C9.38 4.9 8 4.54 6.12 4.54H2v15h4.63c2.05 0 3.56-.42 4.53-1.25.96-.84 1.44-2.07 1.44-3.7 0-.58-.08-1.13-.25-1.65-.16-.5-.4-.95-.7-1.34-.33-.37-.73-.68-1.18-.93a4.2 4.2 0 0 0-.47-.17zM5.5 7.6h1c.42 0 .76.1.98.28.23.18.34.45.34.82 0 .36-.1.62-.3.78-.2.17-.5.26-.92.26H5.5V7.6zm1.38 8.84H5.5v-3h1.4c.54 0 .96.1 1.26.34.3.23.45.58.45 1.05 0 .5-.15.86-.45 1.1-.3.22-.72.33-1.28.33z"/><path d="M18.8 9.5c-1.3-.08-2.55.3-3.54 1.1-.9.76-1.43 1.86-1.52 3.06h8c-.02-.85-.35-1.65-.94-2.28-.58-.62-1.34-1.15-2.52-1.88M19 15.5c.74 0 1.46-.2 2.1-.56l.6 2.3c-.87.42-1.83.66-2.82.68-1.47 0-2.65-.45-3.54-1.36-.88-.9-1.32-2.16-1.32-3.76 0-1.55.43-2.8 1.3-3.74.86-.94 2-1.4 3.42-1.4 1.4 0 2.5.4 3.3 1.24.8.84 1.2 2.06 1.2 3.65v.9h-6c0 .7.25 1.27.75 1.7.5.42 1.1.63 1.8.63"/><path d="M16 5h5v2h-5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
