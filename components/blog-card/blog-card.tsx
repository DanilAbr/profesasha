import Link from 'next/link';

const sanitize = require('sanitize-html-react');

export interface ArticleType {
  id: number,
  category: {
    name: string,
  },
  title: string,
  subtitle: string,
  text: string
  img?: {
    default: {
      mobile: string,
      tablet: string,
      desktop: string,
    },
    retina: {
      mobile: string,
      tablet: string,
      desktop: string,
    },
  },
}

export interface Props {
  article: ArticleType,
}

export default function BlogCard(props: Props) {
  const { category, title, subtitle, img, id } = props.article;

  return (
    <Link href={ `/article/${ id }` }>
      <a className="blog-card" aria-label={ title }>
        <p className="blog-card__category">{ category.name }</p>
        <h3 className="blog-card__title" dangerouslySetInnerHTML={ { __html: sanitize(title) } } />
        { img &&
          <img
            className="blog-card__image"
            src={ img.default.mobile }
            srcSet={ ` ${ img.retina.mobile } 2x ` }
            alt={ title }
          />
        }
        <p className="blog-card__subtitle" dangerouslySetInnerHTML={ { __html: sanitize(subtitle) } } />
      </a>
    </Link>
  )
}
