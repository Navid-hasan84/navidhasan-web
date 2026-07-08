# Orbit Menu Failure Note

## Context

During Phase 1 of `navidhasan.com`, we tested a mobile bottom navigation idea called **Orbit**.

The idea was inspired by a gesture-style control: tapping or dragging from the Orbit button would open quick actions such as About, Journal, Portal, Email, and WhatsApp.

## Original goal

The Orbit button was meant to support:

- Tap to open a menu.
- Tap outside to close.
- Tap an option to navigate.
- Press and drag toward an option, then release to select.
- Keep the mobile bottom navigation clean and futuristic.

## What went wrong

The implementation became more complex than the current phase needed.

Problems encountered:

- Orbit did not reliably open.
- Pointer/touch behavior became fragile.
- Backdrop, z-index, click, pointerdown, pointerup, and route navigation logic conflicted.
- The feature consumed too much time compared to its value in Phase 1.
- It distracted from the main goal: creating a stable static public website.

## Decision

We removed Orbit from Phase 1.

The fifth mobile bottom navigation item is now **About**.

Current mobile nav:

```txt
Home | Work | Services | Chat | About