import React from "react";
import styled from "styled-components";
import LogoImage from "../../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import MovieCreationOutlinedIcon from "@mui/icons-material/MovieCreationOutlined";
import NewspaperOutlinedIcon from "@mui/icons-material/NewspaperOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
  height: 100vh;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 10px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 20px;
`;

const Img = styled.img`
  height: 25px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 10px 0px;
`;

const Divider = styled.hr`
  margin: 10px 0px;
  border: solid 0.5px ${({ theme }) => theme.soft};
`;

const LoginContainer = styled.div``;

const LoginButton = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: solid 1px #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

function Menu({ darkMode, setDarkMode }) {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={LogoImage}></Img>
          FooqTube
        </Logo>
        <MenuItem>
          <HomeIcon></HomeIcon>
          Home
        </MenuItem>
        <MenuItem>
          <ExploreOutlinedIcon></ExploreOutlinedIcon>
          Explore
        </MenuItem>
        <MenuItem>
          <SubscriptionsOutlinedIcon></SubscriptionsOutlinedIcon>
          Subscriptions
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <VideoLibraryOutlinedIcon></VideoLibraryOutlinedIcon>
          Library
        </MenuItem>
        <MenuItem>
          <HistoryOutlinedIcon></HistoryOutlinedIcon>
          History
        </MenuItem>
        <Divider></Divider>
        <LoginContainer>
          Sign in to like videos, comment, and subscribe.
          <LoginButton>
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
            SIGN IN
          </LoginButton>
        </LoginContainer>
        <Divider></Divider>
        <Title>BEST OF FooqTube</Title>
        <MenuItem>
          <LibraryMusicOutlinedIcon></LibraryMusicOutlinedIcon>
          Music
        </MenuItem>
        <MenuItem>
          <SportsBasketballOutlinedIcon></SportsBasketballOutlinedIcon>
          Sports
        </MenuItem>
        <MenuItem>
          <SportsEsportsOutlinedIcon></SportsEsportsOutlinedIcon>
          Gaming
        </MenuItem>
        <MenuItem>
          <MovieCreationOutlinedIcon></MovieCreationOutlinedIcon>
          Movies
        </MenuItem>
        <MenuItem>
          <NewspaperOutlinedIcon></NewspaperOutlinedIcon>
          News
        </MenuItem>
        <MenuItem>
          <LiveTvOutlinedIcon></LiveTvOutlinedIcon>
          Live
        </MenuItem>
        <Divider></Divider>
        <MenuItem>
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <OutlinedFlagIcon></OutlinedFlagIcon>
          Report
        </MenuItem>
        <MenuItem>
          <HelpOutlineOutlinedIcon></HelpOutlineOutlinedIcon>
          Help
        </MenuItem>
        <MenuItem onClick={() => setDarkMode((v) => (v = !v))}>
          <LightModeOutlinedIcon></LightModeOutlinedIcon>
          Light Mode
        </MenuItem>
      </Wrapper>
    </Container>
  );
}

export default Menu;
