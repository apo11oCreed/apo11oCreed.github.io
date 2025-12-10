import { 
  component$, 
  useStylesScoped$, 
  useSignal, 
  useOnDocument,
  useVisibleTask$,
  $,
  Slot,
  type Signal,
  type QRL
} from '@builder.io/qwik';
import styles from './styles.module.css?inline';

export interface DialogProps {
  isOpen: Signal<boolean>;
  size?: 'small' | 'medium' | 'large';
  title?: string;
  closeOnBackdrop?: boolean;
  closeOnEscape?: boolean;
  onClose$?: QRL<() => void>;
}

export const Dialog = component$<DialogProps>(({ 
  isOpen, 
  size = 'medium',
  title,
  closeOnBackdrop = true,
  closeOnEscape = true,
  onClose$
}) => {
  useStylesScoped$(styles);
  const dialogRef = useSignal<HTMLDivElement>();

  const handleClose = $(() => {
    isOpen.value = false;
    if (onClose$) {
      onClose$();
    }
  });

  const handleBackdropClick = $((event: MouseEvent) => {
    if (closeOnBackdrop && event.target === event.currentTarget) {
      handleClose();
    }
  });

  // Handle ESC key to close dialog
  useOnDocument('keydown', $((event: KeyboardEvent) => {
    if (closeOnEscape && isOpen.value && event.key === 'Escape') {
      handleClose();
    }
  }));

  // Focus management - focus first focusable element when dialog opens
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ track }) => {
    track(() => isOpen.value);
    
    if (isOpen.value && dialogRef.value) {
      const firstFocusable = dialogRef.value.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      ) as HTMLElement;
      
      if (firstFocusable) {
        requestAnimationFrame(() => firstFocusable.focus());
      }

      // Prevent body scroll when dialog is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when dialog closes
      document.body.style.overflow = '';
    }
  });

  if (!isOpen.value) {
    return null;
  }

  return (
    <div 
      class="dialog-backdrop" 
      onClick$={handleBackdropClick}
    >
      <div 
        ref={dialogRef}
        class={`dialog-content dialog-${size}`}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? "dialog-title" : undefined}
      >
        <div class="dialog-header">
          {title && <h2 id="dialog-title">{title}</h2>}
          <button 
            class="dialog-close" 
            onClick$={handleClose}
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>
        <div class="dialog-body">
          <Slot />
        </div>
      </div>
    </div>
  );
});
