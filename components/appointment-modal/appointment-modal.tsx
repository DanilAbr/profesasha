import { FormEvent, useEffect, useRef, useState } from "react";

interface Props {
  isShowed: boolean,
  onCloseButtonClick: () => void,
}

export default function AppointmentModal(props: Props) {
  const { isShowed, onCloseButtonClick } = props;

  const nameInput = useRef<HTMLInputElement>(null);
  const [ userName, setUserName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ message, setMessage ] = useState("");

  useEffect(() => {
    if (nameInput.current && isShowed) {
      nameInput.current.focus()
    }

    function onEscapePress(evt: KeyboardEvent): void {
      if (evt.key === 'Escape') { onCloseButtonClick(); }
    }

    document.addEventListener('keydown', onEscapePress);

    return () => { document.removeEventListener('keydown', onEscapePress); }
  },[ isShowed ]);

  function sendMessage(evt: FormEvent) {
    evt.preventDefault();
    fetch('/api/appointment', {
      method: "POST",
      body: JSON.stringify({ username: userName, email, message }),
      headers: new Headers({ "Content-Type": "application/json" }),
    }).then(() => onCloseButtonClick());
  }

  return (
    <section className={ `appointment-modal ${ !isShowed ? 'appointment-modal--closed' : '' }` }>
      <div className="appointment-modal__container">
        <h2 className="appointment-modal__title">Запишитесь</h2>
        <p className="appointment-modal__note">Вы можете указать ваши пожелания в сообщении.<br/> Я отвечу вам в ближайшее время</p>
        <form
          className="appointment-modal__form"
          onSubmit={ (evt) => sendMessage(evt) }
        >
          <input
            ref={ nameInput }
            onChange={ (evt) => setUserName(evt.target.value)}
            value={ userName }
            className="appointment-modal__name-input"
            placeholder="Имя"
            name="username"
            type="text"
            required
          />
          <input
            onChange={ (evt) => setEmail(evt.target.value)}
            value={ email }
            className="appointment-modal__email-input"
            placeholder="E-mail"
            name="email"
            type="email"
            required
          />
          <textarea
            onChange={ (evt) => setMessage(evt.target.value)}
            value={ message }
            className="appointment-modal__message-input"
            name="message"
            placeholder="Сообщение"
          />
          <button
            className="appointment-modal__submit-button button-primary"
            type="submit"
          >
            Отправить
          </button>
        </form>
        <button
          className="appointment-modal__close-button"
          onClick={ onCloseButtonClick }
          aria-label="закрыть окно"
        >
          <svg width="22" height="22">
            <use xlinkHref="#icon-close"></use>
          </svg>
        </button>
      </div>
    </section>
  )
}
