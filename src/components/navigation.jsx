export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {' '}
            <span className="sr-only">Toggle navigation</span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
            <span className="icon-bar"></span>{' '}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Metacine
          </a>{' '}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Dịch vụ
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Giới thiệu
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Hình ảnh
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Đánh giá
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Đội ngũ
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
