import React from 'react';
import styled from "styled-components";
import {Col, Row} from "../Layout";
import NewPost from "./NewPost";
import Tweet from "./Tweet";

const Text = styled.p`
    font-weight: 800;
    font-size: 19px;
`;

const TimelineColumn = styled(Col)`
    width: 598px;
`;

const TitleWrapper = styled.div`
    border-right: 1px solid #37444c;
    border-bottom: 1px solid #37444c;
    padding: 10px 15px;
    cursor: pointer;
`;

const HeaderRow = styled(Row)`
    justify-content: space-between;
    align-items: center;
`;

const SVG = styled.svg`
    width: 21.1px;
`;

const StarA = styled.div`
    padding: 10px;
    margin: 0;
    cursor: pointer;
    border-radius: 50%;
    :hover {
        background-color: #192D40;
    }
`;

const Home = () => {
    return (
        <>
            <TimelineColumn>
                <TitleWrapper>
                    <HeaderRow>
                        <Text>Home</Text>
                        <StarA>
                            <SVG aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star"
                                 role="img" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path fill="#1da1f2"
                                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </SVG>
                        </StarA>
                    </HeaderRow>
                </TitleWrapper>
                {/*Post Area*/}
                <NewPost/>
                {/*Tweets Area*/}
                <Tweet/>
            </TimelineColumn>
            <Col>
            </Col>
        </>
    )
};

export default Home;