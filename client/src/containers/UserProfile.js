import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from 'components/Grid/GridContainer.js'
import GridItem from 'components/Grid/GridItem.js'
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js"
import CardBody from "components/Card/CardBody.js"
import CardAvatar from "components/Card/CardAvatar.js"

import avatar from "assets/img/faces/profile.png";
import styles from "assets/jss/material-dashboard-react/components/typographyStyle.js";


const useStyles = makeStyles(styles);

const UserProfile = () => {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={8}>
                    <Card profile>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={4}>
                                <CardAvatar profile>
                                    <a href="#">
                                        <img src={avatar} alt="..." />
                                    </a> 
                                </CardAvatar>
                            </GridItem>
                            <GridItem>
                                <CardBody profile>
                                    <h2>Pet Owner</h2>
                                    <p>Insert some bio here</p>
                                </CardBody>
                            </GridItem>
                        </GridContainer>
                        
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    )
}

export default UserProfile
