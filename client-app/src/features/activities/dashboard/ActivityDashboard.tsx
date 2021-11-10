import React from "react";
import { Grid, GridColumn, List, ListItem } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[];
}

export default function ActivityDashboard(props: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
            <List>
                {props.activities.map(activity => (
                    <ListItem key={activity.id}>{activity.title}</ListItem>
                ))}
            </List>
            </GridColumn>
        </Grid>
    )
}