import { useSignal, $, type Signal, type QRL } from '@builder.io/qwik';

export interface FullscreenImageHook {
  fullscreenImage: Signal<string | null>;
  openFullscreen: QRL<(imageName: string) => void>;
  closeFullscreen: QRL<() => void>;
  dialogRef: Signal<HTMLDialogElement | undefined>;
}

export const useFullscreenImage = (): FullscreenImageHook => {
  console.log('useFullscreenImage hook initialized');
  const fullscreenImage = useSignal<string | null>(null);
  const dialogRef = useSignal<HTMLDialogElement>();
  
  const openFullscreen = $((imageName: string) => {
    fullscreenImage.value = imageName;
    
    requestAnimationFrame(() => {
      console.log('test',dialogRef);
      if (dialogRef.value) {
        console.log('Opening dialog for image:', imageName);
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