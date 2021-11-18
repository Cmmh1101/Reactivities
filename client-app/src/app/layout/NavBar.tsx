import React from "react";
import { Button, Container, Menu, MenuItem } from "semantic-ui-react";

interface Props {
  openForm: () => void;
}

export default function NavBar({ openForm }: Props) {
  return (
    <Menu inverted fixed="top">
      <Container>
        <MenuItem header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          ReactivitiesApp
        </MenuItem>
        <MenuItem name="Activities" />
        <MenuItem>
          <Button onClick={openForm} positive content="Create Activity" />
        </MenuItem>
      </Container>
    </Menu>
  );
}
