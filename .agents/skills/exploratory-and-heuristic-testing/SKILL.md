---
name: exploratory-and-heuristic-testing
description: 20+ Year expert exploratory testing, James Bach SFDIPOT heuristic taxonomy, Michael Bolton FEW HICCUPS consistency oracles, Session-Based Test Management (SBTM), chaos attack vectors, and high-impact defect advocacy.
---

# Exploratory and Heuristic Testing

## Overview

As a 20+ year veteran SQA Engineer & Test Architect, you recognize that **automated tests only verify what you already know to ask; exploratory testing discovers the unknown unknowns that break systems in production**.

Exploratory testing is not random "ad-hoc clicking." It is a disciplined, rigorous, simultaneous process of **learning, system modeling, test design, and empirical execution**, guided by proven cognitive heuristics.

---

## 1. James Bach's SFDIPOT Product Elements Heuristic

When exploring any new feature, service, or application, decompose the system across the 7 SFDIPOT dimensions:

```text
┌─────────────────────────────────────────────────────────────┐
│                      S F D I P O T                          │
└──────┬──────┬──────┬──────┬──────┬──────┬───────────────────┘
       │      │      │      │      │      │
       ▼      ▼      ▼      ▼      ▼      ▼
    Structure │     Data  Platform │     Time
          Function      Interfaces Operations
```

| Dimension | Exploration Questions & Attack Vectors |
|-----------|---------------------------------------|
| **S - Structure** | What is the system made of? Inspect bundle composition, client vs server components, CSS modules, dynamic imports, and external CDN scripts. |
| **F - Function** | What does the system do? Test calculations, state transitions, filtering algorithms, sorting rules, and validation logic. |
| **D - Data** | What inputs, outputs, and internal states exist? Fuzz with boundary values, empty sets, special characters, multi-byte emojis, and extreme numbers. |
| **I - Interfaces** | How do users and systems communicate? Probe the UI (touch, keyboard, mouse), REST/GraphQL APIs, browser URL query params, clipboard, and browser storage. |
| **P - Platform** | Where does it execute? Test across Chromium, WebKit (Safari), Gecko (Firefox), mobile iOS/Android, high-DPI displays, and restricted corporate firewalls. |
| **O - Operations** | How will humans actually use it? Test novel user journeys, impatient user behaviors, accessibility tools, and non-linear navigation patterns. |
| **T - Time** | How does time affect the system? Test race conditions, async network latency, timezone boundaries (UTC vs local), session timeouts, and rapid repetitive actions. |

---

## 2. Michael Bolton's FEW HICCUPS Consistency Oracles

An **oracle** is how you recognize a problem. Use the FEW HICCUPS heuristic to identify subtle inconsistencies:

- **F - Familiar**: Does the system behave similarly to other software users know well? (e.g. `Ctrl+Z` undoes text).
- **E - Explainable**: Can system behavior be explained clearly, or does it feel arbitrary and baffling?
- **W - World**: Does the software contradict real-world facts or business realities?
- **H - History**: Does the new version behave worse than a previous release? (Regression check).
- **I - Image**: Does the appearance, typography, or messaging damage the organization's professional brand?
- **C - Comparable**: How do market-leading competitors solve this exact problem?
- **C - Claims**: Does the application contradict its own documentation, marketing copy, or tooltips?
- **U - User Expectations**: Does it violate what a reasonable human would expect to happen?
- **P - Product**: Is this feature consistent with other parts of the same application?
- **P - Purpose**: Does the feature actually achieve its core business objective?
- **S - Standards**: Does it violate industry standards (WCAG 2.1, HTML5 specifications, HTTP status codes)?

---

## 3. Session-Based Test Management (SBTM)

Structure exploratory testing into measurable, time-boxed charters:

### Session Charter Structure:
```markdown
# Session Charter: [Feature / Area Name]
- **Charter**: Explore [target feature/flow] with [heuristics/tools] to discover [risks/information].
- **Timebox**: 60 minutes (uninterrupted focus).
- **Tester**: Senior SQA Architect
- **Environment**: Staging / Production Preview (Chrome + WebKit)

### TBS Breakdown (Time Allocation):
- **Test Design & Execution (T)**: 70%
- **Bug Investigation & Reporting (B)**: 20%
- **Session Setup & Data Prep (S)**: 10%

### Discoveries & Observations:
1. ...
2. ...

### Defects Discovered:
- [DEFECT-01] Summary...
```

---

## 4. High-Value Chaos & Stress Attack Vectors

When conducting exploratory testing on web applications, systematically deploy these chaos scenarios:

1. **The Double-Click Blitz**:
   - Double-click or rapid-triple-click buttons that trigger mutations (e.g., `"Submit"`, `"Pay"`, `"Delete"`).
   - Expected: Disables button immediately on first click, debounces input, and enforces idempotency.
2. **The Mid-Flight Navigation Assault**:
   - Click a button that initiates an asynchronous network call, then immediately hit the browser's Back button or click a different route link.
   - Expected: Unmounted component cleanly cancels the request or ignores the response without throwing unhandled `setState` warnings or crashing.
3. **The Intermittent Network Disconnect**:
   - Start an upload or multi-step checkout flow, toggle network to Offline in DevTools for 5 seconds, then restore network.
   - Expected: Shows clear retry toast or banner; does not lose user-entered form data.
4. **The Storage Corruption Probe**:
   - Manually edit or corrupt `localStorage` / `sessionStorage` values (e.g. set `theme: { corrupted: true }` or malformed JSON).
   - Expected: Graceful fallback to default values without white-screening the app.
5. **The Clipboard Payload Bomb**:
   - Paste a 10,000-character string or text with embedded HTML/JavaScript into every input field.
   - Expected: Input cleanly respects `maxlength` or wraps text gracefully without breaking parent CSS containers.

---

## 5. Elite Defect Advocacy & Bug Reporting Standard

A defect report written by a 20+ year veteran is so clear, reproducible, and insightful that developers can fix it in minutes without asking for clarification:

### Standard Defect Schema:
```markdown
### [BUG-104] [P1/High] Rapid double-click on 'Filter by Cypress' triggers duplicate card rendering and layout collision

#### 1. Executive Summary
When rapidly clicking category filter tabs on the Featured Projects page, the Framer Motion AnimatePresence container fails to reconcile concurrent enter/exit animations, causing duplicate cards to render simultaneously and breaking the CSS grid layout.

#### 2. Environment & Telemetry
- **OS**: Windows 11 (23H2) & macOS Sonoma 14.5
- **Browsers**: Chrome 128.0, Safari 17.4
- **Viewport**: 1280x800 and 390x844 (Mobile)
- **Console Errors**: `Warning: Encountered two children with the same key`

#### 3. Preconditions
- User is on the homepage (`/#projects`)
- Projects section is loaded with "All" filter active

#### 4. Steps to Reproduce
1. Scroll down to the "Featured Projects" section.
2. Rapidly double-click the "Cypress" filter button within 150ms.
3. Observe the rendered grid container.

#### 5. Expected Result
The grid smoothly transitions and renders only the Cypress project cards with zero duplicate elements or layout collisions.

#### 6. Actual Result
Project cards render twice, stack vertically outside the parent grid boundaries, and trigger React duplicate key warnings in the console.

#### 7. Architectural Root Cause & Recommended Fix
The `<AnimatePresence>` wrapper lacks `mode="wait"`, allowing exit animations of previous items to run concurrently with entrance animations of the new selection. 
Fix: Wrap the grid container in `<AnimatePresence mode="wait">` and assign `key={activeFilter}` to the container motion element.
```
