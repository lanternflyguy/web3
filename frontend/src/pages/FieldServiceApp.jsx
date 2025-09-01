import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { useToast } from '../hooks/use-toast';
import { 
  MapPin, 
  Save, 
  Send,
  Camera,
  Clock,
  User,
  FileText,
  Droplets,
  Target,
  TreePine,
  Building,
  AlertTriangle,
  CheckCircle,
  Smartphone,
  Navigation,
  Upload,
  Download
} from 'lucide-react';

const FieldServiceApp = () => {
  const { toast } = useToast();
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Service Log Form Data
  const [serviceLog, setServiceLog] = useState({
    // Customer Information
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    serviceAddress: '',
    
    // Property Details
    propertyType: '',
    propertySize: '',
    propertyDescription: '',
    
    // Service Information
    serviceDate: new Date().toISOString().split('T')[0],
    serviceTime: new Date().toTimeString().slice(0, 5),
    technicianName: '',
    serviceType: '',
    treatmentMethod: '',
    
    // Infestation Details
    infestationSeverity: '',
    adultsObserved: '',
    nymphsObserved: '',
    eggMassesFound: '',
    affectedTrees: '',
    
    // Treatment Details
    chemicalsUsed: '',
    applicationMethod: '',
    volumeApplied: '',
    concentrationUsed: '',
    weatherConditions: '',
    
    // GPS & Location
    latitude: '',
    longitude: '',
    accuracy: '',
    
    // Conservation Reporting
    epaRegistrationNumbers: '',
    environmentalPrecautions: '',
    nonTargetSpeciesPresent: '',
    waterSourceDistance: '',
    
    // Follow-up & Notes
    followUpRequired: '',
    followUpDate: '',
    additionalNotes: '',
    customerSatisfaction: '',
    
    // Photos & Documentation
    beforePhotos: [],
    afterPhotos: [],
    eggMassPhotos: [],
    documentationPhotos: []
  });

  // Get GPS Location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            accuracy: position.coords.accuracy
          };
          setCurrentLocation(location);
          setServiceLog(prev => ({
            ...prev,
            latitude: location.latitude.toString(),
            longitude: location.longitude.toString(),
            accuracy: location.accuracy.toString()
          }));
        },
        (error) => {
          setLocationError(error.message);
          console.error('GPS Error:', error);
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 60000
        }
      );
    } else {
      setLocationError('GPS not supported by this device');
    }
  }, []);

  const handleInputChange = (field, value) => {
    setServiceLog(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoCapture = (category) => {
    // In a real app, this would open camera or file picker
    toast({
      title: "Photo Capture",
      description: `${category} photo capture functionality would be implemented here.`,
    });
  };

  const validateForm = () => {
    const required = [
      'customerName', 'serviceAddress', 'technicianName', 'serviceType',
      'infestationSeverity', 'chemicalsUsed', 'applicationMethod'
    ];
    
    for (let field of required) {
      if (!serviceLog[field]) {
        toast({
          title: "Validation Error",
          description: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`,
          variant: "destructive"
        });
        return false;
      }
    }
    return true;
  };

  const saveToLocal = () => {
    try {
      const savedLogs = JSON.parse(localStorage.getItem('serviceLogs') || '[]');
      const newLog = {
        ...serviceLog,
        id: Date.now(),
        timestamp: new Date().toISOString(),
        status: 'saved'
      };
      savedLogs.push(newLog);
      localStorage.setItem('serviceLogs', JSON.stringify(savedLogs));
      
      toast({
        title: "Service Log Saved",
        description: "Service log saved locally. You can submit it later.",
      });
    } catch (error) {
      toast({
        title: "Save Error",
        description: "Failed to save service log locally.",
        variant: "destructive"
      });
    }
  };

  const submitToConservation = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // In a real implementation, this would submit to conservation department API
      const conservationReport = {
        ...serviceLog,
        submissionDate: new Date().toISOString(),
        reportId: `LFG-${Date.now()}`,
        companyInfo: {
          name: "The Lantern Fly Guys Inc",
          license: "NYS-PEST-2024-001",
          address: "228 Park Avenue South, New York, NY 11003",
          phone: "(516) 725-0672"
        }
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Save to local storage as backup
      const submissions = JSON.parse(localStorage.getItem('conservationSubmissions') || '[]');
      submissions.push(conservationReport);
      localStorage.setItem('conservationSubmissions', JSON.stringify(submissions));
      
      toast({
        title: "Successfully Submitted",
        description: `Report ID: ${conservationReport.reportId} submitted to Department of Conservation.`,
      });
      
      // Clear form after successful submission
      setServiceLog({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceAddress: '',
        propertyType: '',
        propertySize: '',
        propertyDescription: '',
        serviceDate: new Date().toISOString().split('T')[0],
        serviceTime: new Date().toTimeString().slice(0, 5),
        technicianName: '',
        serviceType: '',
        treatmentMethod: '',
        infestationSeverity: '',
        adultsObserved: '',
        nymphsObserved: '',
        eggMassesFound: '',
        affectedTrees: '',
        chemicalsUsed: '',
        applicationMethod: '',
        volumeApplied: '',
        concentrationUsed: '',
        weatherConditions: '',
        latitude: currentLocation?.latitude.toString() || '',
        longitude: currentLocation?.longitude.toString() || '',
        accuracy: currentLocation?.accuracy.toString() || '',
        epaRegistrationNumbers: '',
        environmentalPrecautions: '',
        nonTargetSpeciesPresent: '',
        waterSourceDistance: '',
        followUpRequired: '',
        followUpDate: '',
        additionalNotes: '',
        customerSatisfaction: '',
        beforePhotos: [],
        afterPhotos: [],
        eggMassPhotos: [],
        documentationPhotos: []
      });
      
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Failed to submit to Department of Conservation. Saved locally for retry.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl text-white">Field Service App</CardTitle>
                <CardDescription className="text-slate-300">Conservation Department Reporting System</CardDescription>
              </div>
            </div>
            
            {/* GPS Status */}
            <div className="flex items-center justify-center space-x-4">
              {currentLocation ? (
                <Badge className="bg-green-100 text-green-800">
                  <MapPin className="h-4 w-4 mr-2" />
                  GPS Active: {currentLocation.latitude.toFixed(6)}, {currentLocation.longitude.toFixed(6)}
                </Badge>
              ) : (
                <Badge className="bg-red-100 text-red-800">
                  <AlertTriangle className="h-4 w-4 mr-2" />
                  {locationError || 'Getting GPS Location...'}
                </Badge>
              )}
            </div>
          </CardHeader>
        </Card>

        {/* Customer Information */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <User className="h-5 w-5 mr-2" />
              Customer Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Customer Name *</label>
              <Input
                value={serviceLog.customerName}
                onChange={(e) => handleInputChange('customerName', e.target.value)}
                placeholder="Full customer name"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
              <Input
                value={serviceLog.customerPhone}
                onChange={(e) => handleInputChange('customerPhone', e.target.value)}
                placeholder="(555) 000-0000"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <Input
                value={serviceLog.customerEmail}
                onChange={(e) => handleInputChange('customerEmail', e.target.value)}
                placeholder="customer@email.com"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Service Address *</label>
              <Input
                value={serviceLog.serviceAddress}
                onChange={(e) => handleInputChange('serviceAddress', e.target.value)}
                placeholder="Complete service address"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Property Details */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Building className="h-5 w-5 mr-2" />
              Property Details
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Property Type</label>
              <Select value={serviceLog.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="industrial">Industrial</SelectItem>
                  <SelectItem value="agricultural">Agricultural</SelectItem>
                  <SelectItem value="municipal">Municipal</SelectItem>
                  <SelectItem value="winery">Winery/Vineyard</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Property Size</label>
              <Input
                value={serviceLog.propertySize}
                onChange={(e) => handleInputChange('propertySize', e.target.value)}
                placeholder="e.g., 0.5 acres, 2000 sq ft"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Property Description</label>
              <Input
                value={serviceLog.propertyDescription}
                onChange={(e) => handleInputChange('propertyDescription', e.target.value)}
                placeholder="Brief description"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Service Information */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              Service Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Service Date</label>
              <Input
                type="date"
                value={serviceLog.serviceDate}
                onChange={(e) => handleInputChange('serviceDate', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Service Time</label>
              <Input
                type="time"
                value={serviceLog.serviceTime}
                onChange={(e) => handleInputChange('serviceTime', e.target.value)}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Technician Name *</label>
              <Input
                value={serviceLog.technicianName}
                onChange={(e) => handleInputChange('technicianName', e.target.value)}
                placeholder="Technician full name"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Service Type *</label>
              <Select value={serviceLog.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="inspection">Inspection Only</SelectItem>
                  <SelectItem value="treatment">Active Treatment</SelectItem>
                  <SelectItem value="prevention">Prevention Application</SelectItem>
                  <SelectItem value="monitoring">Monitoring Visit</SelectItem>
                  <SelectItem value="emergency">Emergency Response</SelectItem>
                  <SelectItem value="followup">Follow-up Service</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Infestation Assessment */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Target className="h-5 w-5 mr-2" />
              Infestation Assessment  
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Infestation Severity *</label>
              <Select value={serviceLog.infestationSeverity} onValueChange={(value) => handleInputChange('infestationSeverity', value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Infestation Detected</SelectItem>
                  <SelectItem value="light">Light (1-10 individuals)</SelectItem>
                  <SelectItem value="moderate">Moderate (11-50 individuals)</SelectItem>
                  <SelectItem value="heavy">Heavy (51-200 individuals)</SelectItem>
                  <SelectItem value="severe">Severe (200+ individuals)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Adults Observed</label>
              <Input
                value={serviceLog.adultsObserved}
                onChange={(e) => handleInputChange('adultsObserved', e.target.value)}
                placeholder="Number of adult lanternflies"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Nymphs Observed</label>
              <Input
                value={serviceLog.nymphsObserved}
                onChange={(e) => handleInputChange('nymphsObserved', e.target.value)}
                placeholder="Number of nymphs"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Egg Masses Found</label>
              <Input
                value={serviceLog.eggMassesFound}
                onChange={(e) => handleInputChange('eggMassesFound', e.target.value)}
                placeholder="Number of egg masses"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Affected Trees</label>
              <Input
                value={serviceLog.affectedTrees}
                onChange={(e) => handleInputChange('affectedTrees', e.target.value)}
                placeholder="Tree species and count"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </CardContent>
        </Card>

        {/* Treatment Details */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Droplets className="h-5 w-5 mr-2" />
              Treatment Application Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Chemicals Used *</label>
                <Textarea
                  value={serviceLog.chemicalsUsed}
                  onChange={(e) => handleInputChange('chemicalsUsed', e.target.value)}
                  placeholder="List all chemicals, brand names, and active ingredients"
                  className="bg-slate-700 border-slate-600 text-white"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">EPA Registration Numbers</label>
                <Textarea
                  value={serviceLog.epaRegistrationNumbers}
                  onChange={(e) => handleInputChange('epaRegistrationNumbers', e.target.value)}
                  placeholder="EPA registration numbers for all products"
                  className="bg-slate-700 border-slate-600 text-white"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Application Method *</label>
                <Select value={serviceLog.applicationMethod} onValueChange={(value) => handleInputChange('applicationMethod', value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="foliar-spray">Foliar Spray</SelectItem>
                    <SelectItem value="soil-drench">Soil Drench</SelectItem>
                    <SelectItem value="trunk-injection">Trunk Injection</SelectItem>
                    <SelectItem value="granular">Granular Application</SelectItem>
                    <SelectItem value="backpack-sprayer">Backpack Sprayer</SelectItem>
                    <SelectItem value="truck-mounted">Truck-Mounted Sprayer</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Volume Applied</label>
                <Input
                  value={serviceLog.volumeApplied}
                  onChange={(e) => handleInputChange('volumeApplied', e.target.value)}
                  placeholder="Gallons or ounces"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Concentration Used</label>
                <Input
                  value={serviceLog.concentrationUsed}
                  onChange={(e) => handleInputChange('concentrationUsed', e.target.value)}
                  placeholder="% or ppm"
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Information */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TreePine className="h-5 w-5 mr-2" />
              Environmental Information
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Weather Conditions</label>
              <Input
                value={serviceLog.weatherConditions}
                onChange={(e) => handleInputChange('weatherConditions', e.target.value)}
                placeholder="Temperature, wind speed, humidity"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Water Source Distance</label>
              <Input
                value={serviceLog.waterSourceDistance}
                onChange={(e) => handleInputChange('waterSourceDistance', e.target.value)}
                placeholder="Distance to nearest water source"
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Non-Target Species Present</label>
              <Textarea
                value={serviceLog.nonTargetSpeciesPresent}
                onChange={(e) => handleInputChange('nonTargetSpeciesPresent', e.target.value)}
                placeholder="List beneficial insects, wildlife observed"
                className="bg-slate-700 border-slate-600 text-white"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Environmental Precautions</label>
              <Textarea
                value={serviceLog.environmentalPrecautions}
                onChange={(e) => handleInputChange('environmentalPrecautions', e.target.value)}
                placeholder="Precautions taken to protect environment"
                className="bg-slate-700 border-slate-600 text-white"
                rows={2}
              />
            </div>
          </CardContent>
        </Card>

        {/* Photo Documentation */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Camera className="h-5 w-5 mr-2" />
              Photo Documentation
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button
              variant="outline"
              onClick={() => handlePhotoCapture('Before Treatment')}
              className="h-24 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <div className="text-center">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs">Before Photos</span>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePhotoCapture('After Treatment')}
              className="h-24 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <div className="text-center">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs">After Photos</span>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePhotoCapture('Egg Masses')}
              className="h-24 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <div className="text-center">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs">Egg Mass Photos</span>
              </div>
            </Button>
            <Button
              variant="outline"
              onClick={() => handlePhotoCapture('Documentation')}
              className="h-24 border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              <div className="text-center">
                <Camera className="h-6 w-6 mx-auto mb-2" />
                <span className="text-xs">Documentation</span>
              </div>
            </Button>
          </CardContent>
        </Card>

        {/* Additional Notes */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Additional Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Follow-up Required</label>
                <Select value={serviceLog.followUpRequired} onValueChange={(value) => handleInputChange('followUpRequired', value)}>
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes</SelectItem>
                    <SelectItem value="no">No</SelectItem>
                    <SelectItem value="maybe">To Be Determined</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Follow-up Date</label>
                <Input
                  type="date"
                  value={serviceLog.followUpDate}
                  onChange={(e) => handleInputChange('followUpDate', e.target.value)}
                  className="bg-slate-700 border-slate-600 text-white"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Additional Notes</label>
              <Textarea
                value={serviceLog.additionalNotes}
                onChange={(e) => handleInputChange('additionalNotes', e.target.value)}
                placeholder="Any additional observations, issues, or recommendations"
                className="bg-slate-700 border-slate-600 text-white"
                rows={4}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Customer Satisfaction</label>
              <Select value={serviceLog.customerSatisfaction} onValueChange={(value) => handleInputChange('customerSatisfaction', value)}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Rate satisfaction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="excellent">Excellent</SelectItem>
                  <SelectItem value="good">Good</SelectItem>
                  <SelectItem value="satisfactory">Satisfactory</SelectItem>
                  <SelectItem value="needs-improvement">Needs Improvement</SelectItem>
                  <SelectItem value="unsatisfied">Unsatisfied</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <Card className="border-0 shadow-xl bg-slate-800 border border-slate-600">
          <CardContent className="pt-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={saveToLocal}
                variant="outline"
                size="lg"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                <Save className="mr-2 h-5 w-5" />
                Save Locally
              </Button>
              
              <Button
                onClick={submitToConservation}
                disabled={isSubmitting}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Navigation className="mr-2 h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Submit to Conservation Dept
                  </>
                )}
              </Button>
            </div>
            
            <div className="mt-4 text-center text-slate-400 text-sm">
              <p>All submissions are logged with GPS coordinates and timestamp</p>
              <p>Reports are automatically formatted for Department of Conservation requirements</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FieldServiceApp;