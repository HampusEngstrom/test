import React from 'react';
import styled from 'styled-components';
import {
  GitHubButton,
  TwitterButton,
  LinkedInButton,
} from './SocialMediaButtons';

const ListItems = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
  border: 1px solid gray;
  width: 180px;
  margin: 20px;
`;

const SocialMedia = styled.div``;

const Avatar = ({ src }) => (
  <div>
    <img src={src} alt="" />
  </div>
);

const ListItem = (props) => (
  <Item>
    <Avatar src={props.item.imagePortraitUrl} />
    <p>{props.item.name}</p>
    <SocialMedia>
      <GitHubButton url={props.item.gitHub} />
      <TwitterButton url={props.item.twitter} />
      <LinkedInButton url={props.item.linkedIn} />
    </SocialMedia>
  </Item>
);

const List = ({ items }) => {
  return (
    <ListItems>
      {items.map((listItem, index) => (
        <ListItem key={index} item={listItem}></ListItem>
      ))}
    </ListItems>
  );
};

export default List;
