# Dialog Component Feature

## Overview

A reusable, accessible dialog/modal component for the portfolio website built with Qwik. The Dialog component enhances user interactions by providing an overlay interface for displaying additional content, forms, or confirmations. It features smooth animations, keyboard navigation, focus management, and responsive design following WCAG accessibility guidelines.

## Requirements

### Component Structure
- **Location**: `src/components/dialog/`
- **Files**:
  - `dialog.tsx` - Main component implementation
  - `styles.module.css` - Scoped CSS module styles
- **TypeScript Interface**: Fully typed props with support for:
  - `isOpen` (Signal<boolean>): Controls dialog visibility
  - `size` ('small' | 'medium' | 'large'): Dialog width preset
  - `title` (string, optional): Dialog header title
  - `closeOnBackdrop` (boolean, default: true): Allow backdrop click to close
  - `closeOnEscape` (boolean, default: true): Allow ESC key to close
  - `onClose$` (QRL callback, optional): Custom close handler

### Loaders/Actions
- No server-side loaders or actions required
- Pure client-side component using Qwik signals for state management
- State managed via `Signal<boolean>` for `isOpen` prop

### Route or Layout Behavior
- Component can be used in any route or layout
- Does not depend on specific routing context
- Example usage added to `src/routes/index.tsx` for demonstration

### Resumability and Serialization Constraints
- All event handlers properly wrapped with `$()` for Qwik optimization
- `onClose$` callback uses `QRL<() => void>` type for serializability
- Component state managed via Qwik signals (inherently serializable)
- Leverages Qwik's lazy loading capabilities

### Vite Build Considerations
- Uses CSS modules (`.module.css?inline`) for scoped styling
- Imports properly configured for Qwik's optimizer
- TypeScript strict mode compliant
- ESLint rules followed (including `qwik/valid-lexical-scope`)

### Accessibility Features
- **ARIA Attributes**:
  - `role="dialog"`
  - `aria-modal="true"`
  - `aria-labelledby` (references dialog title)
  - `aria-label` on close button
- **Keyboard Navigation**:
  - ESC key closes the dialog (configurable)
  - Focus automatically moves to first focusable element when opened
  - Tab navigation constrained within dialog
- **Focus Management**:
  - Uses `useVisibleTask$` to set initial focus
  - Prevents body scroll when dialog is open
  - Focus restoration when dialog closes (via body scroll restoration)
- **Screen Reader Support**:
  - Semantic HTML structure
  - Proper heading hierarchy
  - Descriptive button labels

### Styling and Design
- **Size Variants**:
  - Small: max-width 400px
  - Medium: max-width 600px
  - Large: max-width 900px
- **Animations**:
  - Backdrop fade-in (0.3s)
  - Content slide-in from top with opacity (0.3s)
- **Responsive Design**:
  - Mobile-optimized padding and sizing
  - Adjusts to viewport constraints
  - Maximum 90vh height with scrollable content
- **Design System Compliance**:
  - Uses CSS custom properties from `global.css`
  - `var(--primary-color)` for headers and accents
  - `var(--background-color)` for dialog background
  - `var(--text-color)` for content
  - Dark mode support via `prefers-color-scheme`

### Use Cases Supported
1. **Project Detail Views**: Display expanded project information
2. **Contact Forms**: Overlay contact form without page navigation
3. **Image Gallery Lightbox**: Full-screen image viewing
4. **Confirmation Dialogs**: User action confirmations
5. **Settings Panel**: Configuration options overlay

## Testing

### Component-Level Tests
While no automated test framework is currently set up in the repository, the following component-level scenarios should be verified:

1. **Rendering**:
   - Dialog renders when `isOpen.value = true`
   - Dialog does not render when `isOpen.value = false`
   - Slot content is properly displayed in dialog body

2. **Props**:
   - Size prop correctly applies CSS classes (`dialog-small`, `dialog-medium`, `dialog-large`)
   - Title is displayed in header when provided
   - Title is omitted when not provided

3. **State Management**:
   - Updating `isOpen` signal opens/closes dialog
   - Signal-based state works across component boundaries

### Loader/Action Contract Tests
Not applicable - component is purely client-side.

### Route-Level Behavior Tests
1. **Integration with Routes**:
   - Dialog can be imported and used in any route
   - Multiple dialogs can exist on same page with different signals
   - Dialog state persists/resets appropriately on route navigation

2. **Example Implementation**:
   - Verify demo button on index page opens dialog
   - Dialog displays demonstration content
   - Close functionality works as expected

### Accessibility Tests
1. **Keyboard Navigation**:
   - Press ESC to close dialog (when `closeOnEscape=true`)
   - Tab navigation stays within dialog
   - Focus moves to first focusable element on open
   - Body scroll is prevented when dialog is open

2. **Screen Reader**:
   - Dialog announces as "dialog" role
   - Title is properly associated via `aria-labelledby`
   - Close button has descriptive `aria-label`

3. **ARIA Compliance**:
   - Verify `aria-modal="true"` is present
   - Verify proper ARIA attributes in DOM

### Cross-Browser and Performance Checks

#### Cross-Browser Testing
Test in the following browsers:
- Chrome/Edge (Chromium)
- Firefox
- Safari
- Mobile Safari (iOS)
- Chrome Mobile (Android)

Verify:
1. Animations perform smoothly
2. Focus management works correctly
3. Backdrop overlay displays properly
4. CSS custom properties render correctly
5. Dark mode support functions

#### Performance Checks
1. **Bundle Size**:
   - Component code is lazy-loaded via Qwik's optimizer
   - CSS is scoped and minimal
   - No external dependencies added

2. **Runtime Performance**:
   - Opening/closing dialog is immediate (< 16ms)
   - Animations run at 60fps
   - No layout thrashing when dialog opens

3. **Build Verification**:
   - Run `npm run build` successfully
   - Verify no build warnings related to Dialog component
   - Check that Dialog chunks are appropriately sized

### Manual Testing Checklist
- [ ] Open dialog via button click
- [ ] Close dialog via backdrop click
- [ ] Close dialog via ESC key
- [ ] Close dialog via close button (×)
- [ ] Test all three size variants (small, medium, large)
- [ ] Verify smooth open/close animations
- [ ] Test on mobile viewport (< 768px)
- [ ] Test in dark mode
- [ ] Verify focus moves to first focusable element
- [ ] Verify body scroll is prevented when open
- [ ] Test with custom `onClose$` callback
- [ ] Test with `closeOnBackdrop={false}`
- [ ] Test with `closeOnEscape={false}`

### Lint and Build Verification
```bash
# Verify linting passes
npm run lint

# Verify build succeeds
npm run build

# Verify TypeScript types
npm run build.types
```

All commands should complete without errors.
