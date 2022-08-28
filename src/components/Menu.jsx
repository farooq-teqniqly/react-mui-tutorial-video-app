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
  margin-top: 10px;
`;

const MenuItems = [
  {
    id: 1,
    text: "Home",
    icon: () => <HomeIcon></HomeIcon>,
  },
  {
    id: 2,
    text: "Explore",
    icon: () => <ExploreIcon></ExploreIcon>,
  },
  {
    id: 3,
    text: "Subscriptions",
    icon: () => <SubscriptionsIcon></SubscriptionsIcon>,
    addSeparator: true,
  },
  {
    id: 4,
    text: "Library",
    icon: () => <VideoLibraryIcon></VideoLibraryIcon>,
  },
  {
    id: 5,
    text: "History",
    icon: () => <HistoryIcon></HistoryIcon>,
    addSeparator: true,
  },
  {
    id: 6,
    icon: () => (
      <>
        <Login>
          Sign-in to like videos, comment, and subscribe.
          <Button>
            <AccountBoxIcon></AccountBoxIcon>SIGN IN
          </Button>
        </Login>
        <Hr></Hr>
      </>
    ),
    addSeparator: true,
  },

  {
    id: 7,
    text: "Music",
    icon: () => <LibraryMusicIcon></LibraryMusicIcon>,
  },
  {
    id: 8,
    text: "Sports",
    icon: () => <SportsBasketballIcon></SportsBasketballIcon>,
  },
  {
    id: 9,
    text: "Gaming",
    icon: () => <SportsEsportsIcon></SportsEsportsIcon>,
  },
  {
    id: 10,
    text: "Movies",
    icon: () => <MovieIcon></MovieIcon>,
  },
  {
    id: 11,
    text: "News",
    icon: () => <ArticleIcon></ArticleIcon>,
  },
  {
    id: 12,
    text: "Live TV",
    icon: () => <LiveTvIcon></LiveTvIcon>,
    addSeparator: true,
  },
  {
    id: 13,
    text: "Settings",
    icon: () => <SettingsIcon></SettingsIcon>,
  },
  {
    id: 14,
    text: "Report",
    icon: () => <FlagIcon></FlagIcon>,
  },
  {
    id: 15,
    text: "Help",
    icon: () => <HelpIcon></HelpIcon>,
  },
  {
    id: 16,
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
          <div key={item.id}>
            <Item>
              {item.icon()}
              {item.text}
            </Item>
            {item.addSeparator ? <Hr></Hr> : null}
          </div>
        ))}
      </Wrapper>
    </Container>
  );
}
