import { useRouter } from "next/router";

export default function ButtonBack() {
  const router = useRouter();

  return (
    <a
      className="button-back"
      onClick={() => router.back()}
    >
      <svg className="button-back__icon" width="8" height="88" fill="none">
        <use xlinkHref="#icon-long-arrow"></use>
      </svg>
      Назад
    </a>
  )
}
