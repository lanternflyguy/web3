import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, MapPin, Phone, Star, CheckCircle, Crown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Link } from 'react-router-dom';

const UpperBrookvillePage = () => {
  return (
    <>
      <Helmet>
        <title>Spotted Lanternfly Control Upper Brookville NY | The Lantern Fly Guys</title>
        <meta name="description" content="Professional spotted lanternfly removal and control services in Upper Brookville, NY. Premium pest management for luxury estates and properties." />
        <meta name="keywords" content="spotted lanternfly Upper Brookville NY, pest control Upper Brookville, lanternfly removal Nassau County, Upper Brookville estate exterminator" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/upper-brookville" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Crown className="h-12 w-12 text-yellow-400 mr-4" />
              <Shield className="h-16 w-16 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Premium Spotted Lanternfly Control in <span className="text-yellow-400">Upper Brookville, NY</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Exclusive spotted lanternfly elimination services for Upper Brookville estates and luxury properties. 
              Protect your prestigious landscape with our patent-pending BT Gen 2 sterilization technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3" asChild>
                <Link to="/contact">Free Upper Brookville Estate Assessment</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">Call (516) 870-8356</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Local Service Area */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Serving Upper Brookville's Exclusive Estates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Crown className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Estate Specialists</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Specialized expertise in protecting Upper Brookville's luxury estates and historic properties.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-400 mx-auto" />
                  <CardTitle>Discreet Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Professional, discreet treatments that maintain the privacy and elegance of your estate.</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-800 border-slate-700 text-white">
                <CardHeader>
                  <Star className="h-8 w-8 text-yellow-400 mx-auto" />
                  <CardTitle>Premium Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">Uncompromising quality and results for Upper Brookville's most discerning clients.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services for Upper Brookville */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Upper Brookville Estate Spotted Lanternfly Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Luxury Estate Protection</h3>
                    <p className="text-slate-300">Comprehensive protection for Upper Brookville's multi-acre estates, including heritage tree preservation and landscape integrity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Historic Property Care</h3>
                    <p className="text-slate-300">Specialized treatments for historic Upper Brookville properties with careful attention to preservation standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">VIP Emergency Response</h3>
                    <p className="text-slate-300">Priority emergency services with immediate response for Upper Brookville estate infestations.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Patent-Pending BT Gen 2</h3>
                    <p className="text-slate-300">Our most advanced sterilization technology providing 2-3 seasons of premium protection for Upper Brookville estates.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Organic Premium Treatments</h3>
                    <p className="text-slate-300">Highest-grade OMRI certified organic solutions, completely safe for families, pets, and Upper Brookville's pristine environment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Estate Soil Management</h3>
                    <p className="text-slate-300">Comprehensive soil treatment systems providing extended protection for Upper Brookville's valuable landscapes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Upper Brookville */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">Why Upper Brookville Estates Trust The Lantern Fly Guys</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Estate-Level Expertise</h3>
                <p className="text-slate-300 mb-6">
                  We understand the unique requirements of Upper Brookville's luxury estates, from historic preservation needs 
                  to maintaining the highest standards of landscape beauty.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Premium Technology</h3>
                <p className="text-slate-300">
                  Our patent-pending BT Gen 2 sterilization technology represents the pinnacle of spotted lanternfly control, 
                  perfectly suited for Upper Brookville's most valuable properties.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">White-Glove Service</h3>
                <p className="text-slate-300 mb-6">
                  Discreet, professional service that respects your privacy and maintains the exclusive character of your 
                  Upper Brookville estate.
                </p>
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Comprehensive Guarantees</h3>
                <p className="text-slate-300">
                  Premium service packages with extended warranties and guarantees, ensuring your Upper Brookville estate 
                  remains protected with the highest level of service assurance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Services */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Premium Upper Brookville Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-yellow-600 to-yellow-700 border-yellow-500 text-white">
                <CardHeader>
                  <Crown className="h-8 w-8 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-center">Estate Protection Package</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-yellow-100">
                    <li>• Multi-acre estate coverage</li>
                    <li>• VIP priority service</li>
                    <li>• Quarterly monitoring</li>
                    <li>• Heritage tree specialists</li>
                    <li>• Season-long guarantee</li>
                  </ul>
                  <Button className="w-full mt-6 bg-white text-yellow-600 hover:bg-slate-100 font-semibold" asChild>
                    <Link to="/contact">Estate Consultation</Link>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-red-600 to-red-700 border-red-500 text-white">
                <CardHeader>
                  <Shield className="h-8 w-8 mx-auto mb-4" />
                  <CardTitle className="text-2xl font-bold text-center">BT Gen 2 Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-red-100">
                    <li>• Patent-pending technology</li>
                    <li>• 2-3 season protection</li>
                    <li>• Sterilization methodology</li>
                    <li>• Premium estate pricing</li>
                    <li>• Exclusive application</li>
                  </ul>
                  <Button className="w-full mt-6 bg-white text-red-600 hover:bg-slate-100 font-semibold" asChild>
                    <Link to="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Protect Your Upper Brookville Estate</h2>
            <p className="text-xl text-red-100 mb-8">
              Your Upper Brookville estate deserves the finest protection. Contact our estate specialists for a premium consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3" asChild>
                <Link to="/contact">Schedule Estate Service</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">
                  <Phone className="h-4 w-4 mr-2" />
                  Call (516) 870-8356
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UpperBrookvillePage;