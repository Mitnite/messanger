import React, {FC} from "react";
import {Avatar, Card, Chip} from "@mui/material";
import {useAuth} from "../../providers/UseAuth";
import {signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom";
import Button from "../../ui/Button/Button";
import styles from "./User.module.css";



const User: FC = () => {
  let navigate = useNavigate();

  const {ga, currentUser} = useAuth()

  const handleClick = (linkTo: string) => {
    navigate(linkTo)
  }

  const signOutHandler = async () => {
    handleClick('/')
    await signOut(ga)
  }

  return (
      <div>
        <Chip
          avatar={<Avatar alt='' src={currentUser?.avatar}/>}
          variant='outlined'
          label={'Профиль'}
          sx={{marginRight: '10px', cursor: 'pointer', border: 'none', color: 'white', fontSize: '16px'}}
          onClick={() => handleClick(`/profile/${currentUser?._id}`)}
        />
        <button onClick={signOutHandler}
                className={styles.Button}>
          Выйти
        </button>
        {/*<Button text={'Выйти'}  />*/}
      </div>
  )
}
export default User
