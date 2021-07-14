import DefaultPage from '../layouts/default-page/default-page';
import BlogCard, { ArticleType } from '../components/blog-card/blog-card';
import Filter from '../components/atoms/filter/filter';
import {useEffect, useRef, useState, useContext} from 'react';
import Pagination from '../components/atoms/pagination/pagination';
import { AppContext, ActionCreator } from "../context/AppContext";

interface Props {
  articles: ArticleType[];
}

const CARDS_TO_SHOW = 6;

function Blog(props: Props) {
  const { articles } = props;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(ActionCreator.setArticles(articles));
  }, [])

  const [ activeArticles, setActiveArticles ] = useState( articles );
  const [ showedArticles, setShowedArticles ] = useState( articles.slice(0, CARDS_TO_SHOW) );

  const filterContainer = useRef<HTMLDivElement>(null);
  let categories = Array.from(new Set(articles.map(({ category }) => category.name)));
  categories.unshift('все категории');

  function handleCategoryChange( category: string ): void {
    if (category === categories[0]) {
      setActiveArticles(articles);
      setShowedArticles( articles.slice(0, CARDS_TO_SHOW) );
    } else {
        const filteredArticles = articles.filter(( article ) => {
          return article.category.name === category;
        });

        setActiveArticles(filteredArticles);
        setShowedArticles(() => filteredArticles.slice(0, CARDS_TO_SHOW));
    }
  }

  function handlePageChoose( pageNumber: number ): void {
    const startIndex = (pageNumber - 1) * CARDS_TO_SHOW;
    setShowedArticles(activeArticles.slice(startIndex, CARDS_TO_SHOW + startIndex));

    if (filterContainer.current) {
      filterContainer.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <DefaultPage pageModifier='blog'>
      <div className='blog'>
        <div className='blog__content'>
          <h1 className='blog__title'>Блог</h1>
          <p className='blog__note'>{
            `  Авторские статьи как на русском, так и на испанском.\n  Как подоготовиться к DELE? С чего начать изучение испанского языка? Как выйти на новый уровень в изучаемом языке? Что послушать или посмотреть на испанском?\n  Ответы на эти и другие вопросы вы сможете найти в этом блоге.`
          }</p>
          <div className='blog__filter' ref={ filterContainer }>
            <Filter
              values={ categories }
              onFilterChange={ handleCategoryChange }
              initialValue={ categories[0] }
            />
          </div>
          <ul className='blog__list'>
            { showedArticles.map(( article ) => {
              return (
                <li className='blog__item' key={ article.id }>
                  <BlogCard article={ article } />
                </li>
              )
            }) }
          </ul>
          { activeArticles.length > CARDS_TO_SHOW &&
          <div className='blog__pagination'>
            <Pagination
              pagesCount={ Math.ceil( activeArticles.length / CARDS_TO_SHOW ) }
              onPageLinkClick={ handlePageChoose }
            />
          </div>
          }
        </div>
      </div>
    </DefaultPage>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://profesasha.herokuapp.com/articles');
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  }
}

export default Blog;
