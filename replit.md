# Vegan Places Finder

## Overview

This is a client-side web application that helps users discover vegan and vegetarian restaurants near them by integrating with HappyCow's services. The application features a clean, responsive design with a plant-based theme and focuses on providing a smooth user experience for finding plant-based dining options.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Pure HTML/CSS/JavaScript**: No frameworks or build tools, keeping the application lightweight and fast
- **Responsive Design**: Mobile-first approach using CSS Grid/Flexbox and clamp() functions for fluid typography
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features layered on top

### Design Philosophy
- **Performance-First**: Minimal dependencies, optimized loading, DNS prefetching
- **Accessibility**: Semantic HTML structure, proper meta tags, keyboard navigation support
- **SEO Optimized**: Comprehensive meta tags including Open Graph and Twitter Cards

## Key Components

### 1. HTML Structure (`index.html`)
- **Semantic Layout**: Proper header/main structure with accessibility in mind
- **Meta Optimization**: Complete SEO meta tags, Open Graph, and Twitter Card support
- **Performance Features**: Preconnect and DNS prefetch for external resources
- **Favicon**: SVG-based emoji favicon for lightweight branding

### 2. Styling System (`styles.css`)
- **CSS Reset**: Comprehensive reset for cross-browser consistency
- **Design System**: Consistent spacing, typography, and color schemes
- **Responsive Grid**: Flexible layout that adapts to all screen sizes
- **Visual Hierarchy**: Clear typography scale using clamp() for fluid responsiveness

### 3. JavaScript Functionality (`script.js`)
- **Widget Management**: Handles loading states and error handling for external widgets
- **Responsive Handling**: Dynamic adjustments based on screen size changes
- **Performance Monitoring**: Tracks loading attempts and implements fallback strategies
- **User Experience**: Handles visibility changes, online/offline states

## Data Flow

### Widget Integration Pattern
1. **Initial Load**: Application starts with loading state displayed
2. **Widget Embedding**: External HappyCow widget loaded via iframe
3. **State Management**: JavaScript monitors loading success/failure
4. **Error Handling**: Fallback states and retry mechanisms
5. **Responsive Updates**: Dynamic adjustments based on screen size and user interactions

### Performance Strategy
- Lazy loading of non-critical resources
- Timeout-based error handling
- Retry mechanisms for failed loads
- Efficient event handling with debouncing

## External Dependencies

### Primary Integration
- **HappyCow API/Widget**: External service for restaurant data (happycow.net)
- **DNS Prefetching**: Optimized connection to HappyCow servers

### Browser APIs Used
- **Intersection Observer**: For performance optimization
- **Visibility API**: For tab switching behavior
- **Online/Offline Detection**: For network status handling
- **Resize Observer**: For responsive adjustments

## Deployment Strategy

### Static Hosting Ready
- **No Build Process**: Direct deployment of HTML/CSS/JS files
- **CDN Compatible**: Optimized for static file serving
- **Caching Strategy**: Proper cache headers for static assets

### Performance Considerations
- **Minimal Bundle Size**: No external frameworks or heavy dependencies
- **Fast First Paint**: Critical CSS inlined, non-critical resources deferred
- **Mobile Optimization**: Responsive images and touch-friendly interactions

### Browser Support
- **Modern Browsers**: ES6+ features used with graceful degradation
- **Progressive Enhancement**: Core functionality works on older browsers
- **Accessibility Standards**: WCAG 2.1 compliance for inclusive design

## Development Guidelines

### Code Organization
- **Separation of Concerns**: Clear separation between structure, style, and behavior
- **Maintainable CSS**: BEM-inspired naming conventions and logical organization
- **Modular JavaScript**: Functions organized by responsibility with clear interfaces

### Performance Best Practices
- **Lazy Loading**: Non-critical resources loaded on demand
- **Debounced Events**: Optimized event handling to prevent performance issues
- **Memory Management**: Proper cleanup of event listeners and timeouts