export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <h2 className="about-me__title">Обо мне</h2>
        <div className="about-me__image-wrapper">
          <picture>
            <source
              media="(min-width: 1152px)"
              srcSet="assets/images/about-me-photo-desktop@1x.png 1x, assets/images/about-me-photo-desktop@2x.png 2x"
            />
              <source
                media="(min-width: 768px)"
                srcSet="assets/images/about-me-photo-tablet@1x.png 1x, assets/images/about-me-photo-tablet@2x.png 2x"
            />
            <img
              className="about-me__image"
              src="assets/images/about-me-photo-mobile@1x.png"
              srcSet="assets/images/about-me-photo-mobile@2x.png 2x"
              alt="Александра Абрамова"
              width='244'
              height='493'
            />
          </picture>
        </div>
        <p className="about-me__text">
          За последние годы я дала несколько тысяч уроков и обучила около сотни студентов,
          многие из которых занимались и занимаются со мной на протяжении нескольких лет.
          Также успела поработать устным переводчиком, где получила огромное количество
          языковой практики в условиях повышенного стресса. Постоянно повышаю свою квалификацию
          обучаясь как самостоятельно, так на специализированных курсах для преподавателей.
          Кроме высшего педагогического образования сдала успешно экзамен DELE C1
          подтверждающий владение испанским языком на профессиональном уровне и
          получила аккредитацию экзаменатора уровней B1-B2 от Института Сервантеса.
        </p>
      </div>
    </section>
  )
}
