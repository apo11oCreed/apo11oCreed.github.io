import { useSignal, $, type Signal, type QRL } from '@builder.io/qwik';

export interface FullscreenImageHook {
  fullscreenImage: Signal<string | null>;
  openFullscreen: QRL<(imageName: string) => void>;
  closeFullscreen: QRL<() => void>;
  dialogRef: Signal<HTMLDialogElement | undefined>;
}

export const useFullscreenImage = (): FullscreenImageHook => {
  const fullscreenImage = useSignal<string | null>(null);
  const dialogRef = useSignal<HTMLDialogElement>();
  
  const openFullscreen = $((imageName: string) => {
    fullscreenImage.value = imageName;
    
    requestAnimationFrame(() => {
      if (dialogRef.value) {
        dialogRef.value.showModal();
      }
    });
  });
  
  const closeFullscreen = $(() => {
    
    if (dialogRef.value) {
      dialogRef.value.close();
    }
    fullscreenImage.value = null;
  });
  
  return {
    fullscreenImage,
    openFullscreen,
    closeFullscreen,
    dialogRef
  };
};