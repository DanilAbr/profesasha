import { useEffect } from 'react';

type Cb = () => void;

export default function useEscKeyListener (cb: Cb ) {
  useEffect(() => {
    function onEscapePress(evt: KeyboardEvent): void {
      if (evt.key === 'Escape') { cb(); }
    }

    document.addEventListener('keydown', onEscapePress);

    return () => { document.removeEventListener('keydown', onEscapePress); }
  },[]);
}
