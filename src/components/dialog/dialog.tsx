import { component$, useStyles$,
  type Signal,
  type QRL
} from '@builder.io/qwik';
import { dialogStyles } from './styles';
import styles from './styles.module.css';
export interface DialogProps {
  onKeyDown$?: QRL<(event: KeyboardEvent) => void>;
  dialogRef: Signal<HTMLDialogElement | undefined>;
  content: any; // Adjust this type based on your content structure
  close: QRL<() => void>;
}

export const Dialog = component$<DialogProps>(({ 
dialogRef,
content,
close
}) => {

  useStyles$(dialogStyles);

  return (
      <dialog 
      id="componentDialog"
        ref={dialogRef}
        class={styles.fullscreenOverlay}
        aria-modal="true"
        aria-labelledby={content.value ? "dialogTitle" : undefined}
        onKeyDown$={(event) => {
            if (event.key === 'Escape') {
                close();
            }
        }}
        onClick$={(event) => {
          // Close when clicking the backdrop (dialog element itself)
          if (event.target === event.currentTarget) {
              close();
          }
      }}
      >
        <div class={styles.dialogContent}>
          <button 
          class={`material-symbols-outlined ${styles.closeButton}`}
              type="button"
              aria-label="Close fullscreen view"
              onClick$={() => close()}>
              close
          </button>
        {content.value && (
            <content.value.Component
                alt={content.value.alt}
                style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    display: 'block'
                }}
            />
        )}
        </div>
      </dialog>
  );
});
