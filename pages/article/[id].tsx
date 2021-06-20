import { useRouter } from 'next/router';
import data from '../../staticData/blog';
import DefaultPage from '../../layouts/default-page/default-page';

export interface Props {
  article: {
    category: string,
    title: string,
    subtitle: string,
    text: string
    img: {
      default: {
        mobile: string,
        tablet: string,
        desktop: string,
      },
      retina: {
        mobile: string,
        tablet: string,
        desktop: string,
      }
    }
  }
}

export default function Article() {
  const { query } = useRouter();

  const articleId = typeof query.id === 'string' ? query.id : '1';
  const { category, img, title, text }: Props['article'] = data[ Number(articleId) - 1 ];

  return (
    <DefaultPage pageModifier='article'>
      <div className='article'>
        <article className='article__content'>
          <div className='article__item'>
            <h1 className='article__title'>{ title }</h1>
            <div className='article__image-wrapper'>
              <p className='article__category'>{ category }</p>
              <picture>
                <source
                  media='(min-width: 1152px)'
                  srcSet={` ${ img.default.desktop } 1x, ${ img.retina.desktop } 2x `}
                />
                <source
                  media='(min-width: 768px)'
                  srcSet={` ${ img.default.tablet } 1x, ${ img.retina.tablet } 2x `}
                />
                <img
                  className='article__image'
                  src={ img.default.mobile }
                  srcSet={ ` ${ img.retina.mobile } 2x ` }
                  alt={ title }
                />
              </picture>
            </div>
            <p className='article__text'>
              { text }
            </p>
          </div>
        </article>
      </div>
    </DefaultPage>
  )
}
