# NinjaCart --- Mock UI Document

> Farmer-to-retailer marketplace --- UI/UX wireframe specification

## 1. Application Structure

---

Area Screens

---

Public Landing Page, Login, Sign Up

Farmer Dashboard, Add Product, Product
Details

Retailer Marketplace, Product Details, Cart,
Orders, Order Confirmation

---

---

## 2. Public Screens

### Landing Page

**User:** Visitor\
**Purpose:** Introduce NinjaCart and guide visitors toward
authentication.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                         About | How it works | Login │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│             FROM FARM TO RETAIL, MADE SIMPLE.                │
│                                                              │
│                 [ Get Started ]  [ Learn More ]               │
│                                                              │
│                    HOW IT WORKS                               │
│                                                              │
│  1. Farmers List      2. Retailers Browse    3. Place Order │
│     Produce              Products               Securely      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- NinjaCart logo / brand name
- About and How it works navigation
- Primary CTA: Get Started
- Secondary CTA: Learn More
- Short marketplace introduction
- Three-step process: List Produce → Browse Products → Place an Order

### Login

**User:** Farmer / Retailer\
**Purpose:** Authenticate an existing account.

#### Mock Layout

```text
┌──────────────────────────────────────────┐
│                 NinjaCart                │
│                                          │
│                 Welcome Back             │
│                                          │
│  Email                                   │
│  [_______________________________]       │
│                                          │
│  Password                                │
│  [_______________________________]       │
│                                          │
│              [ Login ]                   │
│                                          │
│          Don't have an account?          │
│                Sign Up                   │
└──────────────────────────────────────────┘
```

#### Key UI Elements

- Email input
- Password input
- Login button
- Link to Sign Up
- Invalid-credentials error area

### Sign Up

**User:** New Farmer / Retailer\
**Purpose:** Create an account and select the user role.

#### Mock Layout

```text
┌──────────────────────────────────────────┐
│                 Create Account            │
│                                          │
│  Name                                    │
│  [_______________________________]       │
│                                          │
│  Email                                   │
│  [_______________________________]       │
│                                          │
│  Password                                │
│  [_______________________________]       │
│                                          │
│  Select Role                             │
│  ( ) Farmer       ( ) Retailer           │
│                                          │
│             [ Sign Up ]                  │
└──────────────────────────────────────────┘
```

#### Key UI Elements

- Name input
- Email input
- Password input
- Role selection: Farmer / Retailer
- Sign Up button
- Link to Login

---

## 3. Farmer Screens

### Farmer Dashboard

**User:** Farmer\
**Purpose:** Manage produce listings and view inventory performance.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                      [ Sign Out ]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  My Products                              [ + Add Product ]  │
│                                                              │
│  ┌────────────────────┐  ┌────────────────────┐              │
│  │     Product Image  │  │     Product Image  │              │
│  │                    │  │                    │              │
│  │  Tomatoes          │  │  Potatoes          │              │
│  │  ₹40 / kg          │  │  ₹30 / kg          │              │
│  │                    │  │                    │              │
│  │  Sold: 20 kg       │  │  Sold: 15 kg       │              │
│  │  Remaining: 30 kg  │  │  Remaining: 25 kg  │              │
│  └────────────────────┘  └────────────────────┘              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Dashboard heading and Add Product button
- Product cards with image, name, type and price
- Sold quantity
- Remaining quantity
- Clickable product cards
- Sign Out action

### Add Product

**User:** Farmer\
**Purpose:** Create a new produce listing.

#### Mock Layout

```text
┌──────────────────────────────────────────┐
│              Add New Product             │
│                                          │
│  Product Image                           │
│  [       Upload Image       ]            │
│                                          │
│  Product Name                            │
│  [_______________________________]       │
│                                          │
│  Product Type                            │
│  [_______________________________]       │
│                                          │
│  Price per kg                            │
│  [_______________________________]       │
│                                          │
│  Available Quantity                      │
│  [_______________________________]       │
│                                          │
│  Description                             │
│  [_______________________________]       │
│  [_______________________________]       │
│                                          │
│          [ Create Product ]              │
└──────────────────────────────────────────┘
```

#### Key UI Elements

- Product image upload
- Product name
- Product type
- Price per kg
- Available quantity
- Product description
- Create Product button
- Validation / error feedback

### Farmer Product Details

**User:** Farmer\
**Purpose:** View the current state of a farmer-owned listing.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                      [ Sign Out ]  │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ← Back to Dashboard                                        │
│                                                              │
│  ┌──────────────────────┐    Tomatoes                        │
│  │                      │    Type: Vegetable                 │
│  │     Product Image    │                                    │
│  │                      │    ₹40 / kg                        │
│  │                      │                                    │
│  └──────────────────────┘    Sold: 20 kg                    │
│                                Remaining: 30 kg               │
│                                                              │
│  Description                                                 │
│  Fresh farm-produced tomatoes available for retailers.      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Large product image
- Product name and type
- Description
- Price per kg
- Sold quantity
- Remaining quantity
- Back to dashboard

---

## 4. Retailer Screens

### Retailer Marketplace

**User:** Retailer\
**Purpose:** Browse currently available produce.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                  [ Cart ] [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Available Products                                          │
│                                                              │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐       │
│  │ Product Image │ │ Product Image │ │ Product Image │       │
│  │ Tomatoes      │ │ Potatoes      │ │ Onions        │       │
│  │ ₹40 / kg      │ │ ₹30 / kg      │ │ ₹35 / kg      │       │
│  │ 30 kg left    │ │ 25 kg left    │ │ 40 kg left    │       │
│  └───────────────┘ └───────────────┘ └───────────────┘       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Marketplace heading
- Product cards with image, name, type and price
- Available quantity
- Product cards link to details
- Cart navigation
- Only products with available stock are displayed

### Retailer Product Details

**User:** Retailer\
**Purpose:** Inspect a product before adding it to the cart.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                  [ Cart ] [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────────────────┐    Tomatoes                        │
│  │                      │    Fresh farm produce              │
│  │     Product Image    │                                    │
│  │                      │    ₹40 / kg                        │
│  └──────────────────────┘                                    │
│                                                              │
│  Available: 30 kg                                            │
│                                                              │
│  Quantity     [ − ]   5   [ + ]                              │
│                                                              │
│                   [ Add to Cart ]                             │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Large product image
- Product name, type and description
- Price per kg
- Available quantity
- Quantity selector (+ / −)
- Add to Cart button
- Cart navigation

### Shopping Cart

**User:** Retailer\
**Purpose:** Review selected products before placing an order.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                  [ Cart ] [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Your Cart                                                   │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Image │ Tomatoes   │ ₹40/kg │ [ − ] 5 [ + ] │ Remove  │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Image │ Potatoes   │ ₹30/kg │ [ − ] 3 [ + ] │ Remove  │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│                                      Total: ₹290             │
│                                      [ Place Order ]          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Cart item image and product name
- Price per kg
- Selected quantity
- Quantity controls
- Remove item action
- Order total
- Place Order button
- Stock refreshed before checkout

### Order Confirmation

**User:** Retailer\
**Purpose:** Confirm that the order was successfully placed.

#### Mock Layout

```text
┌──────────────────────────────────────────────┐
│                                              │
│             ✓ Order Confirmed                │
│                                              │
│  Order ID: clxxxxxxxxxxxx                    │
│                                              │
│  Order Items                                 │
│  ─────────────────────────────────────────   │
│  Tomatoes                                    │
│  ₹40 × 5 kg                         ₹200      │
│                                              │
│  Potatoes                                    │
│  ₹30 × 3 kg                          ₹90      │
│                                              │
│  ─────────────────────────────────────────   │
│  Total                              ₹290      │
│                                              │
│            [ Continue Shopping ]             │
└──────────────────────────────────────────────┘
```

#### Key UI Elements

- Order Confirmed heading
- Order ID
- Ordered product names
- Purchase price and quantity
- Item subtotals
- Final order total
- Continue Shopping

### Orders

**User:** Retailer\
**Purpose:** Provide a central place to review retailer orders.

#### Mock Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ NinjaCart                                  [ Cart ] [Sign Out]│
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Your Orders                                                 │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Order: clxxxxxxxx       Date: 09 Sep 2026               │  │
│  │ Total: ₹290                                      [View] │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌────────────────────────────────────────────────────────┐  │
│  │ Order: clyyyyyyyy       Date: 05 Sep 2026               │  │
│  │ Total: ₹450                                      [View] │  │
│  └────────────────────────────────────────────────────────┘  │
│                                                              │
│                 [ Continue Shopping ]                        │
└──────────────────────────────────────────────────────────────┘
```

#### Key UI Elements

- Your Orders heading
- Order list / order cards
- Order ID
- Order date
- Order total
- Order details navigation
- Continue Shopping

---

## 5. Primary User Flows

### Visitor Flow

```text
Landing Page
     ↓
   Sign Up
     ↓
 Select Role
     ↓
 Dashboard
```

### Farmer Flow

```text
Farmer Dashboard
       ↓
  Add Product
       ↓
 Product Listing
       ↓
Product Details
```

### Retailer Purchase Flow

```text
Marketplace
     ↓
Product Details
     ↓
 Add to Cart
     ↓
    Cart
     ↓
 Place Order
     ↓
Order Confirmation
```

### Retailer Order Flow

```text
Orders
   ↓
Select Order
   ↓
Order Details
```

---

## 6. Navigation Map

User State Primary Navigation Destination

---

Logged out Login / Sign Up Authentication
Farmer Dashboard / Sign Out Farmer workspace
Retailer Cart / Sign Out Retailer marketplace
Retailer Product → Cart → Orders Purchase flow

---

## 7. UI Design Principles

- Simple marketplace-first layout with clear calls to action.
- Responsive card-based product browsing for retailers.
- Clear separation between Farmer and Retailer workflows.
- Inventory information is visible where it affects purchasing
  decisions.
- Consistent navigation and authentication controls.
- Clear success and error feedback for important actions.
- Keep the interface simple enough for users to complete the main task
  without unnecessary steps.

---

## 8. Screen Summary

Screen Role Main Goal

---

Landing Page Visitor Understand NinjaCart
Login Farmer / Retailer Authenticate
Sign Up New User Create account and choose role
Farmer Dashboard Farmer Manage products
Add Product Farmer List produce
Farmer Product Details Farmer View listing performance
Marketplace Retailer Browse available produce
Retailer Product Details Retailer Review and purchase produce
Shopping Cart Retailer Review purchase
Order Confirmation Retailer Confirm successful order
Orders Retailer Review previous orders
