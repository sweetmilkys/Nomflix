import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/"),
      result: null,
      recommendation: null
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let recommendation = null;
    try {
      result = isMovie
        ? await movieApi.movieDetail(parsedId)
        : await tvApi.tvDetail(parsedId);
      recommendation = isMovie
        ? await movieApi.recommendation(parsedId)
        : await tvApi.recommendation(parsedId);
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({
        loading: false,
        result: result.data,
        recommendation: recommendation.data.results
      });
    }
  }

  render() {
    const { loading, error, result, isMovie, recommendation } = this.state;
    return (
      <DetailPresenter
        loading={loading}
        error={error}
        result={result}
        isMovie={isMovie}
        recommendation={recommendation}
      />
    );
  }
}
