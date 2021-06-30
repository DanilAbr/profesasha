import Link from 'next/link';

export interface ArticleType {
  id: number,
  category: string,
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
    }
  }
}

export interface Props {
  article: ArticleType,
}

export default function BlogCard(props: Props) {
  const { category, title, subtitle, text, img, id } = props.article;

  return (
    <Link href={ `/article/${id}` }>
      <a className='blog-card' aria-label={ title }>
        <p className='blog-card__category'>{ category }</p>
        <h3 className='blog-card__title'>{ title }</h3>
        <h4 className='blog-card__subtitle'>{ subtitle }</h4>
        { img &&
          <img
            className='blog-card__image'
            src={ img.default.mobile }
            srcSet={ ` ${ img.retina.mobile } 2x ` }
            alt={ title }
          />
        }
        <p className='blog-card__text'>{ text }</p>
      </a>
    </Link>
  )
}
