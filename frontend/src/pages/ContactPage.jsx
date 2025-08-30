import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Shield,
  Zap
} from 'lucide-react';
import { companyInfo, teamMembers, faqData } from '../mock';

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyType: '',
    serviceType: '',
    message: '',
    preferredContact: 'phone'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock form submission
    console.log('Form submitted:', formData);
    
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours to schedule your free assessment.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      propertyType: '',
      serviceType: '',
      message: '',
      preferredContact: 'phone'
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <Badge className="bg-green-100 text-green-800">Get Started Today</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Get Your Free Property
              <span className="text-green-600 block">Assessment</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact our spotted lanternfly specialists for a comprehensive property evaluation 
              and customized treatment plan. No obligation, completely free.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Free Assessment</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll contact you within 24 hours to schedule your free property assessment.
                </p>
              </div>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Property Assessment Request</CardTitle>
                  <CardDescription>All fields are required for accurate assessment</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="(555) 000-0000"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Property Type *
                        </label>
                        <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential Home</SelectItem>
                            <SelectItem value="commercial">Commercial Property</SelectItem>
                            <SelectItem value="hoa">HOA Community</SelectItem>
                            <SelectItem value="winery">Winery/Vineyard</SelectItem>
                            <SelectItem value="municipal">Municipal/Government</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="assessment">Property Assessment</SelectItem>
                          <SelectItem value="treatment">Spotted Lanternfly Treatment</SelectItem>
                          <SelectItem value="prevention">Prevention Program</SelectItem>
                          <SelectItem value="emergency">Emergency Response</SelectItem>
                          <SelectItem value="maintenance">Ongoing Maintenance</SelectItem>
                          <SelectItem value="consultation">Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <Textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your property, current pest issues, or specific concerns..."
                        rows={4}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <Select value={formData.preferredContact} onValueChange={(value) => handleInputChange('preferredContact', value)}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-lg py-6">
                      <Send className="mr-2 h-5 w-5" />
                      Request Free Assessment
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600">
                  Get in touch with our team of spotted lanternfly specialists. We're here to help protect your property.
                </p>
              </div>

              {/* Quick Contact */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Primary Line</p>
                      <a href={`tel:${companyInfo.phone}`} className="text-green-600 hover:text-green-700 font-semibold text-lg">
                        {companyInfo.phone}
                      </a>
                      <p className="text-sm text-gray-600">Available 24/7 for emergencies</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href={`mailto:${companyInfo.email}`} className="text-blue-600 hover:text-blue-700">
                        {companyInfo.email}
                      </a>
                      <p className="text-sm text-gray-600">We respond within 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Business Hours</p>
                      <p className="text-gray-600">{companyInfo.hours}</p>
                      <p className="text-sm text-green-600 font-medium">{companyInfo.emergencyService}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Members */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">Our Leadership Team</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {teamMembers.map((member, index) => (
                    <div key={index} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">{member.name}</h4>
                        <p className="text-green-600 font-medium">{member.title}</p>
                        <p className="text-sm text-gray-600">{member.bio}</p>
                        <div className="flex items-center space-x-4 pt-2">
                          <a href={`tel:${member.phone}`} className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                            {member.phone}
                          </a>
                          {member.email && (
                            <a href={`mailto:${member.email}`} className="text-blue-600 hover:text-blue-700 text-sm">
                              {member.email}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Service Guarantees */}
              <Card className="border-0 shadow-lg bg-green-50">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800">Service Guarantees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: CheckCircle, title: "Free Property Assessment", description: "Comprehensive evaluation at no cost" },
                    { icon: Shield, title: "85-90% Elimination Rate", description: "Proven effectiveness with our BT Gen 2 system" },
                    { icon: Zap, title: "24/7 Emergency Response", description: "Available for urgent pest situations" }
                  ].map((guarantee, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <guarantee.icon className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-800">{guarantee.title}</p>
                        <p className="text-sm text-green-700">{guarantee.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-800">Frequently Asked Questions</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get quick answers to the most frequently asked questions about our services.
            </p>
          </div>

          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <Card key={index} className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-3xl font-bold">Emergency Spotted Lanternfly Situation?</h2>
          <p className="text-xl opacity-90">
            We provide 24/7 emergency response for severe infestations and urgent pest situations.
          </p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-gray-50 text-lg px-8 py-6" asChild>
            <a href={`tel:${companyInfo.phone}`}>
              <Phone className="mr-2 h-5 w-5" />
              Call Emergency Line: {companyInfo.phone}
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;