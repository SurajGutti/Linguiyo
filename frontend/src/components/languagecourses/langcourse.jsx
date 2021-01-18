import React from 'react';
import './langcourse.css'

class LangCourse extends React.Component {
  constructor(props) {
    super(props);

    // const CardExampleCard = () => (
    //     <Card>
    //       <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    //       <Card.Content>
    //         <Card.Header>Matthew</Card.Header>
    //         <Card.Meta>
    //           <span className='date'>Joined in 2015</span>
    //         </Card.Meta>
    //         <Card.Description>
    //           Matthew is a musician living in Nashville.
    //         </Card.Description>
    //       </Card.Content>
    //       <Card.Content extra>
    //         <a>
    //           <Icon name='user' />
    //           22 Friends
    //         </a>
    //       </Card.Content>
    //     </Card>
    //   )
  }

  render() {
    return (
      <div class="main">
        <br/>
        <br/>
        <h1 class="ui block header" align="center">WELCOME!</h1>
        <div class="vid-border">
          <iframe id="vid" width="500" height="350" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"></iframe>
        </div>
        <a href="#" class="booknowbutton">Buy Now!</a>
        <div class="ui two column grid">
        <div class="row">
          <div class="column">
            {/* <div class="card"> */}
              <div class="image">
                <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" width="750" height="750"/>
              </div>
            {/* </div> */}
          </div>
          <div class="column">
            <div class="ui items">
              <div class="item">
              <div class="content" align="center">
                <h1 class="ui header">Kristy</h1>
                <div class="meta">
                  <div class="extra content">
                    <span class="date"><b>Occupation: </b>Teacher</span><br></br>
                    <span class="date"><b>From: </b>Mongolia</span><br></br>
                    <span class="date"><b>Interests: </b>Fencing</span>
                  </div>
                </div>
                <div class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida dictum fusce ut placerat orci. Purus sit amet volutpat consequat mauris nunc congue nisi vitae. Lacinia at quis risus sed vulputate. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Viverra aliquet eget sit amet tellus cras adipiscing enim eu. Velit dignissim sodales ut eu sem integer. Diam donec adipiscing tristique risus nec. Elementum integer enim neque volutpat ac tincidunt vitae semper. Purus ut faucibus pulvinar elementum integer enim neque.
                </div>
              </div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
          {/* <div class="ui row"> */}
            {/* <div class="five wide column">
              
            </div>
            <div class="five wide column">
              
            </div> */}
          {/* </div> */}
        </div>
        <br/>
      </div>
    )
  }
}


export default LangCourse;
