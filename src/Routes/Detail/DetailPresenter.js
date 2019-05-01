import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Poster from "Components/Poster";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
  margin-bottom: 30px;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 10px 0px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 10px;
`;

const VideoContainer = styled.div`
  padding-top: 56.25%;
  position: relative;
`;

const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const Recomend = styled.div`
  margin-bottom: 50px;
  padding-top: 25px;
`;

const DetailPresenter = ({ loading, error, result, isMovie, recommendation }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>
          {result.original_title ? result.original_title : result.original_name}{" "}
          | Nomflix
        </title>
      </Helmet>
      <Backdrop
        bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <Cover
          bgImage={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/noPosterSmall.png")
          }
        />
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time[0]} min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              <span role="img" aria-label="rating">
                {result.vote_average > 9
                  ? `⭐⭐⭐⭐⭐`
                  : result.vote_average >= 7
                  ? `⭐⭐⭐⭐★ `
                  : result.vote_average >= 5
                  ? `⭐⭐⭐★ ★ `
                  : result.vote_average >= 3
                  ? `⭐⭐★ ★ ★ `
                  : result.vote_average >= 1
                  ? `⭐★ ★ ★ ★ `
                  : `★ ★ ★ ★ ★ `}
              </span>
            </Item>
          </ItemContainer>
          <Overview>{result.overview}</Overview>
          <VideoContainer>
            {result.videos.results.length > 0 ? (
              <Video
                key={result.videos.results[0].id}
                src={`http://www.youtube.com/embed/${
                  result.videos.results[0].key
                }`}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            ) : (
              ""
            )}
          </VideoContainer>
        </Data>
      </Content>
      <Recomend>
        {recommendation && recommendation.length > 0 && (
          <Section title="Recommendations">
            {recommendation.map((item, index) =>
              index < 6 ? (
                <Poster
                  key={item.id}
                  id={item.id}
                  imageUrl={item.poster_path}
                  title={isMovie ? item.title : item.name}
                  rating={item.vote_average}
                  isMovie={isMovie}
                />
              ) : (
                ""
              )
            )}
          </Section>
        )}
      </Recomend>
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

DetailPresenter.prototype = {
  result: PropTypes.object
};

export default DetailPresenter;
