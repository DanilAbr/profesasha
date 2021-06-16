export default function FirstScreen() {
  return (
    <section className="first-screen">
      <div className="first-screen__container">
        <div className="first-screen__img-wrapper">
          <picture>
            <source
              media="(min-width: 1152px)"
              srcSet="assets/images/index-first-photo-desktop@1x.png 1x, assets/images/index-first-photo-desktop@2x.png 2x"
            />
            <source
              media="(min-width: 768px)"
              srcSet="assets/images/index-first-photo-tablet@1x.png 1x, assets/images/index-first-photo-tablet@2x.png 2x"
            />
            <img
              className="first-screen__img"
              src="assets/images/index-first-photo-mobile@1x.png"
              srcSet="assets/images/index-first-photo-mobile@2x.png 2x"
              alt="Александра Абрамова"
            />
          </picture>
        </div>

        <div className="first-screen__content-wrapper">
          <p className="first-screen__text first-screen__text--top">Привет, меня зовут</p>
          <h1 className="first-screen__title">Александра Абрамова</h1>
          <p className="first-screen__text first-screen__text--bottom">
            Я более пяти лет знакомлю и влюбляю людей в испанский язык.
            Если ты давно мечтаешь заговорить на самой красивом
            языке в мире, то ты обратился по адресу.
          </p>
        </div>

      </div>
    </section>
)
}