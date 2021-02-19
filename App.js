import React from "react";
import axios from "axios";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchList: [],
    };
  }

  componentDidMount() {
    this.click();
  }

  click = async () => {
    axios
      .get("https://dapi.kakao.com/v2/search/vclip?query=아이유", {
        headers: {
          Authorization: "KakaoAK a5fc3e3f9a996d2feed5eba9623048a9",
        },
      })
      .then((response) => {
        this.setState({
          searchList: response.data.documents,
        });
        console.log(this.state.searchList);
      });
  };
  render() {
    return (
      <div>
        {this.state.searchList.map((result, i) => {
          return (
            <a href={result.url}>
              <Card key={i}>
                <CardHeader
                  avatar={<Avatar aria-label="recipe">R</Avatar>}
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={result.title}
                  subheader="September 14, 2016"
                />
                <CardMedia image={result.thumbnail} title={result.title} />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    This impressive paella is a perfect party dish and a fun
                    meal to cook together with your guests. Add 1 cup of frozen
                    peas along with the mussels, if you like.
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <IconButton aria-label="show more">
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </a>
          );
        })}
      </div>
    );
  }











  /*
  //생성자 안에서 전역변수를 관리해줌
  constructor(props){
    super(props);
    this.state = {
      count: 100,
      isLoading: false,
    };
  }

  // state = {count: 100, isLoading: false}; 이렇게도 가능



  //화면이 뜨자마자 정보를 불러보자 - 이컨포넌트가 불러졌을때 alert뜨도록
  componentDidMount(){
    //window.alert("mount?");
  }

  //버튼을 click했을때 alert
  click = () => {
    //alert("click");
    //alert(this.state.count);
    this.setState((state) => {
      return {count: state.count + 1};
    }); 
  };

  click2 = () => {
    this.setState((state) => {
      return {count: state.count - 1};
    }); 
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>{this.state.count}</h2>
        <Button onClick={this.click} 
        variant="contained" 
        color="primary" 
        size="large" 
        //href="https://www.naver.com"
        >
          Primary
        </Button>

        <Button onClick={this.click2} 
        variant="contained" 
        color="primary" 
        size="large" 
        //href="https://www.naver.com"
        >
          minus
        </Button>
      </div>
    );
  } */
}

export default App;

//export default class App extends React.Component 가능