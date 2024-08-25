/*since we are building N-level nesting in comments and yt api does not give it, so we are
creating a dummy comments component */
import { USER_ICON } from "../utils/constants";
const commentsData = [
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [],
  },
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [
      {
        name: "Aditya Sahoo",
        text: "This is a reply inside a comment!",
        replies: [],
      },
      {
        name: "Aditya Sahoo",
        text: "This is a reply inside a comment!",
        replies: [
          {
            name: "Aditya Sahoo",
            text: "This is a reply inside a comment!",
            replies: [
              {
                name: "Aditya Sahoo",
                text: "This is a reply inside a comment!",
                replies: [
                  {
                    name: "Aditya Sahoo",
                    text: "This is a reply inside a comment!",
                    replies: [
                      {
                        name: "Aditya Sahoo",
                        text: "This is a reply inside a comment!",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Aditya Sahoo",
                    text: "This is a reply inside a comment!",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [],
  },
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [],
  },
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [],
  },
  {
    name: "Aditya Narayan Sahoo",
    text: "Muchas gracias afición, esto es para vosotros! SIUUU",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-50 p-2 rounded-lg my-2">
      <img className="w-9 h-9 mt-2" alt="user" src={USER_ICON} />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // We never use indexes as keys, here used for simplicity
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
