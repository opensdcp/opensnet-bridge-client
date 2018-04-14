import React, { Component } from "react";
import { Tool } from "../Tool";

// Docs
import { DocsSection } from "../../../components/docs/DocsSection";

// Components
import { Button } from "../../button/Button";

export const ToolDocs = () => (
  <DocsSection
    title="Tool"
    id="tool"
    demos={<ToolDemo />}
    code={code}
    api={[
      {
        title: "children (node[])",
        description: "Components of the Tool."
      },
      {
        title: "equal (optional) (bool)",
        description: "Components of the Tool are equally distributed."
      },
      {
        title: "divided (optional) (bool)",
        description:
          "Components of the Tool are distributed with maximum distance to each other."
      },
      {
        title: "...otherProps",
        description: "Other props that should be passed to the Tool."
      }
    ]}
  />
);

const code = `
class ToolDemo extends Component {
  onUpvote = () => console.log("Upvoting.");

  onDownvote = () => console.log("Downvoting.");

  onComment = () => console.log("Commenting.");

  onBookmark = () => console.log("Bookmarking.");

  onShare = () => console.log("Sharing.");

  render() {
    const { onUpvote, onDownvote, onComment, onBookmark, onShare } = this;

    return (
      <Tool divided>
        <Tool>
          <Button value="Upvote" context="positive" onClick={onUpvote} />
          <Button value="Downvote" context="negative" onClick={onDownvote} />
        </Tool>
        <Tool>
          <Button value="Comment" onClick={onComment} />
          <Button value="Bookmark" onClick={onBookmark} />
          <Button value="Share" onClick={onShare} />
        </Tool>
      </Tool>
    );
  }
}
`;

class ToolDemo extends Component {
  onUpvote = () => console.log("Upvoting.");

  onDownvote = () => console.log("Downvoting.");

  onComment = () => console.log("Commenting.");

  onBookmark = () => console.log("Bookmarking.");

  onShare = () => console.log("Sharing.");

  render() {
    const { onUpvote, onDownvote, onComment, onBookmark, onShare } = this;

    return (
      <Tool divided>
        <Tool>
          <Button value="Upvote" context="positive" onClick={onUpvote} />
          <Button value="Downvote" context="negative" onClick={onDownvote} />
        </Tool>
        <Tool>
          <Button value="Comment" onClick={onComment} />
          <Button value="Bookmark" onClick={onBookmark} />
          <Button value="Share" onClick={onShare} />
        </Tool>
      </Tool>
    );
  }
}
