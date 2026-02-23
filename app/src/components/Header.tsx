'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Heart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Objectives', href: '/objectives' },
  { name: 'Activities', href: '/activities' },
  { name: 'Partners', href: '/partners' },
  { name: 'Results', href: '/results' },
  { name: 'Dissemination', href: '/dissemination' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            href="/"
            className="flex items-center gap-2 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsst-primary-dark rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-tsst-primary-dark to-tsst-primary flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-tsst-text leading-tight">TSST</span>
              <span className="block text-xs text-tsst-text-muted -mt-0.5">Tackling Self Stigma</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsst-primary-dark',
                  'min-h-[44px] flex items-center',
                  isActive(item.href)
                    ? 'text-tsst-primary-dark bg-tsst-primary/10'
                    : 'text-tsst-text-muted hover:text-tsst-text hover:bg-tsst-card'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button asChild className="btn-primary">
              <Link href="/contact">Get Involved</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-tsst-text-muted hover:text-tsst-text hover:bg-tsst-card transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          'lg:hidden absolute top-full left-0 right-0 bg-white border-b border-tsst-border shadow-lg transition-all duration-300',
          mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                'block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200',
                isActive(item.href)
                  ? 'text-tsst-primary-dark bg-tsst-primary/10'
                  : 'text-tsst-text-muted hover:text-tsst-text hover:bg-tsst-card'
              )}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 mt-4 border-t border-tsst-border">
            <Button asChild className="btn-primary w-full justify-center">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                Get Involved
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
