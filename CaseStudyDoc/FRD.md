**FUNCTIONAL REQUIREMENTS DOCUMENT (FRD v1.0)**

**Document Control**

|  |  |
| --- | --- |
| **Field** | **Details** |
| Project Name | iPhone 17 Pro Interactive Experience |
| Document Type | Functional Requirements Document |
| Version | 1.0 |
| Prepared By | Shagun Saxena |
| Date | 28 February 2026 |

**Functional Overview**

The system shall:

* Deliver immersive scroll-based storytelling
* Provide interactive 3D product visualization
* Allow users to configure product variants
* Dynamically calculate pricing
* Support cart and checkout flow
* Provide order confirmation
* Maintain high performance and responsiveness

**Functional Modules**

1. Landing & Hero Module
2. Scroll Storytelling Module
3. 3D Interaction Module
4. Configuration Module
5. Pricing Engine
6. Cart Module
7. Checkout Module
8. Comparison Module
9. Performance & Optimization Controls

**Detailed Function Requirements**

* **Module 1 – Hero Section**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-01 | Display cinematic hero section with large typography | High |
| FR-02 | Implement scroll-triggered animation on headline | High |
| FR-03 | Hero image/video shall fade/scale based on scroll | High |

**Acceptance Criteria:**

* Animation triggers on scroll
* Smooth 60fps transition
* No layout shift
* **Module 2 – Scroll Storytelling**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-04 | Feature sections reveal on scroll | High |
| FR-05 | Each feature section animates independently | High |
| FR-06 | Sticky section transitions supported | Medium |

**Acceptance Criteria:**

* Section animation begins at 30% viewport entry
* Smooth fade + translate effect
* Responsive behavior maintained
* **MODULE 3 – 3D Product Interaction**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-07 | Display 3D iPhone model | High |
| FR-08 | Rotate model on scroll | High |
| FR-09 | Change model color dynamically | High |
| FR-10 | Optimize 3D rendering performance | High |

**Acceptance Criteria:**

* Scroll maps to rotation angle
* Color switch updates material instantly
* No FPS drop below 45
* **MODULE 4 – Configuration**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-11 | User selects color variant | High |
| FR-12 | User selects storage option | High |
| FR-13 | Selected configuration persists | High |

**Configuration Logic**

Base Price = ₹1,29,900

Storage Pricing:

* 128GB = Base
* 256GB = +₹10,000
* 512GB = +₹20,000
* 1TB = +₹35,000

**Acceptance Criteria:**

* Price updates instantly
* Only one storage option selectable
* UI reflects active selection
* **MODULE 5 – Pricing Engine**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-14 | Calculate total price dynamically | High |
| FR-15 | Display selected configuration summary | High |

Formula:
Total Price = Base Price + Storage Adjustment

* **MODULE 6 – Cart**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-16 | Add configured product to cart | High |
| FR-17 | Display cart summary | High |
| FR-18 | Allow quantity modification | Medium |

Acceptance Criteria:

* Cart updates immediately
* Cart state persists in local storage
* Price recalculates on quantity change

**MODULE 7 – Checkout**

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-19 | Capture user shipping details | High |
| FR-20 | Validate form inputs | High |
| FR-21 | Display order summary | High |
| FR-22 | Show confirmation page on submission | High |

Validation Rules:

* Name required
* Valid email format
* 10-digit phone number
* Address required
* Module8 – Comparison Section

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-23 | Display comparison between models | Medium |
| FR-24 | Highlight selected model differences | Medium |

Acceptance Criteria:

* Comparison should be visible with Model name
* Module9 – Performance

|  |  |  |
| --- | --- | --- |
| **FR ID** | **Requirement** | **Priority** |
| FR-25 | Lazy load images/videos | High |
| FR-26 | Code split heavy modules | High |
| FR-27 | Maintain Lighthouse score > 90 | High |

**Requirement Traceability Section**

|  |  |  |
| --- | --- | --- |
| **BR ID** | **Business Requirement** | **FR IDs Covering It** |
| BR-01 | Immersive storytelling | FR-01–FR-06 |
| BR-02 | 3D interaction | FR-07–FR-10 |
| BR-03 | Variant configuration | FR-11–FR-15 |
| BR-04 | Purchase flow | FR-16–FR-22 |
| BR-05 | Model comparison | FR-23–FR-24 |
| BR-06 | Performance standards | FR-25–FR-27 |

**Error Handling & Exception Management**

|  |  |
| --- | --- |
| **Scenario** | **Expected System Behavior** |
| 3D model fails to load | Display high-resolution static fallback image |
| User attempts checkout with empty cart | Redirect to product page with message |
| Invalid form input | Show inline validation error message |
| Network interruption during checkout | Display retry option |
| Local storage disabled | Cart state maintained in session memory |
| No storage selected | Disable Add to Cart button |

**Edge Case Scenarios**

* If user changes configuration after adding to cart → Cart should update selected configuration.
* If quantity becomes 0 → Remove product automatically.
* If user refreshes checkout page → Cart persists using local storage.
* If scroll speed exceeds animation threshold → Animation should remain stable.
* If device GPU performance is low → Reduce 3D rendering quality automatically.
* If user navigates back after confirmation → Prevent duplicate order submission.

**Accessibility Requirements**

* All interactive elements must support keyboard navigation.
* Buttons must have ARIA labels.
* Focus states must be visually visible.
* Color contrast must meet WCAG AA standards.
* Form errors must be screen-reader compatible.
* All images must include descriptive alt text.

**Flow Diagrams : System Flow**

![](data:image/png;base64...)

**Cart Flow**

(Start)

↓

Add to Cart

↓

Create/Update Cart

↓

Cart Page

↓

[Modify Quantity?]

├── No → Proceed to Checkout → End

└── Yes

↓

Update Quantity

↓

Recalculate Price

↓

[Quantity = 0?]

|── Yes → Remove Item → Update Cart → Back

└── No → Update Cart → Back

**Checkout Flow**

**(Start)**

**↓**

**Checkout Page**

**↓**

**Enter Details**

**↓**

**[All Fields Completed?]**

**├── No → Show Errors → Back**

**└── Yes**

**↓**

**[Email Valid?]**

**├── No → Show Error → Back**

**└── Yes**

**↓**

**Generate Summary**

**↓**

**Confirmation Page**

**↓**

**(End)**