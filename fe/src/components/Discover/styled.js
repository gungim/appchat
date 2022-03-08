import styled from "styled-components";

export const PageWrap = styled.div`
  width: 100%;
  position: relative;
  background-color: #36393f;
`;

export const Scroller = styled.div`
  overflow: hidden scroll;
  padding: 16px;
  height: 100%;
  position: relative;
  min-height: 0;
  color: #fff;

  &::-webkit-scrollbar-track {
    border-radius: 2px;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    height: 4px;
    background-color: transparent;
  }
`;

export const SearchHeader = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 32px;
  min-height: 200px;
`;

export const HeaderImg = styled.img`
  display: inherit;
  border-radius: 8px;
  width: 100%;
  height: auto;
  z-index: 999;
`;

export const HeaderContentWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContent = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 720px;
  margin: 0 240px;
`;

export const SearchTitle = styled.h3`
  color: #fff;
  font-size: 24px;
  line-height: 30px;
  font-weight: 600;
`;

export const SearchSubTitle = styled.div`
  color: #fff;
  font-size: 16px;
  line-height: 20px;
  margin-top: 8px;
`;

export const SearchBox = styled.div`
  background-color: #fff;
  border: 1px solid transparent;
  border-radius: 4px;
  padding-right: 8px;
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 100%;
`;

export const SearchBoxInputWrapper = styled.div`
  flex: 1;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  color: #2e3338;
  width: 100%;
  &::placeholder {
    font-size: 16px;
    color: #e5e5e5;
  }
`;

export const GuildListSection = styled.div`
  width: 100%;
  margin-bottom: 32px;
  min-width: 580px;
`;

export const GuildList = styled.div`
  margin-top: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 320px;
  width: 100%;
  overflow: hidden;
  border-radius: 8px;
  position: relative;
  cursor: pointer;

  background-color: #292b2f;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out,
    background 0.2s ease-out, opacity 0.2s ease-in,
    -webkit-box-shadow 0.2s ease-out, -webkit-transform 0.2s ease-out;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
    background-color: #202225;
  }
`;

export const CardHeader = styled.div`
  max-height: 143px;
  height: 100%;
  position: relative;
  display: block;
  overflow: visible;
  margin-bottom: 32px;
`;

export const Splash = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  transform: scale(1.01) translateZ(0);
  width: 100%;
  height: 100%;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out,
    background 0.2s ease-out, opacity 0.2s ease-in,
    -webkit-box-shadow 0.2s ease-out, -webkit-transform 0.2s ease-out;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export const GuildIcon = styled.div`
  position: absolute;
  bottom: -21px;
  left: 12px;
  padding: 5px;
  border-radius: 8px;
  background-color: #292b2f;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out,
    background 0.2s ease-out, opacity 0.2s ease-in,
    -webkit-box-shadow 0.2s ease-out, -webkit-transform 0.2s ease-out;

  img {
    height: 40px;
    width: 40px;
    border-radius: 8px;
  }
`;

export const GuildInfo = styled.div`
  display: flex;
  align-items: stretch;
  padding: 0 16px 16px;
  transition: box-shadow 0.2s ease-out, transform 0.2s ease-out,
    background 0.2s ease-out, opacity 0.2s ease-in,
    -webkit-box-shadow 0.2s ease-out, -webkit-transform 0.2s ease-out;
`;

export const Loaded = styled.div`
  position: relative;
  &:hover ${GuildIcon} {
    background-color: #202225;
    transform: scale(1.02);
  }
  &:hover ${Splash} {
    transform: scale(1.02);
  }
  &:hover ${GuildInfo} {
    transform: scale(1.02);
  }
`;
