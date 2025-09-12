import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, DollarSign, Users, TrendingUp, CheckCircle, Award, MapPin, Phone, Mail, Building, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Badge } from '../components/ui/badge';

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    currentLocation: '',
    desiredTerritory: '',
    
    // Business Experience
    businessExperience: '',
    pestControlExperience: '',
    franchiseExperience: '',
    managementExperience: '',
    
    // Financial Information
    liquidCapital: '',
    netWorth: '',
    investmentRange: '',
    financingNeeded: false,
    
    // Business Goals
    timelineToStart: '',
    reasonForInterest: '',
    businessGoals: '',
    marketingExperience: '',
    
    // Qualifications
    hasBusinessLicense: false,
    hasInsurance: false,
    hasVehicle: false,
    willingToTravel: false,
    
    // Additional Information
    howDidYouHear: '',
    additionalComments: '',
    agreesToTerms: false
  });

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Franchise Application Submitted:', formData);
    alert('Thank you for your franchise application! Our team will review your submission and contact you within 48 hours.');
  };

  const franchiseStats = [
    { icon: DollarSign, title: 'Investment Range', value: '$75K - $150K', description: 'Total initial investment' },
    { icon: TrendingUp, title: 'ROI Potential', value: '200-400%', description: 'Within 24 months' },
    { icon: Users, title: 'Market Demand', value: 'High Growth', description: 'Expanding pest crisis' },
    { icon: Award, title: 'Patent Technology', value: 'BT Gen 2', description: 'Competitive advantage' }
  ];

  const requirements = [
    { title: 'Liquid Capital', amount: '$50,000 minimum', description: 'Available for immediate investment' },
    { title: 'Net Worth', amount: '$100,000 minimum', description: 'Total personal/business assets' },
    { title: 'Business Experience', amount: '3+ years preferred', description: 'Management or business ownership' },
    { title: 'Territory Commitment', amount: 'Exclusive rights', description: 'Protected geographic area' }
  ];

  const benefits = [
    'Exclusive patent-pending BT Gen 2 sterilization technology',
    'Comprehensive 4-week training program',
    'Protected territory with population 100K+',
    'Complete marketing and branding package',
    'Ongoing operational support and consultation',
    'Equipment package and supplier relationships',
    'Digital marketing platform and lead generation',
    'Quality control and certification programs'
  ];

  return (
    <>
      <Helmet>
        <title>Franchise Opportunities - The Lantern Fly Guys | Pest Control Business Investment</title>
        <meta name="description" content="Join The Lantern Fly Guys franchise network. Exclusive territories, patent-pending technology, comprehensive training. Investment opportunity in growing pest control market." />
        <meta name="keywords" content="pest control franchise, business opportunity, lanternfly franchise, pest management investment, franchise opportunities" />
        <link rel="canonical" href="https://www.thelanternflyguys.com/franchise" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Building className="h-16 w-16 text-yellow-400 mr-4" />
              <Shield className="h-20 w-20 text-red-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="text-yellow-400">Franchise</span> Opportunities
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join the nation's leading spotted lanternfly control specialists. Build a profitable business 
              with our patent-pending technology and proven systems in your protected territory.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3">
                <a href="#application">Start Your Application</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">Call (516) 870-8356</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Franchise Stats */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Investment Opportunity</h2>
              <p className="text-slate-300 text-lg">Join a rapidly growing market with proven technology</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {franchiseStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="bg-slate-800 border-slate-700 text-white text-center">
                    <CardHeader>
                      <IconComponent className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                      <CardTitle className="text-lg font-bold">{stat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                      <p className="text-slate-400 text-sm">{stat.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Franchise Requirements</h2>
              <p className="text-slate-300 text-lg">Minimum qualifications for franchise consideration</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {requirements.map((req, index) => (
                <Card key={index} className="bg-slate-700 border-slate-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold">{req.title}</h3>
                      <Badge className="bg-yellow-600">{req.amount}</Badge>
                    </div>
                    <p className="text-slate-300">{req.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Franchise Benefits</h2>
              <p className="text-slate-300 text-lg">What you get as a Lantern Fly Guys franchise owner</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="application" className="py-16 px-4 bg-slate-800/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Franchise Application</h2>
              <p className="text-slate-300 text-lg">Complete this detailed application to begin the qualification process</p>
              <div className="bg-yellow-800 border border-yellow-600 rounded-lg p-4 mt-6">
                <p className="text-yellow-100 font-medium">⚠️ All applications are thoroughly reviewed by our franchise team. Only qualified candidates will be contacted for the next steps.</p>
              </div>
            </div>

            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-white">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-white">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-white">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="currentLocation" className="text-white">Current Location (City, State) *</Label>
                        <Input
                          id="currentLocation"
                          value={formData.currentLocation}
                          onChange={(e) => handleInputChange('currentLocation', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="desiredTerritory" className="text-white">Desired Territory/Market *</Label>
                        <Input
                          id="desiredTerritory"
                          value={formData.desiredTerritory}
                          onChange={(e) => handleInputChange('desiredTerritory', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Business Experience */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Business Experience</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="businessExperience" className="text-white">Years of Business Experience *</Label>
                        <Select onValueChange={(value) => handleInputChange('businessExperience', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-2">0-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="6-10">6-10 years</SelectItem>
                            <SelectItem value="10+">10+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="pestControlExperience" className="text-white">Pest Control Industry Experience</Label>
                        <Select onValueChange={(value) => handleInputChange('pestControlExperience', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No experience</SelectItem>
                            <SelectItem value="1-2">1-2 years</SelectItem>
                            <SelectItem value="3-5">3-5 years</SelectItem>
                            <SelectItem value="5+">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="franchiseExperience" className="text-white">Previous Franchise Experience</Label>
                        <Select onValueChange={(value) => handleInputChange('franchiseExperience', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">No franchise experience</SelectItem>
                            <SelectItem value="owner">Franchise owner</SelectItem>
                            <SelectItem value="manager">Franchise manager</SelectItem>
                            <SelectItem value="employee">Franchise employee</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Financial Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="liquidCapital" className="text-white">Liquid Capital Available *</Label>
                        <Select onValueChange={(value) => handleInputChange('liquidCapital', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-200k">$100,000 - $200,000</SelectItem>
                            <SelectItem value="200k+">$200,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="netWorth" className="text-white">Total Net Worth *</Label>
                        <Select onValueChange={(value) => handleInputChange('netWorth', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                            <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                            <SelectItem value="500k+">$500,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="investmentRange" className="text-white">Preferred Investment Range *</Label>
                        <Select onValueChange={(value) => handleInputChange('investmentRange', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="75k-100k">$75,000 - $100,000</SelectItem>
                            <SelectItem value="100k-150k">$100,000 - $150,000</SelectItem>
                            <SelectItem value="150k-200k">$150,000 - $200,000</SelectItem>
                            <SelectItem value="200k+">$200,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="financingNeeded"
                          checked={formData.financingNeeded}
                          onCheckedChange={(checked) => handleInputChange('financingNeeded', checked)}
                        />
                        <Label htmlFor="financingNeeded" className="text-white">Will you need financing assistance?</Label>
                      </div>
                    </div>
                  </div>

                  {/* Business Goals */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Business Goals & Timeline</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="timelineToStart" className="text-white">When do you want to start operations? *</Label>
                        <Select onValueChange={(value) => handleInputChange('timelineToStart', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediately">Immediately</SelectItem>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value="6-12months">6-12 months</SelectItem>
                            <SelectItem value="12+months">12+ months</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="reasonForInterest" className="text-white">Why are you interested in The Lantern Fly Guys franchise? *</Label>
                        <Textarea
                          id="reasonForInterest"
                          value={formData.reasonForInterest}
                          onChange={(e) => handleInputChange('reasonForInterest', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white min-h-[100px]"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="businessGoals" className="text-white">What are your business goals for the first 2 years? *</Label>
                        <Textarea
                          id="businessGoals"
                          value={formData.businessGoals}
                          onChange={(e) => handleInputChange('businessGoals', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white min-h-[100px]"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Qualifications Checklist */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Qualifications Checklist</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="hasBusinessLicense"
                          checked={formData.hasBusinessLicense}
                          onCheckedChange={(checked) => handleInputChange('hasBusinessLicense', checked)}
                        />
                        <Label htmlFor="hasBusinessLicense" className="text-white">I have or can obtain necessary business licenses</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="hasInsurance"
                          checked={formData.hasInsurance}
                          onCheckedChange={(checked) => handleInputChange('hasInsurance', checked)}
                        />
                        <Label htmlFor="hasInsurance" className="text-white">I have or can obtain business insurance</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="hasVehicle"
                          checked={formData.hasVehicle}
                          onCheckedChange={(checked) => handleInputChange('hasVehicle', checked)}
                        />
                        <Label htmlFor="hasVehicle" className="text-white">I have a suitable vehicle for service operations</Label>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id="willingToTravel"
                          checked={formData.willingToTravel}
                          onCheckedChange={(checked) => handleInputChange('willingToTravel', checked)}
                        />
                        <Label htmlFor="willingToTravel" className="text-white">I'm willing to travel for training and support</Label>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">Additional Information</h3>
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="howDidYouHear" className="text-white">How did you hear about our franchise opportunity?</Label>
                        <Select onValueChange={(value) => handleInputChange('howDidYouHear', value)}>
                          <SelectTrigger className="bg-slate-600 border-slate-500 text-white">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Company website</SelectItem>
                            <SelectItem value="referral">Referral from existing franchisee</SelectItem>
                            <SelectItem value="advertising">Online advertising</SelectItem>
                            <SelectItem value="broker">Franchise broker</SelectItem>
                            <SelectItem value="trade-show">Trade show/event</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="additionalComments" className="text-white">Additional Comments or Questions</Label>
                        <Textarea
                          id="additionalComments"
                          value={formData.additionalComments}
                          onChange={(e) => handleInputChange('additionalComments', e.target.value)}
                          className="bg-slate-600 border-slate-500 text-white min-h-[100px]"
                          placeholder="Tell us anything else that would help us evaluate your application..."
                        />
                      </div>
                    </div>
                  </div>

                  {/* Terms Agreement */}
                  <div className="border-t border-slate-600 pt-6">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="agreesToTerms"
                        checked={formData.agreesToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreesToTerms', checked)}
                        required
                      />
                      <Label htmlFor="agreesToTerms" className="text-white text-sm leading-relaxed">
                        I understand that this application does not constitute an offer to sell a franchise. 
                        I agree to the terms and conditions of the application process and authorize The Lantern Fly Guys 
                        to verify the information provided and conduct background checks as necessary. *
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      className="bg-red-600 hover:bg-red-700 text-white font-semibold px-12 py-3 text-lg"
                      disabled={!formData.agreesToTerms}
                    >
                      Submit Franchise Application
                    </Button>
                    <p className="text-slate-400 text-sm mt-4">
                      Our franchise team will review your application and contact you within 48 hours.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-red-700">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Pest Control Empire?</h2>
            <p className="text-xl text-red-100 mb-8">
              Join the fight against the spotted lanternfly crisis while building a profitable business with proven systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-red-600 hover:bg-slate-100 font-semibold px-8 py-3">
                <a href="#application">Complete Application</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3" asChild>
                <a href="tel:(516) 870-8356">
                  <Phone className="h-4 w-4 mr-2" />
                  Franchise Hotline: (516) 870-8356
                </a>
              </Button>
            </div>
            <p className="text-red-200 mt-6 text-sm">
              Territories available nationwide • Protected exclusive rights • Proven business model
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default FranchisePage;