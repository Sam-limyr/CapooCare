import React, { useEffect } from 'react'
import { Card, Grid, ListItem, ListItemAvatar, ListItemText, Avatar, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import ProfilePic from "./ProfilePic"
import { makeStyles } from '@material-ui/core/styles';
import petImg from "../../assets/userProfile/pet.png"
import { useDispatch, useSelector } from 'react-redux';
import { listPets } from "../../actions/userActions";
import AddPet from "../AddPet";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: 30,
        maxHeight: 600
    },
    petAvatar: {
        margin: 10
    },
    modal: {
        width: "40%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    petName: {
        textAlign: "center"
    }
}));
const PetList = () => {
    const [open, setOpen] = React.useState(false);
    const [petDetails, setPetDetails] = React.useState({});
    const openModal = () => {
        setOpen(true);
    }
    
    const closeModal = () => {
        setOpen(false);
        setPetDetails({});
    }
    const clickOnPet = (name, type, age, petReq) => {
        openModal();
        setPetDetails({
            petName: name,
            petType: type,
            petAge: age,
            petRequirements: petReq
        });

    }

    const petList = useSelector(state => state.petList);
    const {pets, loading, error} = petList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listPets());
        console.log(pets);
    })

    const classes = useStyles();
    return loading ? <div> Loading ... </div> : error ? <div>{error}</div> : (
        <Card className={classes.root}>
            <h2> Pets Owned </h2>
            <Grid container>
                {pets.map((pet) => {
                    return(
                        <Grid item className={classes.petAvatar} onClick={() => clickOnPet(pet.petname, pet.pettype, pet.petage, pet.requirements)}>
                            <ProfilePic img={petImg} href="#"/>
                            <h6 className={classes.petName}> {pet.petname} </h6>
                        </Grid>)
                })}
            </Grid>
            <ListItem button onClick={openModal}>
                    <ListItemAvatar>
                        <Avatar>
                            <AddIcon/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Click to add new pet"
                    />
            </ListItem>
            <Modal
                open={open}
                onClose={closeModal}>
                <Card className={classes.modal}>
                    <AddPet parentData={petDetails}/>
                </Card>
            </Modal>
        </Card>
    )
}

export default PetList
