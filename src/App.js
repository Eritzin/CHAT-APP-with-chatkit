import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import "./App.css";
import Rooms from "./components/Rooms/rooms.js";
import Room from "./components/Rooms/room.js";
import Messages from "./components/Messages/Messages.js";
import Users from "./components/Users/Users.js";
import Input from "./components/Input.js";
import chatManager from "./data/chatManager";

class App extends React.Component {
  state = {
    messages: [],
    currentRoomId: false,
    currentUser: false
  };

  componentDidMount = () => {
    this.initChat();
  };

  initChat = async () => {
    await chatManager
      .connect()
      .then(currentUser => {
        const room = currentUser.rooms[0];
        this.setState({currentRoomId:room.id})
        // console.log("currentUser", currentUser);
        this.subscribeToRoom(currentUser, room);
      })
      .catch(err => {
        console.log("Error on connection", err);
      });
  };

  renderRooms = () => {
    const rooms = this.state.currentUser.rooms;
    const displayRooms = [];
    rooms &&
      rooms.forEach(i => {
        displayRooms.push(
          <Rooms handleActiveRoom={this.handleActiveRoom} obj={i} key={i.id}>
            <Room roomId={this.state.currentRoomId} key={i.id} name={i.name} id={i.id} />
          </Rooms>
        );
      });
    return displayRooms;
  };
  handleActiveRoom = room => {
    this.subscribeToRoom(this.state.currentUser, room);
    this.setState({currentRoomId:room.id})
    

  };
  subscribeToRoom = async (currentUser, room) => {
    this.setState({
      messages: []
    });

    // console.log("currentUser", currentUser);

    await currentUser.subscribeToRoom({
      roomId: room.id,
      hooks: {
        onMessage: message => {
          this.setState({
            messages: [...this.state.messages, message],
            currentUser,
            activeUsers: room.users
          });
        }
      }
    });
  };

  render() {
    return (
      <Container className="App">
        <Container className="header">
          <Row>
            <Col sm={12}> CHATROOM</Col>
          </Row>
        </Container>

        <Container className="main">
          <Row>
            <Col sm={3} className="rooms">
              <Card>
                <Card.Header className="cardHeader">Rooms</Card.Header>
                <ListGroup variant="flush">{this.renderRooms()}</ListGroup>
              </Card>
            </Col>
            <Col sm={6} className="center messages">
                <ul className="list-group" >
                  <Messages messages={this.state.messages} />
                </ul>
             
            </Col>
            <Col sm={3} className="onlineStatus">
           
              {this.state.activeUsers && (
                <Card>
                <Card.Header className="cardHeader">Users</Card.Header>
                
                <Users
                  activeUsers={this.state.activeUsers} 
                />
                </Card>
              )}
           
            </Col>
          </Row>
        </Container>
        <Container className="footer">
          <Row className="input">
            <Col sm={12}>
              <Input
                subscribeToRoom={this.subscribeToRoom}
                currentRoomId={this.state.currentRoomId}
                currentUser={this.state.currentUser}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default App;
