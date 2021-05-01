import { Fragment } from "react"
import mealaImage from '../../asstes/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>ReacteMaels</h1>
            </header>
            <HeaderCartButton  onClick={props.onShowCart} />
            <div className={classes['main-image']}>
                <img src={mealaImage} alt="A table full of delicious food" />
            </div>  
      
    </Fragment>
        )
}



export default Header
