import React from 'react';
import {Segment, Grid, Card, Icon, Image,Header} from 'semantic-ui-react';
import {HashRouter, Route, Link} from 'react-router-dom';

export default class Baker extends React.Component
{
  render()
  {
    return(
      <div style={{marginTop:"20px"}}>
      <Grid>
        <Grid.Row>
          <Grid.Column width={2} />
          <Grid.Column width={12}>
          <Segment inverted style={{backgroundColor:"#960728"}} >
            <Header as='h2' style={{
                textAlign: 'center',
                margin:'0px',
                border:'none'
              }}>
              <span className="headers">Farmer</span>
            </Header>
          </Segment>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>

        <Header as='h1' style={{textAlign:'center'}}><span className="headers" style={{color:'#960728'}}>Select a Product</span></Header>
        <br/>
        <br/>
        <Grid>
          <Grid.Row columns={3}>
            <Grid.Column>
              <center>
              <Link to="/bakerInfo"><Image src='https://meatpacking.info/wp-content/uploads/2016/11/A-raw-chicken-014.jpg' /></Link>
              <Header style={{color:'#960728'}}>Chicken</Header>
            </center>
            </Grid.Column>
            <Grid.Column>
              <center>
              <Image src='http://www.pngmart.com/files/1/Beef-Meat-PNG-Image.png' />
              <Header style={{color:'#960728'}}>Beef</Header>
            </center>
            </Grid.Column>
            <Grid.Column>
              <center>
              <Image src='https://cdn.shopify.com/s/files/1/0929/2732/products/Pork_Loin_Steaks_8bad2b84-5863-4dca-8dd4-725cf552e8f7_large.png?v=1501906010' />
              <Header style={{color:'#960728'}}>Pork</Header>
            </center>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}
