# NexCognit Documentation Context

> This document contains the complete project context for the NexCognit Documentation website. It should be reviewed before making any future changes to ensure consistency across the project.

---

# 1. Project Overview

## Project Name

NexCognit Documentation

## Product

NexCognit is an AI Sales and Lead Management platform powered by an AI assistant called Iris.

The platform enables businesses to:

- Capture leads from multiple communication channels
- Answer customer questions automatically
- Qualify leads using AI
- Manage customer conversations
- Sync leads with Zoho CRM
- Schedule meetings using Google Calendar
- Automate follow-up communication

## Documentation Purpose

The documentation provides screenshot-based guides for every major feature inside the NexCognit platform.

The goal is to create professional, beginner-friendly documentation that helps users configure and understand the platform without technical knowledge.

---

# 2. Documentation Structure

## Core Pages

- Overview
- Dashboard
- Leads
- Pipeline
- Conversations
- Agent Config
- Product Catalog
- Knowledge Base
- Media Library
- Integrations

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
│   └── script.js
│
├── screenshots/
│   ├── dashboard/
│   ├── integrations/
│   │   ├── zoho-crm/
│   │   └── google-calendar/
│   └── channels/
│
└── pages/
    ├── integrations.html
    ├── integrations/
    │   ├── zoho-crm.html
    │   └── google-calendar.html
    └── channels/
```

---

# 4. Documentation Style

The documentation follows these principles:

- Customer-facing documentation
- Beginner-friendly language
- Screenshot-driven guides
- Professional writing style
- One action per step
- Short and clear explanations
- Consistent formatting
- Responsive layout
- Consistent page structure

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

Current sidebar structure:

Overview

Dashboard

Leads

Pipeline

Conversations

Agent Config

Product Catalog

Knowledge Base

Media Library

▶ Integrations
- Integration Overview
- Zoho CRM
- Google Calendar

▶ Channels
- Channel Overview

▶ Website
- Introduction
- Configure Widget
- Widget Appearance
- Copy Embed Code
- Test Widget

- WhatsApp
- Telegram
- Facebook Messenger
- Instagram

Navigation automatically expands the active section.

---

# 7. Integrations Documentation

Completed:

✓ Integration Overview

✓ Zoho CRM Setup Guide

✓ Google Calendar Setup Guide

Each integration includes:

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

✓ Facebook Messenger

✓ Instagram

Website documentation contains nested navigation for individual setup sections.

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

GitHub

Hosting:

Vercel

Deployment Flow:

GitHub → Automatic Vercel Deployment

Every push automatically redeploys the documentation website.

---

# 11. Current Progress

Completed

✓ Overview

✓ Dashboard

✓ Leads

✓ Pipeline

✓ Conversations

✓ Agent Config

✓ Product Catalog

✓ Knowledge Base

✓ Media Library

✓ Integration Overview

✓ Zoho CRM

✓ Google Calendar

✓ Channel Overview

✓ Website Chat

✓ WhatsApp

✓ Telegram

✓ Facebook Messenger

✓ Instagram

✓ Responsive sidebar

✓ Expandable navigation

✓ Active page highlighting

✓ Theme Toggle

✓ Screenshot styling

✓ Typography improvements

✓ GitHub deployment

✓ Vercel deployment

---

# 12. Project Decisions

Important decisions:

- Billing documentation is excluded.
- Documentation is screenshot-driven.
- Folder structure should remain unchanged.
- Every page should use the same layout.
- Navigation must remain consistent.
- Screenshot naming should remain consistent.
- UI improvements should be incremental.
- Avoid unnecessary redesigns.
- Keep documentation beginner-friendly.

---

# 13. Pending Improvements

Future enhancements:

- Previous / Next page navigation
- Breadcrumb navigation
- Search functionality
- Callout / Tip boxes
- Tables for feature comparison
- Better Overview page design
- Mobile optimization
- Final UI polish

---

# 14. Instructions for Future Work

Before continuing development:

- Read this file first.
- Preserve the folder structure.
- Preserve the writing style.
- Preserve screenshot order.
- Keep navigation consistent.
- Use the existing CSS classes.
- Do not redesign pages unnecessarily.
- Follow the same documentation pattern for all future pages.
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