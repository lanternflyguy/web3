import React from 'react';
import { Facebook, Linkedin, Music, Instagram, Twitter } from 'lucide-react';

const SocialMediaLinks = ({ className = "flex space-x-4", showLabels = false }) => {
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/LanternFlyGuysInc',
      icon: Facebook,
      color: 'text-blue-600 hover:text-blue-700',
      description: 'Follow us on Facebook for pest control tips and company updates'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/lantern-fly-guys-inc',
      icon: Linkedin,
      color: 'text-blue-700 hover:text-blue-800',
      description: 'Connect with us on LinkedIn for professional updates and industry insights'
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@lanternflyguys',
      icon: Music,
      color: 'text-pink-600 hover:text-pink-700',
      description: 'Watch educational videos about spotted lanternflies on TikTok'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/lanternflyguys',
      icon: Instagram,
      color: 'text-purple-600 hover:text-purple-700',
      description: 'See our work in action on Instagram'
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/lanternflyguys',
      icon: Twitter,
      color: 'text-blue-500 hover:text-blue-600',
      description: 'Follow us on Twitter for real-time updates and pest alerts'
    }
  ];

  const handleSocialClick = (platform, url) => {
    // Track social media clicks
    if (typeof gtag !== 'undefined') {
      gtag('event', 'social_media_click', {
        event_category: 'engagement',
        event_label: platform,
        destination_url: url
      });
    }

    // Custom tracking
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'social_media_engagement',
        platform: platform,
        url: url,
        timestamp: new Date().toISOString()
      });
    }
  };

  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`${social.color} transition-colors duration-200 flex items-center space-x-2 group`}
          onClick={() => handleSocialClick(social.name, social.url)}
          title={social.description}
          aria-label={`Follow The Lantern Fly Guys on ${social.name}`}
        >
          <social.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
          {showLabels && (
            <span className="text-sm font-medium">{social.name}</span>
          )}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;