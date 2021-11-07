export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Sản phẩm</h2>
          <p>
            Chúng tôi phát triển hai sản phẩm tương ứng với hai nhóm đối tượng
            chính trong hệ thống, <br />
            không giới hạn tính năng và hoàn toàn miễn phí.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-6">
                  {' '}
                  <div className="service-desc">
                    <a href={d.url} className="btn btn-custom btn-lg">
                      <i className={d.icon}></i> {` ${d.name}`}
                    </a>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
