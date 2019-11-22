import React, { useState, useEffect } from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({

})

const Carousel = (props) => {
    const classes = useStyles()
    const [carouselIndex, setCarouselIndex] = useState(0);
    const [current, setCurrent] = useState({});

    useEffect(() => {
        setCurrent(props.items[carouselIndex])
    })

    const nextItem = () => {
        if (carouselIndex >= props.items.length - 1) {
            setCarouselIndex(0)
        }
        else {
            setCarouselIndex(carouselIndex + 1)
        }
        setCurrent(props.items[carouselIndex])
    }

    const prevItem = () => {
        if ( carouselIndex > 0) {
            setCarouselIndex(carouselIndex - 1)
        }
        else {
            setCarouselIndex(props.items.length - 1)
        }
        setCurrent(props.items[carouselIndex])
    }

    return (
        <div>
            <ChevronLeftIcon className={classes.prevItem} onClick={prevItem} />
            <img className={classes.carouselImage} src={current.image} />
            <h1>{current.name}</h1>
            <ChevronRightIcon className={classes.nextItem} onClick={nextItem} />
        </div>
    )
}

export default Carousel;