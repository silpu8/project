# India Travel & Culture Platform

## Overview

This is a full-stack web application showcasing the cultural heritage and tourist attractions of Ladakh and Karnataka, two diverse regions of India. The platform provides travel information, cultural insights, and an inquiry system for custom travel planning.

## System Architecture

The application follows a modern monorepo structure with clear separation between frontend, backend, and shared code:

- **Frontend**: React with TypeScript, built using Vite
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **UI Framework**: Tailwind CSS with shadcn/ui components
- **State Management**: TanStack Query for server state

## Key Components

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom theme variables for regional branding
- **Component Library**: shadcn/ui with Radix UI primitives
- **Build Tool**: Vite with custom configuration for development and production
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Validation**: Zod schemas for request validation
- **Session Management**: PostgreSQL session store with connect-pg-simple

### Database Schema
The application uses two main entities:
- **Users**: Basic user management with username/password authentication
- **Inquiries**: Travel inquiry submissions with contact details and preferences

### UI Design System
- **Theme**: Dual-color scheme representing both regions (Ladakh blue, Karnataka orange)
- **Components**: Comprehensive UI component library with consistent styling
- **Responsive**: Mobile-first design with adaptive layouts
- **Accessibility**: Built on Radix UI primitives for better accessibility support

## Data Flow

1. **User Interaction**: Users browse regional content and submit travel inquiries
2. **Form Submission**: Contact forms are validated client-side with Zod schemas
3. **API Communication**: TanStack Query manages API calls and caching
4. **Database Operations**: Drizzle ORM handles database queries with type safety
5. **Response Handling**: Success/error states are managed through toast notifications

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Neon PostgreSQL database driver
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **react-hook-form**: Form handling with validation
- **wouter**: Lightweight routing library

### UI Dependencies
- **@radix-ui/***: Headless UI primitives for accessibility
- **tailwindcss**: Utility-first CSS framework
- **lucide-react**: Icon library
- **framer-motion**: Animation library for enhanced UX

### Development Tools
- **vite**: Build tool and development server
- **typescript**: Type safety and development experience
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

The application is configured for deployment on Replit with the following setup:

### Development Mode
- **Frontend**: Vite dev server with HMR and React Fast Refresh
- **Backend**: tsx for TypeScript execution with automatic restarts
- **Database**: Neon PostgreSQL cloud database

### Production Build
- **Frontend**: Static files built with Vite and served by Express
- **Backend**: Bundled with esbuild for optimized Node.js execution
- **Database**: PostgreSQL with connection pooling

### Environment Configuration
- Database connection via `DATABASE_URL` environment variable
- Drizzle migrations in `./migrations` directory
- Static assets served from `dist/public` in production

## Changelog
- July 04, 2025. Initial setup
- July 04, 2025. Completed comprehensive travel website with interactive features, regional showcases, and streamlined design

## Recent Changes
- Built complete travel website showcasing Ladakh and Karnataka
- Implemented interactive hero section with region switching
- Created dedicated pages for attractions, culture, and travel planning
- Added working contact form for custom itinerary requests
- Integrated authentic travel data and cultural information
- Streamlined design by removing excessive call-to-action buttons
- Fixed TypeScript issues and optimized user experience

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Clean, streamlined interface without cluttered buttons.