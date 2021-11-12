import React from "react";
import { Button, Form, FormInput, FormTextArea, Segment } from "semantic-ui-react";

export default function ActivityForm() {
    return (
        <Segment clearing>
            <Form>
                <FormInput placeholder="Title" />
                <FormTextArea placeholder="Description" />
                <FormInput placeholder="Category" />
                <FormInput placeholder="Date" />
                <FormInput placeholder="City" />
                <FormInput placeholder="Venue" />
                <Button floated="right" positive type="submit" content="submit" />
                <Button floated="right" type="button" content="Cancel" />
            </Form>
        </Segment>
    )
}