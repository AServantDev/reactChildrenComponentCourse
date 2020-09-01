import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

import faker from "faker";
import Approvalcard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <Approvalcard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 6:00"
          content="Nice blog post"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="So"
          timeAgo="Today at 10:00"
          content="Yes"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
      <Approvalcard>
        <CommentDetail
          author="Ra"
          timeAgo="Yesterday at 10:34"
          content="Pickle Rick!!!"
          avatar={faker.image.avatar()}
        />
      </Approvalcard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
