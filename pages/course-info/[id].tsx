import { useRouter } from 'next/router';
import { useState } from 'react';
import DefaultPage from '../../layouts/default-page/default-page';
import ButtonBack from '../../components/atoms/button-back/button-back';
import AppointmentModal from '../../components/appointment-modal/appointment-modal';
import data from '../../staticData/class-options';

const sanitize = require('sanitize-html-react');

export interface CourseType {
  "id": number,
  "title": string,
  "annotation": string,
  "description": string,
  "icon": {
    "id": string,
    "width": string,
    "height": string
  },
  "img": {
    "default": {
      "mobile": string,
      "tablet": string,
      "desktop": string
    },
    "retina": {
      "mobile": string,
      "tablet": string,
      "desktop": string
    },
    "alt": string
  }
}

export default function CourseInfo() {
  const { query } = useRouter();
  const [ isModalOpened, setModalStatus ] = useState(false);

  const courseId = typeof query.id === 'string' ? Number(query.id) : 0;
  const courseById = data.options.find(( { id } ) => id === courseId );
  const defaultCourse = data.options[0];
  const currentCourse: CourseType = courseById ? courseById : defaultCourse;

  const { img, description, icon, title }  = currentCourse;

  function handleModalClose() {
    setModalStatus(false);
  }

  return (
    <DefaultPage pageModifier='course-info'>
      <div className='course-info'>

        <div className='course-info__title-wrapper'>
          <svg className='course-info__number-icon' width={ icon.width } height={ icon.height }>
            <use xlinkHref={` #${ icon.id } `}/>
          </svg>
          <h1 className='course-info__title'>{ title }</h1>
        </div>

        <div className='course-info__content'>
          <picture>
            <source
              media='(min-width: 1152px)'
              srcSet={ `${ img.default.desktop } 1x, ${ img.retina.desktop } 2x` }
            />
            <source
              media='(min-width: 768px)'
              srcSet={ `${ img.default.tablet } 1x, ${ img.retina.tablet } 2x` }
            />
            <img
              className='course-info__image'
              src={ img.default.mobile }
              srcSet={ `${ img.default.mobile } 2x` }
              alt={ title }
            />
          </picture>
          <section className='course-info__description'>
            <h2 className='course-info__description-title'>Для кого этот курс?</h2>
            <p className='course-info__description-text' dangerouslySetInnerHTML={{__html: sanitize(description)}} />
          </section>
          <section className='course-info__price'>
            <h2 className='course-info__price-title'>Стоимость</h2>
            <ul className='course-info__price-list'>
              <li className='course-info__price-item'>
                <span className='course-info__price-value'>1 500 RUB</span>
                <span className='course-info__price-duration'>  /  60 минут</span>
              </li>
              <li className='course-info__price-item'>
                <span className='course-info__price-value'>2 000 RUB</span>
                <span className='course-info__price-duration'>  /  90 минут</span>
              </li>
            </ul>
            <p className='course-info__price-notice'>
              При единовременной оплате<br/>
              от четырёх занятий, скидка -
              <span className='course-info__discount-value'> 20%</span>
            </p>
          </section>

          <button
            className='course-info__appointment-button button-primary js-appointment-button'
            onClick={ () => setModalStatus(true) }
          >
            Записаться на курс
          </button>
        </div>

        <div className='course-info__button-back-wrap'>
          <ButtonBack />
        </div>

        <AppointmentModal
          isShowed={ isModalOpened }
          onCloseButtonClick={ handleModalClose }
        />

      </div>
    </DefaultPage>
  )
}
