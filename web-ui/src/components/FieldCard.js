import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImage, CardHeader, CardHeaderTitle, CardContent, Content,
  CardFooter, CardFooterItem, Image
} from 're-bulma';

import './FieldCard.css';

export default (props) => {
  const { id, name, description, image } = props.field;
  return(
    <Card>
      <CardHeader>
        <CardHeaderTitle>{name}</CardHeaderTitle>
      </CardHeader>
      <CardImage>
        <Image src={`http://localhost:3000/${image.url}`} ratio="is4By3"/>
      </CardImage>
      <CardContent>
        <Content>
          {description}
        </Content>
      </CardContent>
      <CardFooter>
        {props.children}
      </CardFooter>
    </Card>
  );
}
