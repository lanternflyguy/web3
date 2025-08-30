import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Menu, Phone, Shield } from 'lucide-react';
import { companyInfo } from '../mock';

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
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-2 px-4 text-center text-sm">
        <div className="flex items-center justify-center gap-2">
          <Shield className="h-4 w-4" />
          <span className="font-medium">
            Customer Appreciation Month - 20% OFF for all New Customers! Call Today!
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900">
                  {companyInfo.name}
                </span>
                <span className="text-sm text-green-600 font-medium">
                  Spotted Lanternfly Specialists
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    isActive(item.path)
                      ? 'text-green-600 border-b-2 border-green-600 pb-1'
                      : 'text-gray-700'
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
                className="flex items-center space-x-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="font-semibold">{companyInfo.phone}</span>
              </a>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link to="/contact">Free Estimate</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="outline" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">
                        {companyInfo.name}
                      </span>
                      <span className="text-sm text-green-600">
                        Pest Control Experts
                      </span>
                    </div>
                  </div>

                  <nav className="flex flex-col space-y-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-medium transition-colors hover:text-green-600 py-2 ${
                          isActive(item.path) ? 'text-green-600' : 'text-gray-700'
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  <div className="pt-4 border-t space-y-4">
                    <a
                      href={`tel:${companyInfo.phone}`}
                      className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors"
                    >
                      <Phone className="h-5 w-5" />
                      <span className="font-semibold text-lg">{companyInfo.phone}</span>
                    </a>
                    <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                      <Link to="/contact" onClick={() => setIsOpen(false)}>
                        Get Free Estimate
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