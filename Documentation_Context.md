# NexCognit Documentation Context

> This document contains the complete project context for the NexCognit Documentation website. It should be reviewed before making any future changes to ensure consistency across the project.

---

# 1. Project Overview

## Project Name

NexCognit Documentation

## Product

NexCognit is an AI Sales and Lead Management platform ("Lead-Cash Engine"). Each customer sets up their own AI sales agent and chooses its name (the default name is "Assistant").

The platform enables businesses to:

- Capture leads from multiple communication channels
- Answer customer questions automatically
- Qualify leads using AI (Hot, Warm, Cold, New)
- Read and reply to all conversations in one Inbox
- Sync leads with Zoho CRM
- Schedule meetings using Google Calendar
- Send follow-up emails through Gmail
- Automate follow-up communication

## Documentation Purpose

The documentation provides screenshot-based guides for every major feature inside the NexCognit platform.

The goal is to create professional, beginner-friendly documentation that helps users configure and understand the platform without technical knowledge.

---

# 2. Documentation Structure

The documentation follows the sidebar of the NexCognit app (new UI, November 2026).

## Core Pages

- Overview (documentation home page)
- Dashboard (called "Overview" inside the app)
- Inbox
- Leads
- Pipeline
- AI agent (file: agent-config.html)
- Knowledge base (includes Products & prices)
- Plan & credits

## Integration Pages

- Integration Overview
- Zoho CRM
- Google Calendar

## Channel Pages

- Channel Overview
- Website Chat
- WhatsApp
- Telegram
- Facebook Messenger
- Instagram

## Removed Pages

These features were removed from the app, so their pages were deleted:

- Product Catalog (products are now part of the Knowledge base)
- Media Library
- Conversations (replaced by Inbox)
- pages/overview.html (unused duplicate of the home page)

---

# 3. Folder Structure

```
nexcognit-docs/
│
├── Documentation_Context.md
├── index.html
│
├── assets/
│   ├── style.css
│   ├── script.js
│   └── logo.webp
│
├── screenshots/
│   ├── dashboard/
│   ├── inbox/
│   ├── leads/
│   ├── pipeline/
│   ├── agent-config/
│   ├── knowledge-base/
│   ├── plan-credits/
│   ├── integrations/
│   │   ├── zoho-crm/
│   │   └── google-calendar/
│   └── channels/
│       ├── website-chat/
│       ├── whatsapp/
│       ├── telegram/
│       ├── facebook-messenger/
│       └── instagram/
│
└── pages/
    ├── dashboard.html
    ├── inbox.html
    ├── leads.html
    ├── pipeline.html
    ├── agent-config.html
    ├── knowledge-base.html
    ├── plan-credits.html
    ├── integrations.html
    ├── integrations/
    │   ├── zoho-crm.html
    │   └── google-calendar.html
    └── channels/
        ├── index.html
        ├── website-chat.html
        ├── whatsapp.html
        ├── telegram.html
        ├── facebook-messenger.html
        └── instagram.html
```

Relative paths depend on folder depth:

- index.html uses `assets/...`, `screenshots/...` and `pages/...`
- pages/*.html uses `../assets/...` and `../screenshots/...`
- pages/channels/*.html and pages/integrations/*.html use `../../assets/...` and `../../screenshots/...`

---

# 4. Documentation Style

The documentation follows these principles:

- Customer-facing documentation (not for developers)
- No technical terms and no code blocks
- Beginner-friendly language
- Screenshot-driven guides
- Professional writing style
- One action per step
- Short and clear explanations
- Consistent formatting
- Responsive layout
- Consistent page structure
- Say "your agent", not "Iris", because each customer names their own agent

---

# 5. Screenshot Standards

Each guide should follow this format:

- Screenshot
- Short explanation below
- One action per step
- Screenshots displayed in chronological order

Screenshot styling:

- Rounded corners
- Soft border
- Consistent spacing
- Responsive width

Before saving a screenshot:

- Crop out the browser bar and the Windows taskbar
- Hide private details: real phone numbers, email addresses, tokens, keys
- Blur most of any full token (bot tokens, Page access tokens), keeping only the first and last few characters. Tokens cut off by a small box in Meta screens are fine to leave
- Partly blur pairing codes. WhatsApp QR codes expire within seconds, so covering them is optional
- Hide the agent's real instructions text on the AI agent page

Screenshot naming:

- Core pages: `01_<page>_overview.PNG`
- Guides: numbered in step order, for example `01_...`, `02_...`
- New WhatsApp screens use the `new_` prefix so they do not overwrite the older Official API screenshots

---

# 6. UI Design Decisions

Current UI includes:

✓ Sticky sidebar

✓ Independent sidebar scrolling

✓ Responsive layout

✓ Improved typography

✓ Improved spacing

✓ Better screenshot presentation

✓ Dark Mode

✓ Expandable navigation

✓ NexCognit logo in the sidebar and browser tab (assets/logo.webp, added through style.css and script.js, so no page needs editing)

Current sidebar structure (the same on every page):

Overview

Dashboard

Inbox

Leads

Pipeline

AI agent

Knowledge base

▶ Channels
- Channel Overview
- Website
- WhatsApp
- Telegram
- Facebook
- Instagram

▶ Integrations
- Integration Overview
- Zoho CRM
- Google Calendar

Plan & credits

The active page is highlighted automatically by script.js, so the `active` class does not need to be added by hand. Navigation automatically expands the active section.

The old nested "Website" sub-menu was removed so the sidebar is identical on every page.

---

# 7. Integrations Documentation

Completed:

✓ Integration Overview (covers Zoho CRM, Google Calendar, Gmail, Instagram, Facebook Page and Your API keys)

✓ Zoho CRM Setup Guide

✓ Google Calendar Setup Guide

Gmail and Facebook Page are described on the Integration Overview page only. They do not have their own setup guides yet.

Each integration guide includes:

- Prerequisites
- Step-by-step setup
- Screenshot for every step
- Verification step
- How it works
- Things to know

---

# 8. Channel Documentation

Completed:

✓ Channel Overview

✓ Website Chat

✓ WhatsApp

✓ Telegram

✓ Instagram

✓ Facebook Messenger (Meta setup steps, then Channels → Set up on the Messenger card; tokens are updated with Update token → Update and reconnect)

WhatsApp guide covers three ways to connect:

- Option A: Scan QR code (trial)
- Option B: Pairing code (trial)
- Option C: Official WhatsApp API (Meta's Business API through Gupshup; uses the older step-by-step screenshots)

With Scan QR code and Pairing code, the agent replies to incoming messages only. Automated follow-ups are off for these options.

---

# 9. JavaScript Features

Current script.js functionality includes:

- Active sidebar highlighting
- Nested navigation
- Expandable sidebar groups
- LocalStorage remembers expanded sections
- Scroll Spy
- Global Dark / Light Theme
- Theme persistence
- Responsive navigation

---

# 10. Deployment

Repository:

GitHub (mudassar010101/Documentation)

Hosting:

Vercel

Deployment Flow:

GitHub → Automatic Vercel Deployment

Every push automatically redeploys the documentation website.

Push routine:

1. git add .
2. git commit -m "message"
3. git push
4. Wait about 30 seconds, then hard refresh the live site with Ctrl+Shift+R

---

# 11. Current Progress

Completed

✓ Overview (home page)

✓ Dashboard

✓ Inbox

✓ Leads

✓ Pipeline

✓ AI agent

✓ Knowledge base

✓ Plan & credits

✓ Integration Overview

✓ Zoho CRM

✓ Google Calendar

✓ Channel Overview

✓ Website Chat

✓ WhatsApp

✓ Telegram

✓ Instagram

✓ Facebook Messenger

✓ New sidebar on every page

✓ Responsive sidebar

✓ Expandable navigation

✓ Active page highlighting

✓ Theme Toggle

✓ Screenshot styling

✓ Typography improvements

✓ GitHub deployment

✓ Vercel deployment

✓ NexCognit logo

Remaining

- None. All pages and guides match the new UI.

---

# 12. Project Decisions

Important decisions:

- Plan & credits is documented. Plan prices and credit numbers are left out because they change with the plan.
- Documentation is screenshot-driven.
- Folder structure should remain unchanged.
- Every page should use the same layout.
- Navigation must remain consistent.
- Screenshot naming should remain consistent.
- UI improvements should be incremental.
- Avoid unnecessary redesigns.
- Keep documentation beginner-friendly.
- Do not guess about features. Only describe what is visible in the app.
- Keep the file name agent-config.html for the AI agent page so existing links keep working.

---

# 13. Pending Improvements

Future enhancements:

- Setup guides for Gmail and Facebook Page
- Previous / Next page navigation
- Breadcrumb navigation
- Search functionality
- Callout / Tip boxes
- Tables for feature comparison
- Mobile optimization
- Final UI polish

---

# 14. Instructions for Future Work

Before continuing development:

- Read this file first.
- Preserve the folder structure.
- Preserve the writing style.
- Preserve screenshot order.
- Keep navigation consistent. If the sidebar changes, update it on every page.
- Use the existing CSS classes.
- Do not redesign pages unnecessarily.
- Follow the same documentation pattern for all future pages.
- Hide private details in every screenshot before publishing.
- Test all links before deployment.

---

# 15. Changelog

## Version 1

- Initial documentation completed
- GitHub deployment
- Vercel deployment
- Sidebar improvements
- Typography improvements
- Screenshot styling improvements

## Version 2

- Added expandable Integrations section
- Added Google Calendar documentation
- Added Zoho CRM documentation
- Improved sidebar consistency
- Added Dark Mode
- Added active navigation highlighting
- Added Scroll Spy
- Improved nested sidebar navigation
- Fixed relative path issues across integration pages

## Version 3 (November 2026, new NexCognit UI)

- New sidebar on every page to match the new app: Overview, Dashboard, Inbox, Leads, Pipeline, AI agent, Knowledge base, Channels, Integrations, Plan & credits
- Added Inbox page
- Added Plan & credits page
- Renamed Agent Config to AI agent and rewrote it (Persona, Voice, Instructions, Lead scoring rules, Version history)
- Rewrote Dashboard, Leads, Pipeline, Knowledge base, Channel Overview and Integration Overview for the new UI
- Knowledge base now includes Products & prices
- Removed Product Catalog, Media Library, Conversations and pages/overview.html
- Removed the old duplicate pages/channels/integrations/zoho-crm.html
- Redesigned the home page cards into Sales, Train your agent, Connect and Account groups
- New WhatsApp guide with three options: Scan QR code, Pairing code and Official WhatsApp API
- Updated Telegram, Website Chat, Instagram, Zoho CRM and Google Calendar guides
- Replaced "Iris" with "your agent" in guides
- Replaced all screenshots with the new UI and hid private details
- Updated the Facebook Messenger guide to the new UI
- Added the open conversation view and Lead details to the Inbox page
- Added the NexCognit logo to the sidebar and browser tab (assets/logo.webp, set in style.css and script.js)
- Blurred bot tokens and Page access tokens in screenshots