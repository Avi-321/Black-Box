import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      title: "Stephen",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic2,
      title: "Client",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic3,
      title: "Ram",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
    {
      img: profilePic4,
      title: "Hawk",
      review:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
    },
  ];

  return (
  //   <div className="t-wrapper" id="testimonial">
          
  //     <div className="t-heading ms-5">
  //       <span style={{fontSize:"2rem !important"}}>Clients always give </span><br/>
  //       <span>Exceptional Work </span>
  //       <span>reviews</span>
  //     <div className="blur t-blur1" style={{ background: "rgb(238 210 255)" }}></div>
  //     <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

  //     </div>
  //     <Swiper
        
  //       modules={[Pagination]}
  //       slidesPerView={1}
  //       pagination={{ clickable: true }}
  //     >
  //       {clients.map((client, index) => {
  //         return (
  //           <SwiperSlide key={index}>
  //             <div className="testimonial">
  //               <img src={client.img} alt="" />
  //               <h1>{client.title}</h1>
  //               <span>{client.review}</span>
  //             </div>
  //           </SwiperSlide>
  //         );
  //       })}
  //     </Swiper>
  //   </div>



 <section className="testimon">
  <div className="container">
    <h1 className="section-header">Client Review <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span></h1>
    <div className="testimonials">
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="single-item">
              <div className="row">
                <div className="col-md-5">
                  <div className="profile">
                    <div className="img-area">
                      <img src={profilePic1} alt />
                    </div>
                    <div className="bio">
                      <h2>Dave Wood</h2>
                      <h4>Web Developer</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <p><span><i className="fa fa-quote-left" /></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!</p>
                    <p className="socials">
                    <ul class="team-icon gap-4">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a></li>
                      
                      <li><a href="#" class="pinterest">
                        <i class="fa fa-pinterest"></i>
                    </a></li>
                      
                      <li><a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a></li>
                      
                      <li><a href="#" class="dribble">
                        <i class="fa fa-dribbble"></i>
                    </a></li>
                      
                  </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="single-item">
              <div className="row">
                <div className="col-md-5">
                  <div className="profile">
                    <div className="img-area">
                      <img src={profilePic2} alt />
                    </div>
                    <div className="bio">
                      <h2>Martin Guptill</h2>
                      <h4>UI/UX Designer</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <p><span><i className="fa fa-quote-left" /></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!</p>
                    <p className="socials">
                    <ul class="team-icon gap-4">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a></li>
                      
                      <li><a href="#" class="pinterest">
                        <i class="fa fa-pinterest"></i>
                    </a></li>
                      
                      <li><a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a></li>
                      
                      <li><a href="#" class="dribble">
                        <i class="fa fa-dribbble"></i>
                    </a></li>
                      
                  </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="single-item">
              <div className="row">
                <div className="col-md-5">
                  <div className="profile">
                    <div className="img-area">
                      <img src={profilePic3} alt />
                    </div>
                    <div className="bio">
                      <h2>Stephen Jones</h2>
                      <h4>Graphic Designer</h4>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="content">
                    <p><span><i className="fa fa-quote-left" /></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel a eius excepturi molestias commodi aliquam error magnam consectetur laboriosam numquam, minima eveniet nostrum sequi saepe ipsam non ea, inventore tenetur! Corporis commodi consequatur molestiae voluptatum!</p>
                    <p className="socials">
                    <ul class="team-icon gap-4">
                      
                      <li><a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a></li>
                      
                      <li><a href="#" class="pinterest">
                        <i class="fa fa-pinterest"></i>
                    </a></li>
                      
                      <li><a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a></li>
                      
                      <li><a href="#" class="dribble">
                        <i class="fa fa-dribbble"></i>
                    </a></li>
                      
                  </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</section>



  );
};

export default Testimonial;
