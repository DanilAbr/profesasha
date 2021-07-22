export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <h2 className="about-me__title">Обо мне</h2>
        {/*<div className="about-me__image-wrapper">*/}
        {/*  <picture>*/}
        {/*    <source*/}
        {/*      media="(min-width: 1152px)"*/}
        {/*      srcSet="assets/images/about-me-photo-desktop@1x.png 1x, assets/images/about-me-photo-desktop@2x.png 2x"*/}
        {/*    />*/}
        {/*      <source*/}
        {/*        media="(min-width: 768px)"*/}
        {/*        srcSet="assets/images/about-me-photo-tablet@1x.png 1x, assets/images/about-me-photo-tablet@2x.png 2x"*/}
        {/*    />*/}
        {/*    <img*/}
        {/*      className="about-me__image"*/}
        {/*      loading='lazy'*/}
        //       src="assets/images/about-me-photo-mobile@1x.png"
        //       srcSet="assets/images/about-me-photo-mobile@2x.png 2x"
        {/*      alt="Александра Абрамова"*/}
        {/*      width='244'*/}
        {/*      height='493'*/}
        {/*    />*/}
        {/*  </picture>*/}
        {/*</div>*/}
        <p className="about-me__text">
          За&nbsp;последние годы я&nbsp;дала несколько тысяч уроков и&nbsp;обучила более сотни студентов. Работала
          устным переводчиком на крупном предприятии. Сдала экзамен DELE на&nbsp;уровень C1&nbsp;и&nbsp;получила аккредитацию
          от&nbsp;Института Сервантеса в&nbsp;качестве экзаменатора уровней B1&nbsp;и&nbsp;B2. Непрерывно повышаю свою
          квалификацию, обучаясь самостоятельно и&nbsp;на&nbsp;специализированных курсах для преподавателей.<br/>
          <br/>
          Провожу индивидуальные занятия с учениками дистанционно. Подробную информацию о&nbsp;занятиях можно узнать далее:
        </p>
      </div>
    </section>
  )
}
