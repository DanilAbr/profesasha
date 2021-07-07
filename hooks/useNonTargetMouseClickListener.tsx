import { useEffect } from 'react';

type Cb = () => void;

export default function useNonTargetMouseClickListener (cb: Cb, targetClassName: string ) {
  function onClick(evt: MouseEvent) {
    if ( evt.target &&
      evt.target instanceof HTMLElement &&
      !evt.target.closest(`.${targetClassName}`)
    ) {
      cb();
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)

    return () => { document.removeEventListener('click', onClick) }
  },[]);
}
