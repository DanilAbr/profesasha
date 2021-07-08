import { useRouter } from 'next/router';
import data from '../../staticData/blog';
import DefaultPage from '../../layouts/default-page/default-page';
import { ArticleType } from '../../components/blog-card/blog-card';
import ButtonBack from "../../components/atoms/button-back/button-back";

export interface Props {
  articles: ArticleType[],
}

export default function Article() {
  const { query } = useRouter();

  const articleId = typeof query.id === 'string' ? Number(query.id) : 1;
  const articleById = data.articles.find(( { id } ) => id === articleId );
  const defaultArticle = data.articles[0];
  const currentArticle: ArticleType = articleById ? articleById : defaultArticle;

  const { category, img, title, text, subtitle } = currentArticle;

  return (
    <DefaultPage pageModifier='article'>
      <div className='article'>
        <article className='article__content'>
          <div className='article__item'>
            <p className='article__category'>{ category.name }</p>
            <h1 className='article__title'>{ title }</h1>
            { img &&
              <div className='article__image-wrapper'>
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
            }
            <p className='article__subtitle'>
              { subtitle }
            </p>
            <p className='article__text'>
              { text }
            </p>
          </div>
        </article>
        <div className='article__button-back'>
          <ButtonBack />
        </div>
      </div>
    </DefaultPage>
  )
}
