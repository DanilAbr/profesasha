import DefaultPage from '../layouts/default-page/default-page';
import BlogCard  from '../components/blog-card/blog-card';
import articles from '../staticData/blog';

export default function Blog() {
  return (
    <DefaultPage pageModifier='blog'>
      <div className='blog'>
        <div className='blog__content'>
          <h1 className='blog__title'>Блог</h1>
          <p className='blog__note'>{
            `  Авторские статьи как на русском, так и на испанском.\n  Как подоготовиться к DELE? С чего начать изучение испанского языка? Как выйти на новый уровень в изучаемом языке? Что послушать или посмотреть на испанском?\n  Ответы на эти и другие вопросы вы сможете найти в этом блоге.`
          }</p>
          <ul className='blog__list'>
            { articles.map(( article ) => {
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
