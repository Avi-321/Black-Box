import React from 'react';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
            <div className="banner-contact d-flex  gap-4">
            <div className="banner-email"><i class="ri-mail-line me-2"></i>example@example.com</div>
            <div class="line"></div>
            <div className="banner-phone"><i class="ri-phone-line me-2"></i>123-456-7890</div>
            </div>
            <div className="banner-links  ">
            {/* <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/faq">FAQ</a> */}
                <ul className='list-unstyled d-flex me-5'>
                            <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-facebook fa-2x"></i></a></li>
                            <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-instagram fa-2x"></i></a></li>
                            <li className="ms-3"><a href="#" className="link-light"><i className="fa fa-twitter fa-2x"></i></a></li>
                            
                </ul>
            </div>
        
      </div>
    </div>
  );
};

export default Banner;
