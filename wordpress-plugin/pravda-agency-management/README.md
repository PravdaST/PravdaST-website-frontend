# Pravda Agency Management Plugin

Comprehensive WordPress plugin for managing all content for the Pravda Agency website through a headless CMS approach.

## Features

### Content Management
- **Services** - Manage all company services with pricing, features, and details
- **FAQ** - Organize frequently asked questions by categories
- **Case Studies** - Showcase client projects with metrics and results
- **Team Members** - Team profiles with expertise and social links
- **Resources** - Downloadable content like PDFs, guides, and tools
- **News & Updates** - Company announcements and industry insights
- **Testimonials** - Client reviews with ratings and project details
- **Site Settings** - Global website configuration

### API Integration
- Full REST API endpoints for headless integration
- Compatible with Next.js applications
- Automatic data synchronization
- SEO-optimized meta fields

### Admin Features
- Intuitive dashboard with content overview
- Bulk content management
- Real-time editing and preview
- Social media integration
- Analytics tracking setup

## Installation

1. Download the plugin folder `pravda-agency-management`
2. Upload to your WordPress installation: `/wp-content/plugins/`
3. Activate the plugin in WordPress Admin > Plugins
4. Configure settings in WordPress Admin > Pravda Settings

## API Endpoints

After activation, the following endpoints will be available:

### Base URL: `/wp-json/pravda/v1/`

#### Services
- `GET /services` - All services
- `GET /services/{slug}` - Single service by slug
- **Query Parameters:**
  - `category` - Filter by service category
  - `per_page` - Number of results per page

#### FAQ
- `GET /faq` - All FAQ items
- **Query Parameters:**
  - `category` - Filter by FAQ category

#### Case Studies
- `GET /case-studies` - All case studies
- `GET /case-studies/{slug}` - Single case study by slug
- **Query Parameters:**
  - `per_page` - Number of results per page

#### Team
- `GET /team` - All team members (ordered by menu_order)

#### Resources
- `GET /resources` - All resources
- **Query Parameters:**
  - `type` - Filter by resource type
  - `per_page` - Number of results per page

#### News
- `GET /news` - All news items
- **Query Parameters:**
  - `per_page` - Number of results per page

#### Testimonials
- `GET /testimonials` - All testimonials
- **Query Parameters:**
  - `min_rating` - Filter by minimum rating
  - `per_page` - Number of results per page

#### Site Settings
- `GET /settings` - All site configuration

## Content Types

### Services
- Title, description, excerpt
- Pricing information and payment terms
- Features list and benefits
- Duration and process steps
- Service categories
- Featured image

### FAQ
- Question and answer
- Category assignment
- Display order
- Featured status for popular questions

### Case Studies
- Client information and industry
- Project challenge and solution
- Metrics and results achieved
- Timeline and services used
- Client testimonials
- Featured images and media

### Team Members
- Name, position, and biography
- Years of experience
- Expertise and skills
- Education and certifications
- Social media profiles
- Profile photo
- Display order

### Resources
- Title, description, and benefits
- File URL and metadata
- Target audience
- Access level (public, email required, clients only, premium)
- Download tracking
- Resource type categorization

### News
- Title, content, and excerpt
- Priority level and featured status
- Social media sharing text
- Email campaign settings
- External links
- Publication status

### Testimonials
- Client name and company
- Position and project type
- Rating (1-5 stars)
- Results achieved
- Video testimonial URL
- Featured and verified status

## Configuration

### Initial Setup
1. Go to **Pravda Settings** in WordPress admin
2. Configure company information
3. Set up social media links
4. Add analytics tracking codes
5. Configure contact form settings

### Content Creation
1. Use the quick action buttons on the dashboard
2. Or navigate to individual post types in the admin menu
3. Fill in all required fields
4. Set categories and meta information
5. Publish when ready

### API Testing
Use the provided API endpoints to test integration:

```bash
# Get all services
curl "https://yourdomain.com/wp-json/pravda/v1/services"

# Get FAQ by category
curl "https://yourdomain.com/wp-json/pravda/v1/faq?category=seo-struktor"

# Get site settings
curl "https://yourdomain.com/wp-json/pravda/v1/settings"
```

## Integration with Next.js

### Example Service Integration
```javascript
// lib/wordpress-services.js
export async function getServices() {
  const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/pravda/v1/services`);
  const data = await response.json();
  return data.success ? data.data : [];
}

export async function getServiceBySlug(slug) {
  const response = await fetch(`${process.env.WORDPRESS_URL}/wp-json/pravda/v1/services/${slug}`);
  const data = await response.json();
  return data.success ? data.data : null;
}
```

### Example FAQ Integration
```javascript
// lib/wordpress-faq.js
export async function getFAQ(category = null) {
  const url = `${process.env.WORDPRESS_URL}/wp-json/pravda/v1/faq${category ? `?category=${category}` : ''}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.success ? data.data : [];
}
```

## Support

For technical support or customization requests, contact the development team.

## Changelog

### Version 1.0.0
- Initial release
- All core content types implemented
- REST API endpoints created
- Admin dashboard and settings
- Social media integration
- Analytics tracking setup
- Bulk content management tools

## Requirements

- WordPress 5.0 or higher
- PHP 7.4 or higher
- MySQL 5.6 or higher
- REST API enabled (default in WordPress)