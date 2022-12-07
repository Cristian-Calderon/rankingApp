import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";
import '../ratingStars/comments.css'


const colors={
    orange: "#FFBA5A",
    grey: "#a9a9a9"
};

export const Stars = () => {

const [currentValue, setCurrentValue]= useState(0);
const [hoverValue, setHoverValue]= useState(undefined);
const Rstars = Array(5).fill(0)

const handleClick = value =>{
    setCurrentValue(value)
}

const handleMouseOver = newHoverValue =>{
setHoverValue(newHoverValue)
}

const handleMouseLeave = () =>{
    setHoverValue(undefined)
}



  return (
    <div style={styles.container}>
     <div className='print-stars'>
        {Rstars.map((_, index)=>{
            return (
                <FaStar
                key={index}
                size={24}
                onClick={()=> handleClick(index +1 )}
                onMouseOver={()=> handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                    marginRight: 10,
                    marginTop: 0,
                    cursor: "pointer"
                }}
                />
            )
        })}
     </div>
    </div>
  )
}

const styles= {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
};


export default Stars;