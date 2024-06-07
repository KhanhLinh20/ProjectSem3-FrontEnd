import React from 'react'
import { StackedCarousel, ResponsiveContainer } from 'react-stacked-center-carousel'
// import Fab from "@material-ui/core/Fab";
// import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { Slide } from '../components/Slide';






const data = [
    {
        image:"",
        title: "ACB Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",
       
        navlin:"Click here"

    },
    {
        image:"",
        title: "TP Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",
       
        navlin:"Click here"
    },
    {
        image:"",
        title: "AnBinh Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",
       
        navlin:"Click here"
    },
    {
        image:"",
        title: "NamA Bank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",
       
        navlin:"Click here"
    },
    {
        image:"",
        title: "SacomBank",

        text: " Some quick example text to build on the card title and make up the bulk of the card's content",
       
        navlin:"Click here"
    }
];

const Customer = () => {
    const ref = React.useRef(StackedCarousel);
    return (
        <div className='container-fluid'>
            <h4 className='text-center'> Top Company</h4>
            <div className="card">
                <div style={{ width: "100%", position: "relative" }}>
                    <ResponsiveContainer
                        carouselRef={ref}
                        render={(width, carouselRef) => {
                            return (
                                <StackedCarousel
                                    ref={carouselRef}
                                    slideComponent={Slide}
                                    slideWidth={450}
                                    carouselWidth={width}
                                    data={data}
                                    maxVisibleSlide={5}
                                    disableSwipe
                                    customScales={[1, 0.85, 0.7, 0.55]}
                                    transitionTime={450}
                                />
                            );
                        }}
                    />
                    {/* <Fab
                        className="card-button left"
                        size="small"
                        onClick={() => ref.current?.goBack()}
                    >
                        <KeyboardArrowLeftIcon style={{ fontSize: 30 }} />
                    </Fab>
                    <Fab
                        className="card-button right"
                        size="small"
                        onClick={() => ref.current?.goNext()}
                    >
                        <KeyboardArrowRightIcon style={{ fontSize: 30 }} />
                    </Fab> */}
                </div>
            </div>

        </div>
    )
}

export default Customer
