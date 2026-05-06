# AfroBite Backend Architecture (NestJS)

This document outlines the proposed NestJS backend architecture for the AfroBite application, a platform for discovering and ordering African food.

## 1. Architectural Overview

The backend will be built using a **Modular Monolith** approach with **NestJS**, adhering to Domain-Driven Design (DDD) principles. This ensures clear boundaries between different business domains while keeping deployment simple initially.

**Core Technologies:**
- Framework: NestJS (TypeScript)
- Database: mongodb (Relational data: Users, Orders, Restaurants)

- Caching/PubSub: Redis (for caching menu items, managing order state events)
- Authentication: JWT-based Auth (with potential integration with Firebase Auth or Auth0)
- Payment Gateway: Stripe integration
- Storage: cloudinary

## 2. Module Structure

The application will be divided into the following core modules:

### 2.1 `UsersModule`
- **Responsibilities:** User registration, profile management, saved addresses, payment methods.
- **Entities:** `User`, `Address`, `UserPaymentMethod`

### 2.2 `AuthModule`
- **Responsibilities:** Login, Registration, JWT generation, Role-based Access Control (RBAC - User, Driver, RestaurantAdmin, SuperAdmin).
- **Integrations:** Uses Passport.js strategies.

### 2.3 `RestaurantsModule`
- **Responsibilities:** Restaurant listings, hours of operation, reviews, ratings, and location awareness.
- **Entities:** `Restaurant`, `RestaurantReview`, `OperatingHours`
- **Search capabilities:** PostGIS (if using Postgres) or a dedicated search index for proximity-based queries.

### 2.4 `MenuModule`
- **Responsibilities:** Managing categories (Main Dishes, Sides), dishes, portions, spicy levels, addons.
- **Entities:** `MenuCategory`, `MenuItem`, `MenuItemAddon`, `MenuItemOption`

### 2.5 `OrdersModule`
- **Responsibilities:** Order creation, cart validation, calculating totals (subtotal, taxes, delivery fee), status tracking (Pending, Preparing, Out for Delivery, Delivered).
- **Entities:** `Order`, `OrderItem`, `OrderTrackingState`
- **Events:** Emits events (`OrderCreated`, `OrderStatusUpdated`) via NestJS EventEmitter or Redis PubSub.

### 2.6 `PaymentsModule`
- **Responsibilities:** Processing transactions, handling webhooks from Stripe, managing refunds.
- **Entities:** `Transaction`

### 2.7 `DeliveryModule`
- **Responsibilities:** Assigning drivers, tracking driver location, calculating ETA.
- **Entities:** `Driver`, `DeliveryRoute`

## 3. Database Schema Concept (High Level)

- **User:** id, email, passwordHash, fullName, phoneNumber, createdAt
- **Restaurant:** id, name, description, address, coordinates, rating, isOpen, ownerId
- **MenuItem:** id, restaurantId, categoryId, name, description, basePrice, imageUrl, isPopular, isSpicy
- **Order:** id, userId, restaurantId, status, subtotal, deliveryFee, total, deliveryAddress, specialInstructions, createdAt
- **OrderItem:** id, orderId, menuItemId, quantity, selectedOptions (JSON), price

## 4. API Design (RESTful approach)

*Note: GraphQL could also be adopted depending on frontend data fetching complexity.*

- `POST /auth/register` - Create new user account
- `POST /auth/login` - Authenticate and retrieve JWT
- `GET /users/me` - Get current user profile
- `GET /restaurants?lat=x&lng=y&cuisine=z` - Search nearby restaurants
- `GET /restaurants/:id` - Get restaurant details
- `GET /restaurants/:id/menu` - Retrieve hierarchical menu
- `POST /orders` - Submit a new order (Checkout)
- `GET /orders/me` - View past orders
- `GET /orders/:id/track` - Real-time tracking info (could be upgraded to WebSockets via `orders gateway`)
- `POST /payments/webhook` - Stripe webhook handler

## 5. Security & Real-time Features

- **Guards:** Custom JWT Auth guards, Roles guards to restrict admin routes.
- **WebSockets:** Use NestJS WebSockets (`@nestjs/websockets` with Socket.io) for live order tracking (`Track.tsx` screen), driver location updates, and restaurant order notifications.
- **Validation:** Extensive use of `class-validator` and `class-transformer` on all incoming DTOs to enforce rigorous payload checking.
- **Rate Limiting:** Protect public endpoints (`/login`, `/restaurants`) using `@nestjs/throttler`.

## 6. Deployment & Devops

- **Containerization:** Dockerized NestJS application.
- **CI/CD:** GitHub Actions for testing and building image.
- **Hosting:** Cloud Run (GCP) or AWS ECS, connected to managed PostgreSQL instances.
