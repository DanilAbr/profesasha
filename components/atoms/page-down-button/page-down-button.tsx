interface Props {
  onClick: () => void,
  shouldDisappear: boolean,
}

export default function PageDownButton(props: Props) {
  const { onClick, shouldDisappear } = props;

  return (
    <button
      onClick={ onClick }
      className={ `page-down-button ${ shouldDisappear ? 'page-down-button--hidden' : '' }` }
      type="button"
      aria-label="Перемотка экрана вниз к следующей секции"
    >
      <svg width="8" height="88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.646 87.354a.5.5 0 00.708 0l3.182-3.182a.5.5 0 10-.708-.707L4 86.293l-2.828-2.829a.5.5 0 10-.708.708l3.182 3.182zM3.5 0v87h1V0h-1z" fill="#000" />
      </svg>
    </button>
  )
}
