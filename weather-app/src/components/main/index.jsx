import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
// Components
import SiteTitle from '../../site-title';
import Weather from '../weather';
const Main = () => (
    <Grid textAlign="center" verticalAlign="middle" columns="equal">
        <Grid.Column width={16}>
            <SiteTitle />
        </Grid.Column>
        <Grid.Column>
            <Segment>
                <Weather />
            </Segment>
        </Grid.Column>
    </Grid>
); export default Main;