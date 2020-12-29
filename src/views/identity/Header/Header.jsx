/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { object } from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import { ParagraphText } from '../../../components/_shared/Text';

const Header = ({ data }) => (
  <>
    <Row>
      <Col xs="12" sm="3">
        <Image src={data.attachments[0].attachment_path} fluid />
      </Col>
      <Col>
        <ParagraphText family="Raleway" width="12pt" height="1.25" color="#808080">
          {data.title}
        </ParagraphText>
        {
          data.elements.map((element) => (
            <>
              {element.type === 'header-element' && element.content.map((content) => (
                <ParagraphText key={content} family="Raleway" width="18pt" height="1.25" weight="700" color="#555">
                  {content}
                </ParagraphText>
              ))}
            </>
          ))
        }
      </Col>
    </Row>
    <hr />
  </>
);

Header.propTypes = {
  data: object.isRequired,
};

export default Header;
