# The Lantern Fly Guys - API Contracts & Integration Plan

## Overview
This document outlines the API contracts and integration plan for The Lantern Fly Guys website, which currently uses mock data and will be enhanced with backend functionality.

## Current Mock Data Implementation
The following data is currently mocked in `/frontend/src/mock.js`:

### 1. Company Information
- Contact details, hours, addresses
- Team member information
- Service guarantees

### 2. Services Data
- 6 main service categories with features
- Technology descriptions and benefits
- Process steps and explanations

### 3. Reviews Data
- 100 generated customer reviews
- Rating breakdown and statistics
- Service-specific testimonials

### 4. FAQ Data
- Common questions and answers
- Technical information about treatments

## Proposed API Endpoints

### Authentication & Users
```
POST /api/auth/login - Admin login
POST /api/auth/logout - Admin logout  
GET /api/auth/me - Get current user
```

### Contact & Leads Management
```
POST /api/contacts - Submit contact form
GET /api/contacts - Get all contacts (admin only)
PUT /api/contacts/:id - Update contact status
DELETE /api/contacts/:id - Delete contact
```

### Reviews Management
```
GET /api/reviews - Get all reviews (public)
POST /api/reviews - Submit new review
GET /api/reviews/stats - Get review statistics
PUT /api/reviews/:id - Update review (admin only)
DELETE /api/reviews/:id - Delete review (admin only)
```

### Services Management
```
GET /api/services - Get all services
POST /api/services - Create service (admin only)
PUT /api/services/:id - Update service (admin only)
DELETE /api/services/:id - Delete service (admin only)
```

### Analytics & Reporting
```
GET /api/analytics/leads - Lead generation stats
GET /api/analytics/reviews - Review analytics
GET /api/analytics/traffic - Website traffic data
```

## Database Schema

### Contacts Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  phone: String,
  propertyType: String, // residential, commercial, hoa, winery, municipal
  serviceType: String,  // assessment, treatment, prevention, emergency
  message: String,
  preferredContact: String, // phone, email, text
  status: String, // new, contacted, qualified, converted, closed
  source: String, // website, referral, advertising
  createdAt: Date,
  updatedAt: Date,
  assignedTo: String, // team member
  notes: [{ 
    text: String, 
    author: String, 
    createdAt: Date 
  }]
}
```

### Reviews Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  location: String,
  rating: Number, // 1-5
  text: String,
  service: String, // Residential, Commercial, HOA Services, etc.
  verified: Boolean,
  approved: Boolean,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date,
  response: String, // Company response to review
  source: String // google, website, yelp
}
```

### Services Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  features: [String],
  icon: String,
  category: String, // residential, commercial, specialty
  active: Boolean,
  order: Number,
  pricing: {
    startingPrice: Number,
    priceRange: String,
    factors: [String]
  },
  createdAt: Date,
  updatedAt: Date
}
```

### Analytics Collection
```javascript
{
  _id: ObjectId,
  date: Date,
  pageViews: Number,
  uniqueVisitors: Number,
  contactFormSubmissions: Number,
  phoneCallClicks: Number,
  topPages: [{ page: String, views: Number }],
  leadSources: [{ source: String, count: Number }],
  conversionRate: Number
}
```

## Frontend Integration Plan

### 1. Contact Form Enhancement
**Current**: Mock form submission with toast notification
**Enhanced**: 
- Real form submission to `/api/contacts`
- Form validation and error handling
- Email confirmation to user
- Admin notification system

### 2. Reviews System
**Current**: Static mock reviews displayed
**Enhanced**:
- Dynamic reviews loading from database
- Review submission form for customers
- Admin moderation interface
- Review filtering and search

### 3. Admin Dashboard
**New Feature**:
- Protected admin routes
- Lead management interface
- Review moderation system
- Analytics dashboard
- Service content management

### 4. SEO & Analytics
**Enhanced**:
- Google Analytics integration
- Meta tags optimization
- Structured data for reviews
- Sitemap generation

## Security Considerations

### 1. Input Validation
- Sanitize all form inputs
- Rate limiting on contact forms
- CAPTCHA for review submissions

### 2. Admin Authentication
- JWT-based authentication
- Role-based access control
- Session management

### 3. Data Protection
- Encrypt sensitive customer data
- GDPR compliance for contact information
- Secure API endpoints

## Mobile Optimization

### Current Status
- Fully responsive design implemented
- Mobile-first approach
- Touch-friendly interactions

### Enhancements
- Progressive Web App (PWA) features
- Offline contact form caching
- Push notifications for updates

## Performance Optimization

### Current Implementation
- Optimized images from Unsplash
- Lazy loading for review cards
- Efficient component structure

### Future Enhancements
- Image optimization and CDN
- API response caching
- Database indexing for searches

## Testing Strategy

### Frontend Testing
- Component unit tests
- Integration tests for forms
- E2E testing for user flows
- Mobile responsiveness testing

### Backend Testing
- API endpoint testing
- Database operation testing
- Security vulnerability testing
- Performance testing under load

## Deployment Considerations

### Current Setup
- Frontend ready for deployment
- Environment variables configured
- Responsive design completed

### Production Requirements
- SSL certificate for security
- Database backup strategy
- Monitoring and logging
- Error tracking system

## Success Metrics

### Lead Generation
- Contact form conversion rate
- Phone call click-through rate
- Page-to-lead conversion by source

### Customer Engagement
- Review submission rate
- Average time on site
- Page depth per session

### Business Impact
- Lead quality scoring
- Conversion to customer rate
- Customer acquisition cost

This website provides an excellent foundation with professional design, comprehensive content, and user-friendly interfaces. The mock data creates a realistic preview of the full functionality while maintaining clean code structure for easy backend integration.