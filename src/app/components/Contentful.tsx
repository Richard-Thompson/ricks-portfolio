import React from "react";
import PropTypes from "prop-types";
import { createClient } from "contentful";

// tslint:disable-next-line:no-any
let client: any;

if (
  process.env.REACT_APP_CONTENTFUL_SPACE_ID &&
  process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
) {
  client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
  });
}

export interface ContentfulProps {
  query: Object;
  render: Function;
}

export interface ContentfulState {
  items?: object;
  query: object;
  error?: Error | null;
}

export default class Contentful extends React.Component<
  ContentfulProps,
  ContentfulState
> {
  // make the query for the SDK
  // and the render function required
  static propTypes = {
    query: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
  };

  // set default state for the data to be fetched
  // and possible errors
  constructor(props: ContentfulProps) {
    super(props);
    this.state = {
      error: null,
      items: [],
      query: this.props.query
    };
  }

  componentDidMount() {
    // make the API call
    client
      .getEntries(this.state.query)
      .then(
        (items: object): void => {
          this.setState({
            items
          });
        }
      )
      .catch(
        (error: Error): void => {
          this.setState({
            error
          });
        }
      );
  }

  render() {
    // return and render the function
    // that was passed in via `render` prop
    return this.props.render({
      error: this.state.error,
      items: this.state.items
    });
  }
}
