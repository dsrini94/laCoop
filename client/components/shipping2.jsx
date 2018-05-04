import React from 'react';
import { Accordion, Icon,Grid,Form} from 'semantic-ui-react';

export default class Shipping2 extends React.Component
{
  constructor()
  {
    super();
    this.state={activeIndex:1}
  }

  handleClick()
  {
    if(this.state.activeIndex == 1)
          this.setState({activeIndex:0})
    else
    if(this.state.activeIndex == 0)
          this.setState({activeIndex:1})
  }

  render()
  {
    return(
      <Accordion styled fluid>
        <Accordion.Title active={this.state.activeIndex === 0} index={0} onClick={this.handleClick.bind(this)}>
          <Icon name='dropdown' />
          DC-Store
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0} >
          <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
            <Form>

            <Form.Field>
              <label >Shipment ID (DC-Store)</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>HK4481N</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Logistics Partner Name</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>Tysen Chicken Logistics</label>
            </Form.Field>
            <br/>



              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>
            <Form.Field>
              <label >DC (Pick-up) Location</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>Trenton, NJ</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Store (Drop) Location</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>Miami, FL</label>
            </Form.Field>

            <br/>

              </Form>
            </Grid.Column>

            <Grid.Column width={4}>
            <Form>

              <Form.Field>
                <label >DC Pick-up - Date</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>{new Date(new Date().setDate(new Date().getDate()+1)).toISOString().substring(0,10)}</label>
              </Form.Field>

              <br/>
              <Form.Field>
                <label >DC Pick-up - Time</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>2:30:00 PM</label>
              </Form.Field>
              <br/>
              <Form.Field>
                <label >Store Drop -  Date</label>
                <label className="headers" style={{fontSize:'17px',color:'black'}}>{new Date(new Date().setDate(new Date().getDate()+2)).toISOString().substring(0,10)}</label>
              </Form.Field>


              </Form>
            </Grid.Column>
            <Grid.Column width={4}>
            <Form>
            <Form.Field>
              <label >Vehicle</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>XIJ 2THJ</label>
            </Form.Field>
            <br/>
            <Form.Field>
              <label >Store Drop -  Time</label>
              <label className="headers" style={{fontSize:'17px',color:'black'}}>03:40:00 PM</label>
            </Form.Field>
            {// <Form.Field>
            //   <label >Average Temperature Maintained </label>
            //   <label className="headers" style={{fontSize:'17px',color:'black'}}>50°F (10°C)</label>
            // </Form.Field>
            // <br/>
            // <Form.Field>
            //   <label >Average Humidity Maintained</label>
            //   <label className="headers" style={{fontSize:'17px',color:'black'}}>60% (Relative Humidity)</label>
            // </Form.Field>
          }

              <br/>

              </Form>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Accordion.Content>
      </Accordion>
    )
  }
}
