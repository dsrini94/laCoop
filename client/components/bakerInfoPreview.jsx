import React from 'react';
import {Image, Header, Divider, Grid,Segment,Button,Form} from 'semantic-ui-react';

export default class BakerInfoPreview extends React.Component
{
  render()
  {
    return(
      <div>
      <Grid>
        <Grid.Row style={{marginTop:'50px'}}>
        <Grid.Column width={2} />
          <Grid.Column width={7}>
              <Header as='h2'><span className="headers" style={{color:'#960728'}}>Verify Information</span></Header>
              <Form>

                <Form.Field>
                  <label >Product Name</label>
                  <label className="headers" style={{fontSize:'20px'}}>Organic Chicken</label>
                </Form.Field>
                <br/>
                <Form.Field>
                  <label >Butchered In</label>
                  <label className="headers" style={{fontSize:'20px'}}>Princeton, NJ</label>
                </Form.Field>
                <br/>

                <Form.Field>
                  <label >Address</label>
                  <label className="headers" style={{fontSize:'20px'}}>100, ABC Street, 08540</label>
                </Form.Field>
                <br/>

                {// <Form.Field>
                //   <label >Bake Date</label>
                //   <label className="headers" style={{fontSize:'20px'}}>7th Jan, 2018</label>
                // </Form.Field>
                // <br/>
              }
              <Form.Field>
                <label >Live Stock Received Date</label>
                <label className="headers" style={{fontSize:'20px'}}>{new Date(new Date().setDate(new Date().getDate()-4)).toISOString().substring(0,10)}</label>
              </Form.Field>
              <br />

              <Form.Field>
                <label >Slaughtered Date</label>
                <label className="headers" style={{fontSize:'20px'}}>{new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)}</label>
              </Form.Field>

              </Form>
          </Grid.Column>

          <Grid.Column width={7}>
          <br/>
          <br/>
          <Form>
            <Form.Field>
              <label >Packaged Date</label>
              <label className="headers" style={{fontSize:'20px'}}>{new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)}</label>
            </Form.Field>
            <br />
            <Form.Field>
              <label >Net Quantity</label>
              <label className="headers" style={{fontSize:'20px'}}>1500 Pieces</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Temparature</label>
              <label className="headers" style={{fontSize:'20px'}}>58°F</label>
            </Form.Field>
            <br/>

            <Form.Field>
              <label >Current Humidity</label>
              <label className="headers" style={{fontSize:'20px'}}>54%</label>
            </Form.Field>
            <br/>

          </Form>
          </Grid.Column>
          <Grid.Column width={2} />
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}
