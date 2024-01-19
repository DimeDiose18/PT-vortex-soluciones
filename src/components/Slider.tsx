import { Grid } from "@mui/material";
import '../App.css'
import { useState, useEffect, useRef } from "react";
import reviewImg from "../assets/reviews/review-2.png"

const reviewsImages = [ reviewImg ,reviewImg ,reviewImg ,reviewImg ];
const delay = 3500;

const Slider = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(0);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === reviewsImages.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <Grid container spacing={2} className='bg-yellow h-[28rem] w-[100%] p-6 shadow-md hover:shadow-lg' sx={{marginTop: '3.5rem'}}>
        <Grid item xs={12} md={12} lg={12} xl={12} className="flex justify-center py-3">
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-blacky sm:text-3xl">With the trust of Professionals who advise <strong>3M+</strong> of Newbie Writers</h3>
        </Grid>
        <Grid item xs={12} md={12} lg={12} xl={12}>
          <div className="slideshow">
            <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              {reviewsImages.map((reviewsImage, index) => (
                <div className="slide" key={index} style={{ backgroundImage: `url(${reviewsImage})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', flex: 1 }}  />
              ))}
            </div>
            <div className="slideshowDots">
              {reviewsImages.map((_, idx) => (
                <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`}
                  onClick={() => {
                    setIndex(idx);
                  }}></div>
              ))}
            </div>
          </div>
        </Grid>
      </Grid>
    </>

  );
};

export { Slider }
