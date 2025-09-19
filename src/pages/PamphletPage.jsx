import React, { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Phone, Mail, Globe, CheckCircle, Star, Download, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import html2pdf from 'html2pdf.js';
import Logo from '../components/Logo';

const PamphletPage = () => {
  const pamphletRef = useRef();

  const downloadPDF = () => {
    const element = pamphletRef.current;
    const opt = {
      margin: 0.5,
      filename: 'lantern-fly-guys-pamphlet.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const services = [
    'Residential Property Protection',
    'Commercial Property Management',
    'HOA Community Services',
    'Winery & Vineyard Protection',
    'Municipal & Government Contracts',
    'PPMP (Preventative Pest Management Procedure) Sterilization',
    'Organic OMRI Certified Treatments',
    'Soil Treatment Systems',
    'Emergency 24/7 Response',
    'Heritage Tree Protection',
    'Egg Mass Inspection & Elimination',
    'Educational Workshops & Training'
  ];

  const competitiveAdvantages = [
    {
      title: 'Patent-Pending Technology',
      description: 'Our exclusive PPMP sterilization technology provides 2-3 seasons of protection, far superior to standard treatments.'
    },
    {
      title: 'Local Expertise',
      description: 'Deep knowledge of Nassau & Suffolk County landscapes and spotted lanternfly behavior patterns.'
    },
    {
      title: 'OMRI Certified Organic',
      description: 'Safe for families, pets, and the environment while maintaining maximum effectiveness.'
    },
    {
      title: 'Comprehensive Warranties',
      description: 'Extended warranties and satisfaction guarantees that other companies cannot match.'
    },
    {
      title: '24/7 Emergency Service',
      description: 'Immediate response available when you need it most, with priority scheduling.'
    },
    {
      title: 'Professional Expertise',
      description: 'Licensed, insured, and trained specialists with 100+ successful treatments.'
    }
  ];

  const pricingHighlights = [
    { service: 'Residential Basic (up to 1/4 acre)', price: '$350-$450' },
    { service: 'Residential Standard (1/4-1/2 acre)', price: '$450-$650' },
    { service: 'Residential Premium (1/2-1 acre)', price: '$650-$950' },
    { service: 'Commercial Small (up to 5,000 sq ft)', price: '$500-$800' },
    { service: 'HOA Communities (10-25 homes)', price: '$2,500-$4,000' },
    { service: 'PPMP Sterilization Premium', price: '+$200-$1,500' },
    { service: 'Emergency Service', price: '+50-100%' },
    { service: 'New Customer Discount', price: '20% OFF' }
  ];

  return (
    <>
      <Helmet>
        <title>Printable Pamphlet - The Lantern Fly Guys | Professional Spotted Lanternfly Control</title>
        <meta name="description" content="Download our printable pamphlet with complete service information, pricing, and contact details for professional spotted lanternfly control services." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
        {/* Download Controls */}
        <div className="max-w-4xl mx-auto px-4 mb-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Download Our Professional Pamphlet</h1>
            <p className="text-slate-300 mb-6">Complete service information, pricing, and contact details in a printable format</p>
            <Button 
              onClick={downloadPDF}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 mb-8"
            >
              <Download className="h-5 w-5 mr-2" />
              Download PDF Pamphlet
            </Button>
          </div>
        </div>

        {/* Printable Pamphlet Content */}
        <div ref={pamphletRef} className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-2 rounded-lg">
                  <Logo size="sm" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">The Lantern Fly Guys Inc</h1>
                  <p className="text-red-100 text-lg">Professional Spotted Lanternfly Control Specialists</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm font-bold mb-2">
                  <Mail className="h-4 w-4 mr-2" />
                  chris@lanternflyguy.com
                </div>
                <div className="flex items-center text-xl font-bold mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  (516) 870-8356
                </div>
                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 mr-2" />
                  www.thelanternflyguys.com
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
            {/* About Us */}
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-2" />
                About Our Services
              </h2>
              <p className="text-slate-700 mb-4">
                The Lantern Fly Guys Inc is Nassau and Suffolk County's premier spotted lanternfly control specialist. 
                We protect your property with our exclusive patent-pending PPMP sterilization technology, 
                providing superior results that last 2-3 seasons.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
                <p className="text-yellow-800 font-semibold">
                  🏆 PPMP (Preventative Pest Management Procedure) Technology - The most advanced spotted lanternfly control available
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">chris@lanternflyguy.com</div>
                    <div className="text-sm text-slate-600">📧 PRIMARY - Appointments & Bookings</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">(516) 870-8356</div>
                    <div className="text-sm text-slate-600">Sales & Service Line</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">(631) 930-2508</div>
                    <div className="text-sm text-slate-600">Business & Technology Info</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 text-red-600 mr-3" />
                  <div>
                    <div className="font-semibold">www.thelanternflyguys.com</div>
                    <div className="text-sm text-slate-600">Free Online Quotes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services List */}
          <div className="p-6 bg-slate-50">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Complete Service Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {services.map((service, index) => (
                <div key={index} className="flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Table */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Transparent Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pricingHighlights.map((item, index) => (
                <div key={index} className="flex justify-between items-center bg-slate-50 p-3 rounded">
                  <span className="text-sm font-medium">{item.service}</span>
                  <span className="font-bold text-red-600">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-slate-600 mb-2">🎯 <strong>New Customer Special: 20% OFF First Treatment</strong></p>
              <p className="text-xs text-slate-500">Prices may vary based on property size, infestation severity, and location. Call for exact quote.</p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="p-6 bg-red-50">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Why Choose The Lantern Fly Guys vs. Competitors</h2>
            <div className="space-y-4">
              {competitiveAdvantages.map((advantage, index) => (
                <div key={index} className="border-l-4 border-red-600 pl-4">
                  <h3 className="font-bold text-slate-900">{advantage.title}</h3>
                  <p className="text-sm text-slate-700">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service Areas */}
          <div className="p-6">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Service Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div>• Nassau County</div>
              <div>• Suffolk County</div>
              <div>• Dix Hills</div>
              <div>• Manhasset</div>
              <div>• Plainview</div>
              <div>• Oyster Bay</div>
              <div>• Commack</div>
              <div>• Upper Brookville</div>
              <div>• Laurel Hollow</div>
              <div>• Cold Spring Harbor</div>
              <div>• Northport</div>
              <div>• East Northport</div>
              <div>• Roslyn</div>
              <div>• Smithtown</div>
              <div>• Melville</div>
              <div>• Long Island Wineries</div>
            </div>
          </div>

          {/* Call to Action Footer */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 text-center">
            <h2 className="text-2xl font-bold mb-2">Don't Let Spotted Lanternflies Destroy Your Property!</h2>
            <p className="text-red-100 mb-4">Call today for your free assessment and 20% new customer discount</p>
            <div className="flex justify-center items-center space-x-6">
              <div className="flex items-center text-lg font-bold">
                <Mail className="h-5 w-5 mr-2" />
                chris@lanternflyguy.com
              </div>
              <div className="flex items-center text-lg font-bold">
                <Phone className="h-6 w-6 mr-2" />
                (516) 870-8356
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                www.thelanternflyguys.com
              </div>
            </div>
            <p className="text-xs text-red-200 mt-2">📧 Email chris@lanternflyguy.com for appointments and bookings</p>
            <p className="text-xs text-red-200 mt-4">Licensed • Insured • EPA Registered • OMRI Certified</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PamphletPage;