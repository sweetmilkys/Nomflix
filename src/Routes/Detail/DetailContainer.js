import React from "react";
import DetailPresenter from "./DetailPresenter";
import { movieApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      loading: true,
      error: null,
      isMovie: pathname.includes("/movie/")
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
    try {
      result = isMovie
        ? await movieApi.movieDetail(parsedId)
        : await tvApi.tvDetail(parsedId);
    } catch (error) {
      this.setState({ error: "Can't find anything." });
    } finally {
      console.log(result.data);
      this.setState({ loading: false, result: result.data });
    }
  }

  render() {
    const { result, loading, error } = this.state;
    return <DetailPresenter result={result} loading={loading} error={error} />;
  }
}
