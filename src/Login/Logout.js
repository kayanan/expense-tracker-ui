import style from "./Login.module.css";
const Logout=(props)=>{

   return   <button className={style.logoutbutton} onClick={()=>props.logoutStatus()}>LOGOUT</button>
    }

export default Logout;