import { useRouter } from 'next/router';
import DefaultPage from '../../layouts/default-page/default-page';
import { mockArticle } from '../../staticData/blog';
import { ArticleType } from '../../components/blog-card/blog-card';
import ButtonBack from "../../components/atoms/button-back/button-back";
import {useAppContext} from "../../context/AppContext";

const sanitize = require('sanitize-html-react');

export interface Props {
  articles: ArticleType[],
}

export default function Article() {
  const { query } = useRouter();
  const { articles } = useAppContext().state as Props;

  const articleId = typeof query.id === 'string' ? query.id : 1;
  const articleById = articles.find(( { id } ) => id === articleId );
  const defaultArticle: ArticleType = mockArticle;
  const currentArticle: ArticleType = articleById ? articleById : defaultArticle;

  const { category, img, title, text, subtitle } = currentArticle;

  console.log(currentArticle);

  return (
    <DefaultPage pageModifier='article'>
      <div className='article'>
        <div className='article__button-back article__button-back--top'>
          <ButtonBack />
        </div>
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
            <div className='article__text' dangerouslySetInnerHTML={{__html: sanitize(text)}} />
          </div>
        </article>
        <div className='article__button-back'>
          <ButtonBack />
        </div>
      </div>
    </DefaultPage>
  )
}
