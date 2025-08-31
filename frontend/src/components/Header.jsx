import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Crown } from 'lucide-react';
import { companyInfo } from '../mock';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'HOA Solutions', path: '/hoa' },
    { name: 'Wineries', path: '/wineries' },
    { name: 'Municipal', path: '/municipal' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Premium Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-3 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-3">
          <Shield className="h-4 w-4 text-yellow-400" />
          <span className="font-medium">
            Professional Spotted Lanternfly Elimination - 20% OFF New Customers
          </span>
          <Shield className="h-4 w-4 text-yellow-400" />
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-xl sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <Logo size="md" />
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 tracking-tight">
                  {companyInfo.name}
                </span>
                <span className="text-sm text-slate-600 font-medium tracking-wide">
                  Professional Pest Management Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-all duration-200 hover:text-red-600 relative ${
                    isActive(item.path)
                      ? 'text-red-600 after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:rounded-full'
                      : 'text-slate-700 hover:text-red-600'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Phone & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center space-x-2 text-slate-700 hover:text-red-600 transition-colors font-medium"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">{companyInfo.phone}</span>
              </a>
              <Button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200" asChild>
                <Link to="/contact">Free Assessment</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon" className="border-slate-300">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3 pb-4 border-b border-slate-200">
                    <Logo size="sm" />
                    <div className="flex flex-col">
                      <span className="font-bold text-slate-900">
                        {companyInfo.name}
                      </span>
                      <span className="text-sm text-slate-600">
                        Premium Specialists
                      </span>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-red-600 py-2 ${
                          isActive(item.path) ? 'text-red-600 border-l-2 border-red-600 pl-3' : 'text-slate-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t border-slate-200 space-y-4">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center space-x-3 text-slate-700 hover:text-red-600 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold text-lg">{companyInfo.phone}</span>
                    </a>
                    <Button className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold" asChild>
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Premium Assessment
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;