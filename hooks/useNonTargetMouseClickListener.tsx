import { useEffect } from 'react';

type Cb = () => void;

export default function useNonTargetMouseClickListener (cb: Cb, innerElementClassName: string ) {
  function onClick(evt: MouseEvent) {
    if ( evt.target &&
      evt.target instanceof HTMLElement &&
      !evt.target.closest(`.${innerElementClassName}`)
    ) {
      cb();
    }
  }

  useEffect(() => {
    document.addEventListener('click', onClick)

    return () => { document.removeEventListener('click', onClick)}
  },[]);
}
