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
     <h2>Rating Stars</h2>
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
                    marginTop: 20,
                    cursor: "pointer"
                }}
                />
            )
        })}
     </div>
    
     <div id="comment-box"></div>
     


    </div>
  )
}

const styles= {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop:10,
    },
    stars: {
        display: "flex",
        flexDirection: "row",
    },
    textarea:{
        border: "1px solid #a9a9a9",
        borderRdius: 5,
        padding: 10,
        margin: "20px 0",
        minHeight: 100,
        width: 300
    },
    textarea2:{
        border: "1px solid #a9a9a9",
        borderRdius: 5,
        padding: 10,
        margin: "10px 0",
        minHeight: 50,
        width: 300
    },
    button:{
        border: "1px solid a9a9a9",
        borderRadius: 5,
        width: 100,
        padding: 10,
    }
   
};


export default Stars;