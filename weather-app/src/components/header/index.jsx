import React from "react";
import { Container, Image, Menu } from "semantic-ui-react";
import "./index.css";
const Header = () => (
  <Menu fixed="top" inverted stackable>
    <Container>
      <Menu.Item as="a" header href="https://creatureoftech.com">
        <div>
          <div>
            <Image
              className="logo-cot"
              size="mini"
              src="https://i1.wp.com/creatureoftech.com/wpcontent/uploads/2018/05/rob_welan_100x100.png"
            />
          </div>
          <div>
            <span className="title">Creature of Tech&nbsp;</span>
            <span className="sub-title">adventures in bits and bytes</span>
          </div>
        </div>
      </Menu.Item>
    </Container>
  </Menu>
);
export default Header;
