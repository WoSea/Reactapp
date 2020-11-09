import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, Icon, Image, List, Segment } from 'semantic-ui-react';
import './index.css';
const Footer = (props) => (
  <Segment inverted vertical>
    <Container textAlign="center">
      <Grid columns="1">
        <Grid.Row>
          <Grid.Column textAlign="center">
            <List horizontal inverted divided link>
              <List.Item
                as="a"
                href="#"
                onClick={(event) => props.getSupport(event, "support")}
              >
                Contact Us
              </List.Item>
              <List.Item
                as="a"
                href="https://creatureoftech.com/privacy-policy/"
              >
                &nbsp;Privacy Policy&nbsp;
              </List.Item>
              <List.Item as="a" href="https://creatureoftech.com/terms/">
                Terms
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="row-remove-padding">
          <Grid.Column textAlign="center">
            <List horizontal>
              <List.Item>Made with</List.Item>
              <List.Item>
                <Icon.Group size="large">
                  <Icon
                    name="heart"
                    color="red"
                    aria-label="love"
                    aria-describedby="love"
                    alt="love"
                  />
                </Icon.Group>
              </List.Item>
              <List.Item>using</List.Item>
              <List.Item>
                <Image
                  as="a"
                  inline
                  centered
                  className="custom-mini"
                  aria-label="Semantic UI React"
                  aria-describedby="Semantic UI React"
                  alt="Semantic UI React"
                  src="/images/logo-semantic-ui-react.png"
                  href="https://react.semantic-ui.com"
                  target="_blank"
                />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
Footer.propTypes = {
  getSupport: PropTypes.func.isRequired,
};
export default Footer;
