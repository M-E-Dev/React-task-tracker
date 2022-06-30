import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, toggleShow, showAddTask }) => {
    
    const handleClick = () => {
        
    }

  return (
    <div className="header">

      <h1>{title}</h1>

      <Button 
      handleClick={handleClick} 
      color={showAddTask ? "DarkKhaki" : "YellowGreen"} 
      text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
      toggleShow={toggleShow}
      />

    </div>
  );
};

// Defaultprops gibi burada da verilebilir
// const Header = ({title = "task tracker from props"}) => {

// Eğer Props gelmezse buradakini kullanır...
// Header.defaultProps = {
//     title: "task tracker from defaultprops"
// }

// Gelecek olan propun tipini belirler
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
