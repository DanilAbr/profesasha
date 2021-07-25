export function PageLoader() {
  const numbers = [ ...Array(18).keys() ];

  return (
    <div className="page-loader">
      <div className="page-loader__book">
        <div className="inner">
          <div className="left" />
          <div className="middle" />
          <div className="right" />
        </div>
        <ul>
          { numbers.map((number) => <li key={ number } />) }
        </ul>
      </div>
    </div>
  )
}
