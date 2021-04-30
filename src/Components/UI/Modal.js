import { Fragment } from "react"
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css"

const Backdorp = (props) =>{
    return <div className={classes.backdorp} onClick={props.onClose} />;
}
const ModalOverlay = (props) =>{
    return <div className={classes.modal}>
        <div className={classes.content}>
            {props.children}
        </div>
    </div>
}
const protalEle = document.getElementById('overlays');

const Modal = (props) =>{
    return <Fragment>

        {
            ReactDOM.createPortal(<Backdorp onClose={props.onClose}/>,protalEle,)
        }
        {
            ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,protalEle)
        }
    </Fragment>
};
export default Modal;