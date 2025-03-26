import Slider from "react-slick";
import { Star,Quote } from "lucide-react";

<Quote className="w-6 h-6 text-blue-500" />

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonials() {
  const testimonials = [
    {
      clientName: "Alex Wilson",
      testimonial: "Instructors from around the world teach millions of students on Edvik. They provide the top best tools and learning materials.",
      profession: "Entrepreneur",
      rating: 5,
    },
    {
      clientName: "Marie Dupont",
      testimonial: "Instructors from around the world teach millions of students on Edvik. They provide the top best tools and learning materials.",
      profession: "Marketing Manager",
      rating: 4,
    },
    {
      clientName: "John Doe",
      testimonial: "Instructors from around the world teach millions of students on Edvik. They provide the top best tools and learning materials.",
      profession: "Software Engineer",
      rating: 4.5,
    },
    {
      clientName: "Sophia Lee",
      testimonial: "Instructors from around the world teach millions of students on Edvik. They provide the top best tools and learning materials.",
      profession: "Graphic Designer",
      rating: 5,
    },
    {
      clientName: "Michael Brown",
      testimonial: "Instructors from around the world teach millions of students on Edvik. They provide the top best tools and learning materials.",
      profession: "Student",
      rating: 4,
    },
  ];

  // Slider settings
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="reviews" className="min-h-[50vh] bg-blue-100 px-16 sm:px-[110px] md:px-7 py-[140px] ">
      <div className="mx-auto h-50 max-w-7xl ">
      <div className="text-center mb-20">
                    <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
                        What learners say about us
                    </h2>
                    <div className="flex justify-center items-center gap-2">
                        <span className="w-20 h-1 bg-blue-600"></span>
                        <span className="w-6 h-1 bg-blue-600"></span>
                        <span className="w-12 h-1 bg-blue-600"></span>
                    </div>
                </div>

        <Slider {...settings} >
          {testimonials.map((testimonial, index) => (
            <div key={index} >

              <div className="flex hover:bg-blue-200 hover:border duration-500 gap-5 px-5 py-10 flex-col items-right bg-white mr-3 rounded-2xl ">

              
                
                <p className="text-gray-700 text-left text-base">
                  "{testimonial.testimonial}"
                </p>
<div className="flex items-center ">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.round(testimonial.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex align-center justify-between">

                <div className="flex align-center gap-3">
                <img
                  src='https://randomuser.me/api/portraits/men/32.jpg'
                  
                  alt={testimonial.clientName}
                  className="w-14 h-14 rounded-full  object-cover"
                /> <div>
                <h3 className="text-lg font-semibold ">
                  {testimonial.clientName}
                </h3>
                <p className="text-sm text-blue-600">{testimonial.profession}</p>
                </div>
                </div>
                <div className="flex justify-center items-center w-14 h-14 p-2 bg-blue-600 rounded-full "><Quote className="w-12 h-12 text-white" /></div>

              </div></div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
