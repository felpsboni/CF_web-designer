const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando atualização da logo FC Web Designer...');

// 1. Criar componente BrandLogo.tsx
const brandLogoPath = path.join(__dirname, 'src', 'components', 'common', 'BrandLogo.tsx');
const brandLogoContent = `interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  className?: string;
}

export function BrandLogo({ size = 'md', showSubtitle = true, className = '' }: BrandLogoProps) {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }[size];

  const titleSize = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-2xl',
  }[size];

  return (
    <div className={\`flex items-center gap-3 \${className}\`}>
      <div className={\`relative \${iconDimensions} rounded-xl p-1 bg-white border border-cyan-400 shadow-[0_0_15px_rgba(0,242,254,0.5)] flex items-center justify-center shrink-0\`}>
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          <g fill="#00B4D8">
            <circle cx="15" cy="18" r="3.5" />
            <circle cx="26" cy="18" r="3.5" />
            <circle cx="37" cy="18" r="3.5" />
            <rect x="47" y="14" width="40" height="8" rx="2.5" />
          </g>
          <line x1="10" y1="28" x2="90" y2="28" stroke="#00B4D8" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M16 38 H44 V48 H27 V56 H40 V66 H27 V86 H16 Z" fill="#0A2540" />
          <defs>
            <linearGradient id="c-grad-logo" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
          <path
            d="M78 48 C74 41 66 38 57 38 C43 38 34 49 34 62 C34 75 43 86 57 86 C67 86 75 81 79 74 L70 68 C67 73 63 76 57 76 C49 76 45 70 45 62 C45 54 49 48 57 48 C63 48 67 51 70 55 Z"
            fill="url(#c-grad-logo)"
          />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span className={\`font-display font-extrabold \${titleSize} tracking-tight text-white\`}>
            FC WEB
          </span>
          <span className={\`font-display font-light \${titleSize} tracking-tight text-cyan-400\`}>
            DESIGNER
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] tracking-wider text-slate-400 uppercase mt-0.5 font-medium">
            Carlos & Felipe
          </span>
        )}
      </div>
    </div>
  );
}
`;

fs.mkdirSync(path.dirname(brandLogoPath), { recursive: true });
fs.writeFileSync(brandLogoPath, brandLogoContent, 'utf8');
console.log('✔ Componente BrandLogo.tsx criado');

// 2. Criar Favicon SVG
const faviconPath = path.join(__dirname, 'public', 'favicon.svg');
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="none">
  <rect x="56" y="56" width="400" height="400" rx="90" fill="#FFFFFF" stroke="#00F2FE" stroke-width="20" />
  <g fill="#00B4D8">
    <rect x="110" y="112" width="16" height="16" rx="3" />
    <rect x="134" y="112" width="16" height="16" rx="3" />
    <rect x="158" y="112" width="16" height="16" rx="3" />
    <rect x="190" y="110" width="212" height="20" rx="6" />
  </g>
  <line x1="100" y1="146" x2="412" y2="146" stroke="#00B4D8" stroke-width="6" stroke-linecap="round" />
  <path d="M120 180 H250 V232 H172 V264 H240 V316 H172 V400 H120 Z" fill="#0F2B5C" />
  <path d="M390 230 C370 195 330 178 285 178 C215 178 170 235 170 305 C170 375 215 432 285 432 C335 432 375 410 395 375 L352 342 C338 365 315 380 285 380 C240 380 220 345 220 305 C220 265 240 230 285 230 C315 230 338 245 352 268 Z" fill="#00D2FF" />
</svg>`;

fs.mkdirSync(path.dirname(faviconPath), { recursive: true });
fs.writeFileSync(faviconPath, faviconSvg, 'utf8');
console.log('✔ Favicon gerado em public/favicon.svg');

// 3. Atualizar Header.tsx
const headerPath = path.join(__dirname, 'src', 'components', 'Header.tsx');
if (fs.existsSync(headerPath)) {
  let header = fs.readFileSync(headerPath, 'utf8');
  if (!header.includes('BrandLogo')) {
    header = "import { BrandLogo } from './common/BrandLogo';\n" + header;
  }
  header = header.replace(/<a[\s\S]*?id="brand-logo-link"[\s\S]*?>[\s\S]*?<\/a>/, `<a href="#inicio" onClick={(e) => handleNavClick(e, '#inicio')} id="brand-logo-link" className="group focus-visible:outline-2 focus-visible:outline-cyan-400"><BrandLogo size="md" /></a>`);
  fs.writeFileSync(headerPath, header, 'utf8');
  console.log('✔ Header.tsx atualizado com a logo');
}

// 4. Atualizar Footer.tsx
const footerPath = path.join(__dirname, 'src', 'components', 'Footer.tsx');
if (fs.existsSync(footerPath)) {
  let footer = fs.readFileSync(footerPath, 'utf8');
  if (!footer.includes('BrandLogo')) {
    footer = "import { BrandLogo } from './common/BrandLogo';\n" + footer;
  }
  footer = footer.replace(/<div className="flex flex-col">\s*<div className="flex items-center gap-2.5">[\s\S]*?<\/span>\s*<\/div>/, '<BrandLogo size="lg" />');
  fs.writeFileSync(footerPath, footer, 'utf8');
  console.log('✔ Footer.tsx atualizado com a logo');
}

// 5. Atualizar index.html
const htmlPath = path.join(__dirname, 'index.html');
if (fs.existsSync(htmlPath)) {
  let html = fs.readFileSync(htmlPath, 'utf8');
  html = html.replace(/<title>.*?<\/title>/, '<title>FC Web Designer | Carlos & Felipe — Sites e Landing Pages</title>');
  if (!html.includes('favicon.svg')) {
    html = html.replace('<head>', '<head>\n    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />');
  }
  fs.writeFileSync(htmlPath, html, 'utf8');
  console.log('✔ index.html atualizado com título e favicon');
}

// 6. Atualizar vite.config.ts base para relative
const vitePath = path.join(__dirname, 'vite.config.ts');
if (fs.existsSync(vitePath)) {
  let vite = fs.readFileSync(vitePath, 'utf8');
  vite = vite.replace(/base:\s*['"][^'"]*['"]/, "base: './'");
  fs.writeFileSync(vitePath, vite, 'utf8');
  console.log('✔ vite.config.ts configurado');
}

console.log('\n🎉 SUCESSO! Todos os arquivos foram atualizados!');