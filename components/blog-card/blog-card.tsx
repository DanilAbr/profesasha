import Link from 'next/link';

export interface ArticleType {
  id: number,
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

export interface Props {
  article: ArticleType,
}

export default function BlogCard(props: Props) {
  const { category, title, subtitle, text, img, id } = props.article;
  console.log(id);

  return (
    <Link href={ `/article/${id}` }>
      <a className='blog-card' aria-label={ title }>
        <p className='blog-card__category'>{ category }</p>
        <h3 className='blog-card__title'>{ title }</h3>
        <h4 className='blog-card__subtitle'>{ subtitle }</h4>
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
            className='blog-card__image'
            src={ img.default.mobile }
            srcSet={ ` ${ img.retina.mobile } 2x ` }
            alt={ title }
          />
        </picture>
        <p className='blog-card__text'>{ text }</p>
      </a>
    </Link>
  )
}
