import { useRouter } from "next/router";
import DefaultPage from "../../layouts/default-page/default-page";
import ButtonBack from "../../components/atoms/button-back/button-back";
import data from "../../staticData/course-info";
import AppointmentModal from "../../components/appointment-modal/appointment-modal";
import {useState} from "react";

interface CourseType {
  "iconId": string,
  "title": string,
  "description": string,
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

interface Props {
  [key: string]: CourseType
}

const UrlToData = {
  "common-course": "commonCourse",
  "international-exam": "internationalExam",
  "improvement": "improvement"
} as const

export default function CourseInfo() {
  const { query } = useRouter();
  const [ isModalOpened, setModalStatus ] = useState(false);

  const courseUri = query.id;
  // @ts-ignore
  const courseName = UrlToData[courseUri];
  // @ts-ignore
  const {img, description, iconId, title} = data[courseName] ? data[courseName] : data["commonCourse"];

  function handleModalClose() {
    setModalStatus(false);
  }

  return (
    <DefaultPage pageModifier="course-info">
      <div className="course-info">

        <div className="course-info__title-wrapper">
          <svg className="course-info__number-icon" width="116" height="75">
            <use xlinkHref={` #${ iconId } `}></use>
          </svg>
          <h1 className="course-info__title">{ title }</h1>
        </div>

        <div className="course-info__content">
          <picture>
            <source
              media="(min-width: 1152px)"
              srcSet={ `${ img.default.desktop } 1x, ${ img.retina.desktop } 2x` }
            />
            <source
              media="(min-width: 768px)"
              srcSet={ `${ img.default.tablet } 1x, ${ img.retina.tablet } 2x` }
            />
            <img
              className="course-info__image"
              src={ img.default.mobile }
              srcSet={ `${ img.default.mobile } 2x` }
              alt={ title }
            />
          </picture>
          <section className="course-info__description">
            <h2 className="course-info__description-title">Для кого этот курс?</h2>
            <p className="course-info__description-text">
              { description }
            </p>
          </section>
          <section className="course-info__price">
            <h2 className="course-info__price-title">Стоимость</h2>
            <ul className="course-info__price-list">
              <li className="course-info__price-item">
                <span className="course-info__price-value">1 500 RUB</span>
                <span className="course-info__price-duration">  /  60 минут</span>
              </li>
              <li className="course-info__price-item">
                <span className="course-info__price-value">2 000 RUB</span>
                <span className="course-info__price-duration">  /  90 минут</span>
              </li>
            </ul>
            <p className="course-info__price-notice">
              При единовременной оплате<br/>
              от четырёх занятий, скидка -
              <span className="course-info__discount-value"> 20%</span>
            </p>
          </section>
          <button
            className="course-info__appointment-button button-primary js-appointment-button"
            onClick={() => setModalStatus(true)}
          >
            Записаться на курс
          </button>
        </div>

        <div className="course-info__back">
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
