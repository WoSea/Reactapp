import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
// Components
import SiteTitle from '../../site-title';
const Main = () => (
    <Grid textAlign="center" verticalAlign="middle" columns="equal">
        <Grid.Column width={16}>
            <SiteTitle />
        </Grid.Column>
        <Grid.Column>
            <Segment>
                <h1>
                    Hello World!
</h1>
            </Segment>
        </Grid.Column>
    </Grid>
);
export default Main;