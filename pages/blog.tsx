import DefaultPage from '../layouts/default-page/default-page';
import BlogCard, { ArticleType } from '../components/blog-card/blog-card';
import Filter from '../components/atoms/filter/filter';
import { useContext, useEffect, useRef, useState } from 'react';
import Pagination from '../components/atoms/pagination/pagination';
import { ActionCreator, AppContext } from '../context/AppContext';

interface Props {
  articles:ArticleType[];
}

const CARDS_TO_SHOW = 8;

function Blog(props:Props) {
  const { articles } = props;
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch(ActionCreator.setArticles(articles));
  }, [])

  const [ activeArticles, setActiveArticles ] = useState(articles);
  const [ showedArticles, setShowedArticles ] = useState(articles.slice(0, CARDS_TO_SHOW));

  const filterContainer = useRef<HTMLDivElement>(null);
  let categories = Array.from(new Set(articles.map(({ category }) => category.name)));
  categories.unshift('все категории');

  function handleCategoryChange(category:string):void {
    if (category === categories[0]) {
      setActiveArticles(articles);
      setShowedArticles(articles.slice(0, CARDS_TO_SHOW));
    } else {
      const filteredArticles = articles.filter((article) => {
        return article.category.name === category;
      });

      setActiveArticles(filteredArticles);
      setShowedArticles(() => filteredArticles.slice(0, CARDS_TO_SHOW));
    }
  }

  function handlePageChoose(pageNumber: number): void {
    const startIndex = (pageNumber - 1) * CARDS_TO_SHOW;
    setShowedArticles(activeArticles.slice(startIndex, CARDS_TO_SHOW + startIndex));

    if (filterContainer.current) {
      filterContainer.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <DefaultPage pageModifier="blog">
      <div className="blog">
        <div className="blog__content">
          <h1 className="blog__title">Блог</h1>
          <p className="blog__note">
            Авторские статьи как на&nbsp;русском, так и&nbsp;на&nbsp;испанском. Как&nbsp;подоготовиться к&nbsp;DELE?
            С&nbsp;чего начать изучение испанского языка? Как выйти на&nbsp;новый уровень в&nbsp;изучаемом языке?
            Что послушать или посмотреть на&nbsp;испанском? Oтветы на&nbsp;эти и&nbsp;другие вопросы вы&nbsp;сможете
            найти в&nbsp;этом блоге.
          </p>

          <div className="blog__filter" ref={ filterContainer }>
            <Filter
              values={ categories }
              onFilterChange={ handleCategoryChange }
              initialValue={ categories[0] }
            />
          </div>

          <ul className="blog__list">
            { showedArticles.map((article) => (
              <li className="blog__item" key={ article.id }>
                <BlogCard article={ article } />
              </li>
            )) }
          </ul>

          { activeArticles.length > CARDS_TO_SHOW &&
            <div className="blog__pagination">
              <Pagination
                pagesCount={ Math.ceil(activeArticles.length / CARDS_TO_SHOW) }
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
