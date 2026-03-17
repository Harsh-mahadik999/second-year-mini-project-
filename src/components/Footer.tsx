import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-10 overflow-hidden border-t border-black/10 bg-white/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-black">
                <span className="text-sm font-bold text-white">LA</span>
              </div>
              <span className="heading-display text-xl font-extrabold text-black">
                Les Studio
              </span>
            </div>
            <p className="mb-4 max-w-md text-black/65">
              Creative digital agency. Strategy, design and development for brands that want work with attitude.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="rounded-lg border border-black/15 bg-white p-2 text-black/65 transition-colors hover:bg-black hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-black/15 bg-white p-2 text-black/65 transition-colors hover:bg-black hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-black/15 bg-white p-2 text-black/65 transition-colors hover:bg-black hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="rounded-lg border border-black/15 bg-white p-2 text-black/65 transition-colors hover:bg-black hover:text-white">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Services</h3>
            <ul className="space-y-2 text-sm text-black/65">
              <li><a href="#" className="transition-colors hover:text-black">Brand Sites</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Product Design</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Motion Systems</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Technical Consulting</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-black">Agency</h3>
            <ul className="space-y-2 text-sm text-black/65">
              <li><a href="#" className="transition-colors hover:text-black">Projects</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Team</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Contact</a></li>
              <li><a href="#" className="transition-colors hover:text-black">Blog</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-black/10 pt-8 text-center text-sm text-black/50">
          <p>&copy; 2026 Les Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;