import { useState } from 'react';
import useEscKeyListener from '../../../hooks/useEscKeyListener';

const EMAIL = 'abramova.alexandra@yahoo.com';

export default function MailDisplay() {
  const [ isOpen, setOpenStatus ] = useState(false);
  const [ isSaved, setSavedStatus ] = useState(false);

  useEscKeyListener(() => setOpenStatus(false));

  function copyText() {
    navigator.clipboard.writeText(`${ EMAIL }`)
      .then(() => {
        setSavedStatus(true);
        const timer = setTimeout(() => {
          setSavedStatus(false);
          clearTimeout(timer);
        }, 2000);
      });
  }

  return (
    <div className='mail-display'>
      <button
        className='mail-display__popup-button'
        onClick={ () => { setOpenStatus((prev) => !prev) }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width='15' height='15'><path d="M467 61H45C20.218 61 0 81.196 0 106v300c0 24.72 20.128 45 45 45h422c24.72 0 45-20.128 45-45V106c0-24.72-20.128-45-45-45zm-6.214 30L256.954 294.833 51.359 91h409.427zM30 399.788V112.069l144.479 143.24L30 399.788zM51.213 421l144.57-144.57 50.657 50.222c5.864 5.814 15.327 5.795 21.167-.046L317 277.213 460.787 421H51.213zM482 399.787L338.213 256 482 112.212v287.575z"/></svg>
      </button>
      <div className={ `mail-display__popup ${ isOpen ? 'mail-display__popup--opened' : '' }` }>
        <a
          className='mail-display__value'
          href={ `mailto:${ EMAIL }` }
        >{ EMAIL }</a>
        <button
          className='mail-display__copy-button'
          aria-label='скопировать адрес электронной почты'
          onClick={ copyText }
        >
          { !isSaved &&
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.867 477.867" width='15' height='15'>
              <path d="M341.333 85.333H51.2c-28.277 0-51.2 22.923-51.2 51.2v290.133c0 28.277 22.923 51.2 51.2 51.2h290.133c28.277 0 51.2-22.923 51.2-51.2V136.533c0-28.277-22.923-51.2-51.2-51.2zM358.4 426.667c0 9.426-7.641 17.067-17.067 17.067H51.2c-9.426 0-17.067-7.641-17.067-17.067V136.533c0-9.426 7.641-17.067 17.067-17.067h290.133c9.426 0 17.067 7.641 17.067 17.067v290.134z"/><path d="M426.667 0h-307.2c-28.277 0-51.2 22.923-51.2 51.2 0 9.426 7.641 17.067 17.067 17.067S102.4 60.626 102.4 51.2s7.641-17.067 17.067-17.067h307.2c9.426 0 17.067 7.641 17.067 17.067v307.2c0 9.426-7.641 17.067-17.067 17.067s-17.067 7.641-17.067 17.067 7.641 17.067 17.067 17.067c28.277 0 51.2-22.923 51.2-51.2V51.2c0-28.277-22.923-51.2-51.2-51.2z"/>
            </svg>
          }
          { isSaved &&
            <svg height='15' width='15' viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/><path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/>
            </svg>
          }
        </button>
      </div>
    </div>
  )
}
