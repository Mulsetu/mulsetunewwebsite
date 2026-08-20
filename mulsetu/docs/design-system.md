# Design System

Visual source of truth: Figma [HOME_MASTER](https://www.figma.com/design/1kf8TDRqLeXRfBYyo1DCoQ/Mulsetu-Website?node-id=15-2895), [SERVICE_MASTER](https://www.figma.com/design/1kf8TDRqLeXRfBYyo1DCoQ/Mulsetu-Website?node-id=15-2698), [OTHER_PAGE_MASTER](https://www.figma.com/design/1kf8TDRqLeXRfBYyo1DCoQ/Mulsetu-Website?node-id=15-2442).

Tokens live in `styles/tokens.css`. Components consume those variables — do not hardcode hex, type sizes, or spacing on pages.

## Page categories

| Category | Master | Template | Routes |
| --- | --- | --- | --- |
| HOME | HOME_MASTER | `app/page.tsx` (not built yet) | `/` |
| SERVICE PAGES | SERVICE_MASTER | `components/services/ServicePage.tsx` | `/services/[slug]` |
| OTHER PAGES | OTHER_PAGE_MASTER | `components/pages/OtherPage.tsx` | Our Work, Products, About, Blog, Services index |

## Navbar (global)

Mulsetu · Services · Our Work · Products · About · Blog · Search · Book Free Call

Do not add IT Team, Process, Partners, or Contact to the navbar.

## Layout

| Token | Value |
| --- | --- |
| Page width | 1280 |
| Content width | 1152 (`--content-width`) |
| Gutters | 64 (`--gutter`), 32 tablet, 20 mobile |
| Section padding | 120 (`--space-section`) |
| Nav | sticky, 80px, 12px radius, charcoal |

## Color

Forest `#3E6700` · Teal `#19686C` · Lime `#BAF472` · Cyan `#A8EFF3` · Ink `#181B25` · Body `#434939` · Charcoal `#12141A` · Surface `#FAF8FF` · Surface alt `#F2F3FF`

## Type

Plus Jakarta Sans for display. Inter for UI and body.

## Radius

Buttons `2px`. Cards `8px`. Nav / large cards / CTA `12px`. Pills `9999`.

## Components

`Navbar` `Footer` `Button` `Badge` `Card` `SectionHeading` `CTA` `TechnologyStack` `ServiceCard` `ProjectCard` `ProductCard`
