import React from "react";
import styled from "styled-components";
import LogoImage from "../img/logo.PNG";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MovieIcon from "@mui/icons-material/Movie";
import ArticleIcon from "@mui/icons-material/Article";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SettingsIcon from "@mui/icons-material/Settings";
import FlagIcon from "@mui/icons-material/Flag";
import HelpIcon from "@mui/icons-material/Help";
import LightModeIcon from "@mui/icons-material/LightMode";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const Container = styled.div`
  flex: 1;
  background-color: black;
  height: 100vh;
  color: white;
  font-size: 14px;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 8px 0px;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid #373737;
`;

const Login = styled.div``;
const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radiuus: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`;

const MenuItems = [
  {
    text: "Home",
    icon: () => <HomeIcon></HomeIcon>,
  },
  {
    text: "Explore",
    icon: () => <ExploreIcon></ExploreIcon>,
  },
  {
    text: "Subscriptions",
    icon: () => <SubscriptionsIcon></SubscriptionsIcon>,
    addSeparator: true,
  },
  {
    text: "Library",
    icon: () => <VideoLibraryIcon></VideoLibraryIcon>,
  },
  {
    text: "History",
    icon: () => <HistoryIcon></HistoryIcon>,
    addSeparator: true,
  },
  {
    text: "Music",
    icon: () => <LibraryMusicIcon></LibraryMusicIcon>,
  },
  {
    text: "Sports",
    icon: () => <SportsBasketballIcon></SportsBasketballIcon>,
  },
  {
    text: "Gaming",
    icon: () => <SportsEsportsIcon></SportsEsportsIcon>,
  },
  {
    text: "Movies",
    icon: () => <MovieIcon></MovieIcon>,
  },
  {
    text: "News",
    icon: () => <ArticleIcon></ArticleIcon>,
  },
  {
    text: "Live TV",
    icon: () => <LiveTvIcon></LiveTvIcon>,
    addSeparator: true,
  },
  {
    text: "Settings",
    icon: () => <SettingsIcon></SettingsIcon>,
  },
  {
    text: "Report",
    icon: () => <FlagIcon></FlagIcon>,
  },
  {
    text: "Help",
    icon: () => <HelpIcon></HelpIcon>,
  },
  {
    text: "Light Mode",
    icon: () => <LightModeIcon></LightModeIcon>,
  },
];

export default function Menu() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImage}></Img>
          Video App
        </Logo>
        {MenuItems.map((item) => (
          <div key={item.text}>
            <Item>
              {item.icon()}
              {item.text}
            </Item>
            {item.addSeparator ? <Hr></Hr> : null}
            {item.text === "History" ? (
              <>
                <Login>
                  Sign-in to like videos, comment, and subscribe.
                  <Button>
                    <AccountBoxIcon></AccountBoxIcon>SIGN IN
                  </Button>
                </Login>
                <Hr></Hr>
              </>
            ) : null}
          </div>
        ))}
      </Wrapper>
    </Container>
  );
}
