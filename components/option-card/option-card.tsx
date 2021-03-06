import Link from 'next/link';
import { CourseType } from '../../pages/course-info/[id]';

const sanitize = require('sanitize-html-react');

interface Props {
  isReversed: boolean,
  data: CourseType,
}

export default function OptionCard(props: Props) {
  const { data, isReversed } = props;
  const { id, icon, description, img, title } = data;

  return (
    <div className={ `option-card ${ isReversed ? 'option-card--reversed' : '' }` }>
      <svg
        className="option-card__number-icon"
        width={ icon.width }
        height={ icon.height }
      >
        <use xlinkHref={ `#${ icon.id }` } />
      </svg>
      <div className="option-card__image-wrapper">
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
            className={ `option-card__image option-card__image--${ id }` }
            src={ img.default.mobile }
            srcSet={ `${ img.retina.mobile } 2x` }
            alt={ img.alt }
          />
        </picture>
      </div>
      <div className="option-card__content">
        <h2 className="option-card__title">{ title }</h2>
        <p className="option-card__description" dangerouslySetInnerHTML={ { __html: sanitize(description) } } />
        <Link href={ `/course-info/${ id }` }>
          <a className="option-card__more-button button-secondary">Подробнее о курсе</a>
        </Link>
      </div>
    </div>
  )
}
