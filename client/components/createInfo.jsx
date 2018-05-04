import React from 'react';
import {
  Button,
  Comment,
  Form,
  Header,
  Segment,
  Grid,
  Icon,
  Search,
  Divider,
  Input,
  Label,
  Menu,
  Image,
  Select,
  Radio,
  TextArea,
  Dropdown,
  List,
  Modal
} from 'semantic-ui-react';

var n =  new Date();
var y = n.getFullYear();
var m = n.getMonth() + 1;
var d = n.getDate();

const countryOptions = [
  {
    key: 'U',
    text: 'USA',
    value: 'USA'
  }, {
    key: 'I',
    text: 'India',
    value: 'India'
  }
]
const stateOptions = [
  {
    key: 't',
    text: 'Texas',
    value: 'Texas'
  }, {
    key: 'b',
    text: 'Bengaluru',
    value: 'Bengaluru'
  }
]

const ingredientOptions = [
  {
    key: 'br',
    text: 'Polyester',
    value: 'Polyester'
  }, {
    key: 'm',
    text: 'Cotton',
    value: 'Cotton'
  },
]
export default class CreateInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open:false,
      open1:false,
      activeItem: 'create',
      activeItem2: 'bread',
      textValue:'',
      ingredients: [
        {
          key: 'br',
          text: 'Bread',
          value: 'Bread'
        }, {
          key: 'm',
          text: 'Milk',
          value: 'Milk'
        }, {
          key: 'ye',
          text: 'Yeast',
          value: 'Yeast'
        }
      ]
    }
  }

  handleModal(value)
  {
    console.log(value);
    this.setState({open:true,textValue:value})
    console.log(this.state.textValue);
  }
  handleIngredients(e, {value}) {
    alert(value);
  }

  render() {
    var value = this.state
    return (<div>
      <Grid style={{
          marginLeft: '4%'
        }}>
        <Grid.Row>
          <Grid.Column width={2}/>
          <Grid.Column width={14}>
            <br/>
            <Header as='h2'>
              <span className="headers" style={{
                  color: '#960728'
                }}>Chicken Information</span>
            </Header>
            <center></center>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
        <Grid.Row >
          <Grid.Column width={2}/>
          <Grid.Column width={6}>
            <Form>
              <Form.Field>
                <label >Product Name</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='Organic Chicken'/>
              </Form.Field>

              <Form.Field>
                <label >Butchered In</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='Princeton, NJ'/>
              </Form.Field>

              <Form.Field>
                <label >Address</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='100, ABC Street, 08540'/>
              </Form.Field>





              <Form.Field>
                <label >Ingredients</label>
                <List>
                  <List.Item onClick={this.handleModal.bind(this,'ING3477488')}>
                    <Image avatar="avatar" src='https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2011/12/28/1325095851271/A-battery-hen-008.jpg?w=700&q=55&auto=format&usm=12&fit=max&s=efa787bf53f85bb942176f59aa6715ce'/>
                    <List.Content>
                      <List.Header>Live Stock</List.Header>
                    </List.Content>
                  </List.Item>
              {/* <List.Item onClick={this.handleModal.bind(this,'ING1225665')}>
                <Image avatar="avatar" src='https://media.istockphoto.com/vectors/cotton-blossom-illustration-vector-id911801478?k=6&m=911801478&s=612x612&w=0&h=ybTF5ZxJQgKFALuWKTH6r33xiiMffZ6HPWo6NmUarFM='/>
                <List.Content>
                  <List.Header>Cotton</List.Header>
                </List.Content>
              </List.Item> */}
                </List>
              </Form.Field>

              <Form.Field>
                <label >Live stock received Date</label>
                <input type='date' value={new Date(new Date().setDate(new Date().getDate()-4)).toISOString().substring(0,10)}/>
              </Form.Field>

            </Form>
          </Grid.Column>
          <Grid.Column width={6}>
            <Form>

              <Form.Field>
                <label >Slaughtered Date</label>
                <input type='date' value= {new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)}/>
              </Form.Field>

              <Form.Field>
                <label >Packaged Date</label>
                <input type='date' value={new Date(new Date().setDate(new Date().getDate()-1)).toISOString().substring(0,10)}/>
              </Form.Field>

              <Form.Field>
                <label >Net Quantity</label>
                <input defaultValue="1500 Pieces"/>
              </Form.Field>

              <Form.Field>
                <label >Current Temperature</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='58°F'/>
              </Form.Field>

              <Form.Field>
                <label >Current Humidity</label>
                <Input focus="focus" placeholder='Product Name' defaultValue='54%'/>
              </Form.Field>

            </Form>
          </Grid.Column>
          <Grid.Column width={2}/>
        </Grid.Row>
      </Grid>
      <Modal open={this.state.open} basic size='small'>
    <Modal.Content>
      <center>
      <span className="headers">Enter Product ID</span>
      <br/>
      <br/>
      <Input placeholder='enter Product id' defaultValue={this.state.textValue}/>
      <br/>
      <br/>
       <Divider horizontal>Or</Divider>
       <span className="headers">Scan the Product</span>
       <br/>
       <br/>
      <Icon name="search" size="massive"/>
      </center>
    </Modal.Content>
    <Modal.Actions>
      <Button color='green' inverted onClick={()=>{this.setState({open1:true,open:false})}}>
        <Icon name='checkmark' /> Submit
      </Button>
    </Modal.Actions>
  </Modal>

  <Modal open={this.state.open1} basic size='small'>
<Modal.Content>
  <center>
    <Grid>
      <Grid.Row columns={5}>
        <Grid.Column >
          <Form>
          <Form.Field>
            <label style={{color:'white'}}>Product ID</label>
            <label className="headers" style={{fontSize:'17px',color:'white'}}>ING3477488</label>
          </Form.Field>
        </Form>
          <br/>
        </Grid.Column>
        <Grid.Column >
          <Form>
          <Form.Field>
            <label style={{color:'white'}}>Raised In</label>
            <label className="headers" style={{fontSize:'17px',color:'white'}}>Canton, OH</label>
          </Form.Field>
          <br/>


          </Form>
        </Grid.Column>
        <Grid.Column >
          <Form>
          <Form.Field>
            <label style={{color:'white'}}>Caged Date</label>
            <label className="headers" style={{fontSize:'17px',color:'white'}}>{new Date(new Date().setDate(new Date().getDate()-4)).toISOString().substring(0,10)}</label>
          </Form.Field>
          {/* <br/>
          <Form.Field>
            <label >Harvest Date</label>
            <label className="headers" style={{fontSize:'17px',color:'white'}}>15th Aug, 2017</label>
          </Form.Field> */}
          {
          //   <Form.Field>
          //   <label >Best Before Date</label>
          //   <label className="headers" style={{fontSize:'17px',color:'white'}}>9th Sep, 2018</label>
          // </Form.Field>
        }
          </Form>
        </Grid.Column>
        <Grid.Column >
          <Form>
            <Form.Field>
              <label style={{color:'white'}}>Chicken Type</label>
              <label className="headers" style={{fontSize:'17px',color:'white'}}>Organic Chicken</label>
            </Form.Field>
            <br/>
          {/* <Form.Field>
            <label>Product Name</label>
            <label className="headers" style={{fontSize:'17px',color:'black'}}>Chino</label>
          </Form.Field>
          <br/> */}

          {
          //   <Form.Field>
          //   <label >StorageTemp</label>
          //   <label className="headers" style={{fontSize:'17px',color:'black'}}>59°F (15°C)</label>
          // </Form.Field>
        }
          <br/>
          {
          //   <Form.Field>
          //   <label >Storage Humidity</label>
          //   <label className="headers" style={{fontSize:'17px',color:'black'}}>50-70% (Relative Humidity)</label>
          // </Form.Field>
        }

          </Form>
        </Grid.Column>
          
          <Grid.Column>
            <Form>
            <Form.Field>
              <label style={{color:'white'}}>Farm Name</label>
              <label className="headers" style={{fontSize:'17px',color:'white'}}>Eagle Farms , Ames, IA</label>
            </Form.Field>
            </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  <span className="headers" style={{marginTop:'50px'}}>Product Information have been added to the list</span>
  <span className='headers' style={{color:'black'}}>Blockchain Address</span><br/>
  </center>
</Modal.Content>
<Modal.Actions>
  <Button color='green' inverted onClick={()=>{this.setState({open1:false})}}>
    <Icon name='checkmark' /> Done
  </Button>
</Modal.Actions>
</Modal>

    </div>);
  }
}
