import DefaultPage from '../layouts/default-page/default-page';
import BlogCard, { ArticleType } from '../components/blog-card/blog-card';
import blogData from '../staticData/blog';
import Filter from '../components/atoms/filter/filter';
import { categories } from '../constants';
import { useState } from 'react';

interface Props {
  articles: ArticleType[];
}

export default function Blog() {
  const { articles } = blogData as Props;

  const [ activeArticles, setActiveArticles ] = useState( articles );

  function handleCategoryChange(category: string) {
    if (category === categories[0]) {
      setActiveArticles(articles);
    } else {
      setActiveArticles(articles.filter(( article ) => {
        return article.category === category;
      } ));
    }
  }

  return (
    <DefaultPage pageModifier='blog'>
      <div className='blog'>
        <div className='blog__content'>
          <h1 className='blog__title'>Блог</h1>
          <p className='blog__note'>{
            `   Авторские статьи как на русском, так и на испанском.\n  Как подоготовиться к DELE? С чего начать изучение испанского языка? Как выйти на новый уровень в изучаемом языке? Что послушать или посмотреть на испанском?\n  Ответы на эти и другие вопросы вы сможете найти в этом блоге.`
          }</p>
          <div className='blog__filter'>
            <Filter
              values={ categories }
              onFilterChange={ handleCategoryChange }
              initialValue={ categories[0] }
            />
          </div>
          <ul className='blog__list'>
            { activeArticles.map(( article ) => {
              return (
                <li className='blog__item' key={ article.id }>
                  <BlogCard article={ article } />
                </li>
              )
            }) }
          </ul>
        </div>
      </div>
    </DefaultPage>
  )
}
