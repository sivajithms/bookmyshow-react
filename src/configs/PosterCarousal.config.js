const settings = {
  infinite: true,
  autoplay: false,
  slidesToShow: 7,
  slidesToScroll: 2,
  InitialSlide: 0,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
};

export default settings