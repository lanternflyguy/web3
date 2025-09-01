// Mock data for The Lantern Fly Guys website

export const companyInfo = {
  name: "The Lantern Fly Guys",
  tagline: "Premier Spotted Lanternfly Elimination Specialists",
  phone: "(516) 930-2508",
  alternatePhone: "(516) 930-2508",
  email: "chris@lanternflyguy.com",
  alternateEmail: "joecusick@thelanternflyguy.com",
  address: "228 Park Avenue South, New York, NY 11003",
  hours: "Monday - Friday: 9:00 AM - 5:00 PM",
  emergencyService: "24/7 Emergency Response Available"
};

export const services = [
  {
    id: 1,
    title: "Residential Property Protection",
    description: "Complete spotted lanternfly elimination for homes and residential properties",
    features: ["Property Inspection", "Customized Treatment Plans", "Season-Long Protection", "Heritage Tree Care"],
    icon: "Home"
  },
  {
    id: 2,
    title: "Integrated Pest Management (IPM)",
    description: "Comprehensive pest control solutions focusing on prevention, monitoring, and environmentally responsible management",
    features: ["Prevention Strategies", "Continuous Monitoring", "Environmental Responsibility", "Long-term Solutions"],
    icon: "Shield"
  },
  {
    id: 3,
    title: "Spotted Lanternfly Control",
    description: "Specialized services for identification, monitoring, and eradication of spotted lanternflies",
    features: ["Expert Identification", "Targeted Treatments", "Commercial Property Focus", "Lifecycle Management"],
    icon: "Target"
  },
  {
    id: 4,
    title: "Heritage Tree Preservation",
    description: "Expert assessment and treatment plans to protect mature and historically significant trees",
    features: ["Tree Health Assessment", "Preservation Planning", "Treatment Implementation", "Ongoing Monitoring"],
    icon: "TreePine"
  },
  {
    id: 5,
    title: "Pest Inspections",
    description: "Routine inspections to detect signs of pest activity and prevent infestations",
    features: ["Regular Inspections", "Early Detection", "Preventive Approach", "Detailed Reporting"],
    icon: "Search"
  },
  {
    id: 6,
    title: "Organic Residual Application",
    description: "Professional organic pesticide application for adult spotted lanternfly elimination with residual protection",
    features: ["OMRI Certified Products", "Adult Elimination Focus", "Residual Protection", "Eco-Friendly Application"],
    icon: "Droplets"
  },
  {
    id: 7,
    title: "Soil Treatment System",
    description: "Advanced soil-based treatment providing systemic protection through plant uptake",
    features: ["Root Zone Application", "Systemic Protection", "Long-Lasting Results", "Organic Compliance"],
    icon: "Layers"
  },
  {
    id: 8,
    title: "Emergency Response",
    description: "Rapid response for severe infestations and urgent situations",
    features: ["24/7 Availability", "Rapid Deployment", "Crisis Management", "Same-Day Service"],
    icon: "Zap"
  },
  {
    id: 9,
    title: "Consultation Services",
    description: "Professional advice on pest management, tree preservation, and regulatory compliance",
    features: ["Expert Advice", "Best Practices", "Regulatory Compliance", "Property Management Support"],
    icon: "MessageSquare"
  },
  {
    id: 10,
    title: "Training & Education",
    description: "Workshops and training sessions for property managers and staff on pest awareness and prevention",
    features: ["Staff Training", "Educational Workshops", "Pest Awareness", "Prevention Techniques"],
    icon: "BookOpen"
  },
  {
    id: 11,
    title: "Emergency Response Services",
    description: "Rapid response for urgent pest issues to minimize damage and operational disruption",
    features: ["24/7 Availability", "Rapid Response", "Crisis Management", "Minimal Disruption"],
    icon: "Zap"
  },
  {
    id: 12,
    title: "Sustainability Initiatives",
    description: "Eco-friendly pest management solutions aligned with sustainable and environmentally conscious practices",
    features: ["Eco-Friendly Solutions", "Sustainable Practices", "Environmental Compliance", "Green Alternatives"],
    icon: "Leaf"
  },
  {
    id: 13,
    title: "Reporting & Documentation",
    description: "Detailed reporting and documentation of pest management activities and regulatory compliance",
    features: ["Detailed Reports", "Regulatory Documentation", "Activity Tracking", "Compliance Records"],
    icon: "FileText"
  },
  {
    id: 14,
    title: "Municipal Services",
    description: "Large-scale pest management for cities, municipalities, and government facilities",
    features: ["Public Property Treatment", "Park Protection", "Government Contracts", "Community Outreach"],
    icon: "MapPin"
  }
];

export const technologyFeatures = [
  {
    title: "Patent-Pending BT Gen 2 Enhanced Management System",
    description: "Our patent-pending elimination technology achieves 85-90% spotted lanternfly elimination",
    benefits: ["Season-long protection", "Eco-friendly approach", "OMRI organic compliance", "Proven effectiveness"]
  },
  {
    title: "BioCertified Living Sentinels",
    description: "Transform trees into natural protectors that eliminate spotted lanternflies",
    benefits: ["Invisible protection", "Natural approach", "Long-lasting results", "Heritage tree preservation"]
  },
  {
    title: "Organic Soil Treatment System",
    description: "Advanced soil-based treatment system providing long-lasting protection through root uptake",
    benefits: ["OMRI organic compliance", "Season-long protection", "Environmental safety", "Sustained effectiveness"]
  }
];

export const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Westchester County, NY",
    rating: 5,
    text: "The Lantern Fly Guys saved our vineyard! Their patent-pending BT Gen 2 system eliminated the spotted lanternfly problem completely. Professional, knowledgeable, and results-driven.",
    service: "Winery Protection",
    date: "2024-08-15"
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Princeton, NJ",
    rating: 5,
    text: "Outstanding service for our HOA community. They educated our residents and provided comprehensive treatment. No more lanternfly issues!",
    service: "HOA Services",
    date: "2024-07-22"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Philadelphia, PA", 
    rating: 5,
    text: "Professional and thorough. Our heritage oak trees are now protected and healthy. The root injection system works perfectly.",
    service: "Residential",
    date: "2024-08-01"
  },
  {
    id: 4,
    name: "David Thompson",
    location: "Long Island, NY",
    rating: 5,
    text: "Emergency response was incredible. They arrived within hours and eliminated a severe infestation at our commercial property.",
    service: "Commercial",
    date: "2024-07-30"
  },
  {
    id: 5,
    name: "Jennifer Walsh",
    location: "Connecticut",
    rating: 5,
    text: "Eco-friendly solutions that actually work! Our family feels safe and our property is completely protected.",
    service: "Residential",
    date: "2024-08-10"
  }
];

// Generate additional reviews to reach 100
const generateAdditionalReviews = () => {
  const names = [
    "Robert Miller", "Lisa Anderson", "James Wilson", "Maria Garcia", "John Davis",
    "Amanda Brown", "Christopher Lee", "Nicole Taylor", "Daniel Martinez", "Jessica White",
    "Matthew Johnson", "Ashley Thompson", "Ryan Clark", "Stephanie Lewis", "Kevin Hall",
    "Michelle Young", "Brian Allen", "Kimberly King", "Timothy Wright", "Rebecca Lopez",
    "Jason Scott", "Amy Green", "Mark Adams", "Rachel Baker", "Andrew Nelson",
    "Melissa Carter", "Thomas Mitchell", "Heather Perez", "Charles Roberts", "Laura Turner",
    "William Phillips", "Jennifer Campbell", "Joseph Parker", "Sharon Evans", "Steven Edwards",
    "Donna Collins", "Anthony Stewart", "Carol Sanchez", "Kenneth Morris", "Ruth Rogers",
    "Paul Reed", "Helen Cook", "Edward Bailey", "Sandra Rivera", "Carl Cooper", "Karen Richardson",
    "Frank Cox", "Betty Ward", "Gregory Torres", "Nancy Peterson", "Raymond Gray", "Lisa Ramirez",
    "Jerry James", "Shirley Watson", "Dennis Brooks", "Patricia Kelly", "Walter Sanders", "Cynthia Price",
    "Harold Bennett", "Angela Wood", "Arthur Barnes", "Brenda Ross", "Henry Henderson", "Emma Coleman",
    "Roger Jenkins", "Deborah Perry", "Jose Powell", "Julie Long", "Ralph Patterson", "Kathleen Hughes",
    "Jack Flores", "Gloria Washington", "Eugene Butler", "Teresa Simmons", "Philip Foster", "Diana Gonzales",
    "Louis Bryant", "Cheryl Alexander", "Albert Russell", "Megan Griffin", "Wayne Diaz", "Janet Hayes",
    "Billy Myers", "Carolyn Ford", "Bruce Hamilton", "Frances Graham", "Willie Sullivan", "Joan Wallace",
    "Roy Woods", "Evelyn Cole", "Eugene West", "Jean Jordan", "Louis Owens", "Alice Reynolds",
    "Jesse Fisher", "Judith Ellis", "Samuel Murray", "Martha Harper", "Willie Mason", "Kelly Dixon",
    "Peter Hunt", "Christine Wells", "Fred Silva", "Debra Stevens", "Victor Hicks", "Kathleen Crawford",
    "Johnny Henry", "Marie Boyd", "Billy Mason", "Jacqueline Reed", "Ralph Mendoza", "Doris Morales"  
  ];
  
  const locations = [
    "New York, NY", "New Jersey, NJ", "Pennsylvania, PA", "Connecticut, CT", 
    "Delaware, DE", "Maryland, MD", "Virginia, VA", "Massachusetts, MA",
    "Westchester County, NY", "Nassau County, NY", "Suffolk County, NY", "Essex County, NJ",
    "Bergen County, NJ", "Montgomery County, PA", "Bucks County, PA", "Fairfield County, CT"
  ];
  
  const serviceTypes = ["Residential", "Commercial", "HOA Services", "Winery Protection", "Municipal"];
  
  const reviewTexts = [
    "Exceptional service! The team was professional and got rid of our spotted lanternfly problem quickly.",
    "Highly recommend The Lantern Fly Guys. Their eco-friendly approach worked perfectly for our property.",
    "Outstanding results with their patent-pending BT Gen 2 system. No more pest issues and our trees are healthier than ever.",
    "Professional, punctual, and effective. The best pest control service we've ever used.",
    "Amazing customer service and fantastic results. Our property is completely protected now.",
    "The team went above and beyond our expectations. Thorough inspection and perfect execution.",
    "Incredible knowledge about spotted lanternflies. They educated us and solved the problem completely.",
    "Fast response time and excellent results. Would definitely use their services again.",
    "Best investment we made for our property. The protection system works flawlessly.",
    "Professional team with cutting-edge technology. Results speak for themselves.",
    "Courteous staff and exceptional service quality. Highly satisfied with the outcome.",
    "The BioCertified Living Sentinels approach is genius. Natural and effective protection.",
    "Emergency service was incredible. They saved our event from being ruined by pests.",
    "Comprehensive treatment plan that actually works. Our community is pest-free now.",
    "Heritage tree protection service exceeded all expectations. Trees are thriving!",
    "Organic compliance was crucial for us, and they delivered perfectly safe solutions.",
    "Season-long protection as promised. No maintenance headaches, just results.",
    "Staff training and education they provided was invaluable for our facility.",
    "Government contract fulfilled with excellence. Municipal services at their finest.",
    "Vineyard protection service saved our harvest. Professional wine industry expertise."
  ];
  
  const additionalReviews = [];
  
  for (let i = 6; i <= 100; i++) {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomLocation = locations[Math.floor(Math.random() * locations.length)];
    const randomService = serviceTypes[Math.floor(Math.random() * serviceTypes.length)];
    const randomText = reviewTexts[Math.floor(Math.random() * reviewTexts.length)];
    
    // Generate random dates within the last 6 months
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    const randomDate = new Date(sixMonthsAgo.getTime() + Math.random() * (today.getTime() - sixMonthsAgo.getTime()));
    
    additionalReviews.push({
      id: i,
      name: randomName,
      location: randomLocation,
      rating: Math.random() > 0.1 ? 5 : 4,  // 90% 5-star, 10% 4-star
      text: randomText,
      service: randomService,
      date: randomDate.toISOString().split('T')[0]
    });
  }
  
  return additionalReviews;
};

export const allReviews = [...reviews, ...generateAdditionalReviews()];

export const faqData = [
  {
    question: "What is a spotted lanternfly and why is it a problem?",
    answer: "The spotted lanternfly is an invasive insect that feeds on tree sap, weakening plants and trees. They secrete honeydew which promotes sooty mold growth, further damaging vegetation and creating sticky surfaces on outdoor furniture and vehicles."
  },
  {
    question: "How effective is your patent-pending BT Gen 2 Enhanced Management System?",
    answer: "Our patent-pending BT Gen 2 system achieves 85-90% spotted lanternfly elimination with season-long protection. It's OMRI organic compliant and completely safe for people, pets, and beneficial insects."
  },
  {
    question: "Do you offer emergency services?",
    answer: "Yes! We provide 24/7 emergency response for severe infestations. Our rapid deployment team can be on-site within hours to address urgent pest situations."
  },
  {
    question: "Is your treatment safe for children and pets?",
    answer: "Absolutely. All our treatments are eco-friendly and OMRI organic compliant. Our BioCertified Living Sentinels approach uses natural methods that are completely safe for families and pets."
  },
  {
    question: "How long does the protection last?",
    answer: "Our treatments provide season-long protection, typically lasting 6-8 months. We also offer ongoing monitoring and maintenance programs to ensure continued effectiveness."
  },
  {
    question: "Do you service commercial properties and HOAs?",
    answer: "Yes, we specialize in commercial properties, HOA communities, wineries, and municipal contracts. We offer bulk treatment rates and comprehensive community management programs."
  }
];

export const teamMembers = [
  {
    name: "Christopher Schenker",
    title: "CEO & Co-Inventor",
    phone: "(516) 725-0672",
    email: "chris@lanternflyguy.com",
    specialization: "Business Operations & Strategic Development",
    bio: "Co-founder and inventor of the revolutionary patent-pending BT Gen 2 system with over 15 years in pest management."
  },
  {
    name: "Joseph Cusick", 
    title: "CTO & Co-Inventor",
    phone: "(516) 725-0672",
    email: "joecusick@thelanternflyguy.com",
    specialization: "Technology Development & Innovation",
    bio: "Technical co-founder focused on developing cutting-edge spotted lanternfly elimination technologies."
  }
];

export const statsData = [
  { number: "10,000+", label: "Properties Protected", icon: "Shield" },
  { number: "85-90%", label: "Elimination Rate", icon: "Target" },
  { number: "24/7", label: "Emergency Response", icon: "Clock" },
  { number: "100%", label: "Organic Compliance", icon: "Leaf" }
];