import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { companyInfo } from '../mock';
import SocialMediaLinks from './SocialMediaLinks';
import PhoneTracking from './PhoneTracking';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyInfo.name}</h3>
                <p className="text-green-400 text-sm">Pest Control Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premier spotted lanternfly elimination specialists using cutting-edge patent-pending BT Gen 2 technology. 
              Protecting homes, businesses, and communities with eco-friendly solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-green-400 transition-colors">Services</Link></li>
              <li><Link to="/hoa" className="text-gray-300 hover:text-green-400 transition-colors">HOA Solutions</Link></li>
              <li><Link to="/wineries" className="text-gray-300 hover:text-green-400 transition-colors">Wineries</Link></li>
              <li><Link to="/municipal" className="text-gray-300 hover:text-green-400 transition-colors">Municipal</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-green-400 transition-colors">Reviews</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Residential Property Protection</li>
              <li>• Commercial Pest Management</li>
              <li>• HOA Community Programs</li>
              <li>• Winery & Vineyard Services</li>
              <li>• Municipal Contracts</li>
              <li>• Emergency Response</li>
              <li>• Heritage Tree Care</li>
              <li>• Root Injection Protection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.phone}`} className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    {companyInfo.phone}
                  </a>
                  <p className="text-sm text-gray-400">Primary Line</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${companyInfo.alternatePhone}`} className="text-gray-300 hover:text-green-400 transition-colors font-medium">
                    {companyInfo.alternatePhone}
                  </a>
                  <p className="text-sm text-gray-400">Technical Support</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="text-gray-300 hover:text-green-400 transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{companyInfo.address}</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">{companyInfo.hours}</p>
                  <p className="text-green-400 text-sm font-medium">{companyInfo.emergencyService}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2025 {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <button className="text-gray-400 hover:text-green-400 transition-colors">Privacy Policy</button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">Terms of Service</button>
              <button className="text-gray-400 hover:text-green-400 transition-colors">License Info</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;