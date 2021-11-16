import React from "react";
import { Grid, GridColumn, List, ListItem } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
}

export default function ActivityDashboard({activities, selectedActivity, selectActivity, cancelSelectedActivity}: Props) {
    return (
        <Grid>
            <GridColumn width='10'>
                <ActivityList activities={activities} selectActivity={selectActivity} />
            </GridColumn>
            <GridColumn width="6">
                {selectedActivity &&
                <ActivityDetails activity={selectedActivity} cancelSelectedActivity={cancelSelectedActivity} />}
                <ActivityForm />
            </GridColumn>
        </Grid>
    )
}