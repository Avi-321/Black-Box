import React from 'react'

export default function Footer() {
  return (
    <div>
        <footer className='footer text-white bg-dark'>
            <footer className='py-5'>
                <div className="row">
                    <div className="col-3 ms-5">
                        <h4> 黑盒子</h4>
                    </div>

                    <div className="col-2">
                        <h5>部分</h5>
                        <ul className='nav flex-column'>
                            <li className='nav-item mb-2'>
                                <a to='#' className="nav-link p-0 text-white">Home</a>
                            </li>
                            <li className='nav-item mb-2'>
                                <a to='#' className="nav-link p-0 text-white">Features</a>
                            </li>
                            <li className='nav-item mb-2'>
                                <a to='#' className="nav-link p-0 text-white">Pricing</a>
                            </li>
                            <li className='nav-item mb-2'>
                                <a to='#' className="nav-link p-0 text-white">FAQs</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-4 offset-1">
                        <form>
                            <h5>订阅我们的新闻</h5>
                            <p> 仅摘要我们的新鲜和令人兴奋的内容。</p>
                            <div className="d-flex w-100 gap-2">
                                <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                                <button className='btn btn-danger rounded-pill px-4' type="button">Subscribe</button>

                            </div>
                        </form>
                    </div>
                </div>
                <div className="d-flex justify-content-between pt-4 mt-4 ms-4 border-top">
                    <p>© 2023 公司，Inc. 保留所有权利。</p>
                    <ul className='list-unstyled d-flex me-5'>
                        <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-facebook fa-2x icon-footer"></i></a></li>
                        <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-instagram fa-2x icon-footer"></i></a></li>
                        <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-twitter fa-2x icon-footer"></i></a></li>
                        
                    </ul>
                </div>
            </footer>
        </footer>
    </div>
  )
}
