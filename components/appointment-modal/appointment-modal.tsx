import { FormEvent, useEffect, useRef, useState } from "react";
import useEscKeyListener from '../../hooks/useEscKeyListener';

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
  const [ isMessageSent, setMessageSentStatus ] = useState(false);

  useEscKeyListener(onCloseButtonClick);

  useEffect(() => {
    if (nameInput.current && isShowed) {
      nameInput.current.focus();
    }
  },[ isShowed ]);

  function showSucceedMessage() {
    setMessageSentStatus(true);
    return new Promise<void>((resolve) => {
      let timer = setTimeout(() => {
        setMessageSentStatus(false);
        clearInterval(timer);
        resolve();
      }, 2000);
    })
  }

  async function sendMessage(evt: FormEvent) {
    evt.preventDefault();

    try {
      await fetch('/api/appointment', {
        method: "POST",
        body: JSON.stringify({ username: userName, email, message }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      await showSucceedMessage();
      onCloseButtonClick();
      setUserName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      throw new Error(error.message);
    }
  }

  function resizeTextarea(evt: any) {
    const textarea = evt.target;
    textarea.style.height = "";
    textarea.style.height = textarea.scrollHeight + 4 + "px"
  }

  return (
    <section className={ `appointment-modal ${ !isShowed ? 'appointment-modal--closed' : '' }` }>
      { !isMessageSent &&
        <>
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
                onInput={(evt) => resizeTextarea(evt)}
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
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
        </>
      }
      { isMessageSent &&
        <div className='appointment-modal__succeed-window'>
          <p className='appointment-modal__succeed-message'>
            Ваше&nbsp;сообщение успешно&nbsp;отправлено!
          </p>
        </div>
      }
    </section>
  )
}
