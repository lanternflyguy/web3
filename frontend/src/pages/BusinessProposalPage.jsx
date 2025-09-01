import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Download, FileText, AlertTriangle, TrendingUp, CheckCircle, Building, Grape, MapPin, Phone, Mail, Users, Award, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import html2pdf from 'html2pdf.js';
import Logo from '../components/Logo';

const BusinessProposalPage = () => {
  const proposalRef = useRef();
  
  const [customization, setCustomization] = useState({
    recipientName: '',
    recipientTitle: '',
    organizationName: '',
    organizationType: 'municipality', // municipality, winery, government
    location: '',
    specificConcerns: '',
    proposalType: 'service', // service, partnership, acquisition
    urgencyLevel: 'high'
  });

  const handleInputChange = (field, value) => {
    setCustomization(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const generatePDF = () => {
    const element = proposalRef.current;
    const opt = {
      margin: 0.5,
      filename: `Spotted-Lanternfly-Crisis-Proposal-${customization.organizationName || 'Official'}.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
  };

  const crisisData = {
    municipality: {
      threatLevel: 'CRITICAL',
      economicImpact: '$2.5M annually',
      affectedAreas: 'Parks, Public Spaces, Urban Forests',
      timeframe: 'Immediate Action Required'
    },
    winery: {
      threatLevel: 'SEVERE',
      economicImpact: 'Up to 90% crop loss',
      affectedAreas: 'Vineyards, Production Facilities',
      timeframe: 'Pre-Harvest Intervention Critical'
    },
    government: {
      threatLevel: 'WIDESPREAD',
      economicImpact: '$50M+ regional impact',
      affectedAreas: 'Multi-County Infrastructure',
      timeframe: 'Coordinated Response Needed'
    }
  };

  const servicesData = {
    municipality: [
      'Emergency Municipal Response Teams',
      'Parks & Recreation Protection',
      'Public Property Treatment Programs',
      'Community Education & Outreach',
      'Multi-Department Coordination',
      'Regulatory Compliance Management'
    ],
    winery: [
      'Vineyard Protection Programs',
      'OMRI Organic Certified Treatments',
      'Harvest-Safe Applications',
      'Tourism Area Protection',
      'Season-Long Coverage',
      'Wine Quality Preservation'
    ],
    government: [
      'Regional Coordination Programs',
      'Multi-Agency Response Teams',
      'Large-Scale Treatment Operations',
      'Policy Implementation Support',
      'Inter-County Collaboration',
      'Long-Term Management Strategies'
    ]
  };

  const currentData = crisisData[customization.organizationType] || crisisData.municipality;
  const currentServices = servicesData[customization.organizationType] || servicesData.municipality;

  return (
    <>
      <Helmet>
        <title>Business Proposal Generator - The Lantern Fly Guys | Official Crisis Documentation</title>
        <meta name="description" content="Generate professional spotted lanternfly crisis proposals for municipalities, wineries, and government officials." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8">
        {/* Customization Controls */}
        <div className="max-w-6xl mx-auto px-4 mb-8">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Customize Business Proposal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="recipientName" className="text-white">Recipient Name</Label>
                  <Input
                    id="recipientName"
                    value={customization.recipientName}
                    onChange={(e) => handleInputChange('recipientName', e.target.value)}
                    placeholder="e.g., Mayor John Smith"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="recipientTitle" className="text-white">Recipient Title</Label>
                  <Input
                    id="recipientTitle"
                    value={customization.recipientTitle}
                    onChange={(e) => handleInputChange('recipientTitle', e.target.value)}
                    placeholder="e.g., Mayor, Director, CEO"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="organizationName" className="text-white">Organization Name</Label>
                  <Input
                    id="organizationName"
                    value={customization.organizationName}
                    onChange={(e) => handleInputChange('organizationName', e.target.value)}
                    placeholder="e.g., City of Oyster Bay"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="organizationType" className="text-white">Organization Type</Label>
                  <Select onValueChange={(value) => handleInputChange('organizationType', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="municipality">Municipality/City</SelectItem>
                      <SelectItem value="winery">Winery/Vineyard</SelectItem>
                      <SelectItem value="government">State/Federal Government</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="location" className="text-white">Location</Label>
                  <Input
                    id="location"
                    value={customization.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="e.g., Nassau County, NY"
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="proposalType" className="text-white">Proposal Type</Label>
                  <Select onValueChange={(value) => handleInputChange('proposalType', value)}>
                    <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service">Service Proposal</SelectItem>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="acquisition">Acquisition Discussion</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="mt-6">
                <Label htmlFor="specificConcerns" className="text-white">Specific Concerns/Notes</Label>
                <Textarea
                  id="specificConcerns"
                  value={customization.specificConcerns}
                  onChange={(e) => handleInputChange('specificConcerns', e.target.value)}
                  placeholder="Add any specific concerns or requirements for this proposal..."
                  className="bg-slate-700 border-slate-600 text-white"
                  rows={3}
                />
              </div>
              <div className="mt-6 text-center">
                <Button 
                  onClick={generatePDF}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Generate PDF Proposal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proposal Content */}
        <div ref={proposalRef} className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl print:shadow-none">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-lg">
                  <Logo size="md" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold">The Lantern Fly Guys Inc</h1>
                  <p className="text-red-100 text-lg">Spotted Lanternfly Crisis Response Specialists</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-red-100">CONFIDENTIAL PROPOSAL</div>
                <div className="text-lg font-semibold">{new Date().toLocaleDateString()}</div>
              </div>
            </div>
            
            <div className="border-t border-red-300 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">URGENT: SPOTTED LANTERNFLY CRISIS</h2>
                  <div className="bg-red-800 p-4 rounded">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      <span className="font-semibold">Threat Level: {currentData.threatLevel}</span>
                    </div>
                    <div className="text-sm">
                      <div>Economic Impact: {currentData.economicImpact}</div>
                      <div>Affected Areas: {currentData.affectedAreas}</div>
                      <div>Action Required: {currentData.timeframe}</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Proposal Recipient</h3>
                  <div className="bg-red-800 p-4 rounded">
                    <div className="font-semibold text-lg">{customization.recipientName || '[RECIPIENT NAME]'}</div>
                    <div className="text-red-200">{customization.recipientTitle || '[TITLE]'}</div>
                    <div className="text-red-200">{customization.organizationName || '[ORGANIZATION]'}</div>
                    <div className="text-red-200">{customization.location || '[LOCATION]'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
              <Shield className="h-8 w-8 mr-3" />
              Executive Summary
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-red-200">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-red-600">CRISIS LEVEL</div>
                  <div className="text-lg font-semibold">{currentData.threatLevel}</div>
                  <div className="text-sm text-slate-600 mt-2">Immediate intervention required</div>
                </CardContent>
              </Card>
              
              <Card className="border-orange-200">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-orange-600">GROWTH RATE</div>
                  <div className="text-lg font-semibold">300% Annually</div>
                  <div className="text-sm text-slate-600 mt-2">Exponential spread without control</div>
                </CardContent>
              </Card>
              
              <Card className="border-green-200">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-2xl font-bold text-green-600">OUR SUCCESS</div>
                  <div className="text-lg font-semibold">85-90% Elimination</div>
                  <div className="text-sm text-slate-600 mt-2">Patent-pending technology</div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">The Crisis Facing {customization.organizationName || 'Your Organization'}</h3>
              <p className="text-slate-700 mb-4">
                The spotted lanternfly (Lycorma delicatula) represents an unprecedented ecological and economic threat to 
                {customization.organizationType === 'municipality' && ' municipal properties, parks, and urban forests'}
                {customization.organizationType === 'winery' && ' vineyard operations, grape production, and wine tourism'}
                {customization.organizationType === 'government' && ' regional agriculture, infrastructure, and economic stability'}
                . Without immediate intervention, this invasive species will cause {currentData.economicImpact} in damages.
              </p>
              
              {customization.specificConcerns && (
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                  <h4 className="font-semibold text-yellow-800">Specific Concerns for {customization.organizationName}</h4>
                  <p className="text-yellow-700">{customization.specificConcerns}</p>
                </div>
              )}
            </div>
          </div>

          {/* The Lantern Fly Guys Solution */}
          <div className="p-8 bg-slate-50">
            <h2 className="text-3xl font-bold text-red-600 mb-6">The Lantern Fly Guys Solution</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Patent-Pending BT Gen 2 Technology</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">85-90% Elimination Rate</div>
                      <div className="text-sm text-slate-600">Industry-leading effectiveness vs. 60-70% standard</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">2-3 Season Protection</div>
                      <div className="text-sm text-slate-600">Long-lasting results vs. 3-6 month standard treatments</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">OMRI Organic Certified</div>
                      <div className="text-sm text-slate-600">Safe for families, pets, and environment</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">BioCertified Living Sentinels</div>
                      <div className="text-sm text-slate-600">Transform trees into natural pest eliminators</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-slate-800">Specialized Services for {customization.organizationType === 'municipality' ? 'Municipalities' : customization.organizationType === 'winery' ? 'Wineries' : 'Government Entities'}</h3>
                <div className="space-y-2">
                  {currentServices.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Market Data & Urgency */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Market Intelligence & Crisis Data</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Affected States & Severity</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center bg-red-100 p-3 rounded">
                    <span className="font-semibold">Pennsylvania</span>
                    <span className="bg-red-600 text-white px-2 py-1 rounded text-sm">CRITICAL</span>
                  </div>
                  <div className="flex justify-between items-center bg-orange-100 p-3 rounded">
                    <span className="font-semibold">New Jersey</span>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">HIGH</span>
                  </div>
                  <div className="flex justify-between items-center bg-orange-100 p-3 rounded">
                    <span className="font-semibold">New York</span>
                    <span className="bg-orange-600 text-white px-2 py-1 rounded text-sm">HIGH</span>
                  </div>
                  <div className="flex justify-between items-center bg-yellow-100 p-3 rounded">
                    <span className="font-semibold">Delaware</span>
                    <span className="bg-yellow-600 text-white px-2 py-1 rounded text-sm">MODERATE</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Economic Impact Projections</h3>
                <div className="space-y-4">
                  <div className="bg-slate-100 p-4 rounded">
                    <div className="font-semibold text-lg">Agriculture</div>
                    <div className="text-2xl font-bold text-red-600">$340M annually</div>
                    <div className="text-sm text-slate-600">Direct crop and vineyard losses</div>
                  </div>
                  <div className="bg-slate-100 p-4 rounded">
                    <div className="font-semibold text-lg">Tourism</div>
                    <div className="text-2xl font-bold text-orange-600">$190M annually</div>
                    <div className="text-sm text-slate-600">Reduced outdoor recreation and events</div>
                  </div>
                  <div className="bg-slate-100 p-4 rounded">
                    <div className="font-semibold text-lg">Property Values</div>
                    <div className="text-2xl font-bold text-red-600">15-25% decline</div>
                    <div className="text-sm text-slate-600">In heavily infested areas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Investment & ROI */}
          <div className="p-8 bg-slate-50">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Investment & Return Analysis</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-green-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Immediate Costs</h3>
                  <div className="text-sm space-y-2">
                    {customization.organizationType === 'municipality' && (
                      <>
                        <div>Small Municipality: $5,000-$15,000</div>
                        <div>Medium City: $15,000-$50,000</div>
                        <div>Large Municipality: $50,000-$150,000</div>
                      </>
                    )}
                    {customization.organizationType === 'winery' && (
                      <>
                        <div>Small Vineyard: $2,000-$8,000</div>
                        <div>Medium Vineyard: $8,000-$25,000</div>
                        <div>Large Vineyard: $25,000-$75,000</div>
                      </>
                    )}
                    {customization.organizationType === 'government' && (
                      <>
                        <div>County Program: $100,000-$500,000</div>
                        <div>Multi-County: $500,000-$2,000,000</div>
                        <div>State Initiative: $2,000,000+</div>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Cost of Inaction</h3>
                  <div className="text-sm space-y-2">
                    <div className="text-red-600 font-semibold">WITHOUT TREATMENT:</div>
                    <div>{currentData.economicImpact}</div>
                    <div>Exponential population growth</div>
                    <div>Infrastructure damage</div>
                    <div>Property value decline</div>
                    <div>Public health concerns</div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-yellow-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">ROI Analysis</h3>
                  <div className="text-sm space-y-2">
                    <div className="font-semibold text-green-600">WITH OUR TREATMENT:</div>
                    <div>10:1 Return on Investment</div>
                    <div>2-3 season protection</div>
                    <div>Property value preservation</div>
                    <div>Tourism recovery</div>
                    <div>Agricultural protection</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Next Steps */}
          <div className="p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-6">Recommended Next Steps</h2>
            
            <div className="space-y-6">
              {customization.proposalType === 'service' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Service Implementation Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">1</div>
                      <div className="font-semibold">Initial Assessment</div>
                      <div className="text-sm text-slate-600">24-48 hours</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">2</div>
                      <div className="font-semibold">Treatment Plan</div>
                      <div className="text-sm text-slate-600">3-5 days</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">3</div>
                      <div className="font-semibold">Implementation</div>
                      <div className="text-sm text-slate-600">1-2 weeks</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2">4</div>
                      <div className="font-semibold">Monitoring</div>
                      <div className="text-sm text-slate-600">Ongoing</div>
                    </div>
                  </div>
                </div>
              )}

              {customization.proposalType === 'partnership' && (
                <div className="bg-green-50 border-l-4 border-green-500 p-6">
                  <h3 className="text-xl font-semibold text-green-800 mb-4">Strategic Partnership Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Technology Licensing</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Exclusive regional rights to BT Gen 2</li>
                        <li>• Training and certification programs</li>
                        <li>• Ongoing technical support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Joint Ventures</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Co-branded service offerings</li>
                        <li>• Shared market development</li>
                        <li>• Combined resource deployment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {customization.proposalType === 'acquisition' && (
                <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4">Acquisition Discussion Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Strategic Assets</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Patent-pending technology</li>
                        <li>• Established customer base</li>
                        <li>• Proven treatment protocols</li>
                        <li>• Expert team</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Market Position</h4>
                      <ul className="text-sm space-y-1">
                        <li>• First-mover advantage</li>
                        <li>• Premium market positioning</li>
                        <li>• Scalable business model</li>
                        <li>• Franchise opportunities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Growth Potential</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Expanding crisis nationwide</li>
                        <li>• Government contract opportunities</li>
                        <li>• Technology licensing revenue</li>
                        <li>• Multiple revenue streams</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Contact & Action */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Time-Sensitive Action Required</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Immediate Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-semibold">Primary: (516) 725-0672</div>
                      <div className="text-red-200 text-sm">Sales & Emergency Response</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-semibold">Technical: (516) 930-2508</div>
                      <div className="text-red-200 text-sm">CTO Direct Line</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-3" />
                    <div>
                      <div className="font-semibold">chris@lanternflyguy.com</div>
                      <div className="text-red-200 text-sm">CEO - Business Development</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Urgency Indicators</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">Peak infestation season: March-October</span>
                  </div>
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Exponential growth without intervention</span>
                  </div>
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    <span className="text-sm">Early intervention = 10x cost savings</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-red-800 rounded">
                  <div className="font-bold text-center text-lg">RESPONSE DEADLINE</div>
                  <div className="text-center text-red-200">Contact within 72 hours for priority scheduling</div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="text-sm text-red-200">
                This proposal expires in 30 days. Crisis severity may require updated pricing and availability.
              </div>
              <div className="text-xs text-red-300 mt-2">
                © 2024 The Lantern Fly Guys Inc. Confidential business proposal. Do not distribute without authorization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessProposalPage;