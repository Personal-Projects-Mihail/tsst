'use client';

import Link from 'next/link';
import { Heart, Mail, MapPin, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-tsst-text text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-3 mb-6 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tsst-accent rounded-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-tsst-primary to-tsst-primary-dark flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold leading-tight">TSST</span>
                <span className="block text-xs text-white/70 -mt-0.5">Tackling Self Stigma Together</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              An Erasmus+ youth project promoting mental health and self-stigma awareness among youth workers across Europe.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Project</h3>
            <ul className="space-y-3">
              {['objectives', 'activities', 'partners', 'results'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item}`}
                    className="text-white/70 hover:text-white transition-colors text-sm capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/dissemination" className="text-white/70 hover:text-white transition-colors text-sm">
                  Dissemination
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/50 mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-tsst-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:info@tsst.eu" className="text-white/70 hover:text-white transition-colors text-sm">
                  info@tsst.eu
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-tsst-primary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Coordinated by GASZO
                  <br />
                  Poland, EU
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              {new Date().getFullYear()} TSST - Tackling Self Stigma Together. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <a
                href="https://erasmus-plus.ec.europa.eu/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors text-sm inline-flex items-center gap-1"
              >
                Erasmus+ <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <p className="text-white/40 text-xs text-center mt-4">
            Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do
            not necessarily reflect those of the European Union or EACEA.
          </p>
        </div>
      </div>
    </footer>
  );
}
