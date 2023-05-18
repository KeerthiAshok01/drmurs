import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Notifications({
  notificationOpen,
  setNotificationOpen,
}) {
  const array = [1, 2, 3, 4, 5, 6, 1, 2];

  //   const [alert, setAlert] = useState(false);
  //   const postOwner = data[selectedUser];
  //   const [dispatchData, setDispatchData] = useState({
  //     byUser: user,
  //     toUser: postOwner.username,
  //     comment: "",
  //   });

  //   const handlePostComments = (dispatchData) => {
  //     // e.preventDefault();
  //     dispatch(postComment(dispatchData));
  //     postOwner.comments.unshift({
  //       avatar: avatar
  //         ? avatar
  //         : "https://i.pinimg.com/736x/f4/a3/4e/f4a34ef7fd2f8d3a347a8c0dfb73eece.jpg",
  //       user: user ? user : "userKnown",
  //       comment: dispatchData.comment,
  //     });
  //   };
  return (
    <div
      className="position-fixed bg-purple vh-100 d-none d-md-block overflow-auto"
      style={{ zIndex: 3, width: "25vw", height: "100vh", right: 0, top: 0 }}
    >
      <div className=" m-2 pt-2 px-3 border-bottom border-2 border-white d-flex align-items-center justify-content-between">
        <div className="h4">Notifications</div>
        <CloseIcon
          className="mb-2"
          onClick={() => setNotificationOpen(false)}
        />
      </div>
      <div className="overflow-auto p-3">
        {array.map(() => (
          <div
            className="col-12 px-3 py-2 mb-1 bg-white px-3 text-dark"
            style={{ borderRadius: 8, fontSize: "13px" }}
          >
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy
          </div>
        ))}
      </div>
      <div
        className="col-12 px-4 pt-1 text-white "
        style={{ color: "#858585", fontSize: 10 }}
      >
        <u>Show more</u>
      </div>
      {/* <div className="d-flex flex-column ">
        <div
          className="bg-white m-3 py-3 px-2 d-flex flex-column align-items-center justify-content-start overflow-auto"
          style={{ height: 500, borderRadius: 30 }}
        >
          <div className="col-12 border-bottom border-2 border-dark pb-2">
            <div className="d-flex ">
              <img
                className="rounded-circle bg-purple shadow"
                src={postOwner.dp}
                width="30px"
                height="30px"
                alt={postOwner.user}
              />

              <div className="ms-2 fw-bold text-dark">{postOwner.username}</div>
            </div>
            {postOwner.caption && (
              <div
                className="bg-purple col-11 mx-3 px-4 py-2"
                style={{ borderRadius: 30, fontSize: 12 }}
              >
                {postOwner.caption}
              </div>
            )}
          </div>
          {postOwner.comments.map((comment, index) => (
            <div className="py-2 col-12 align-items-center justify-content-start px-2">
              <div className="d-flex ">
                <img
                  className="rounded-circle bg-purple"
                  src={comment.avatar}
                  width="30px"
                  height="30px"
                  alt={comment.user}
                />

                <div className="ms-2 purple">{comment.user}</div>
              </div>
              <div
                className="bg-hash col-11 mx-3 px-4 py-2 text-dark"
                style={{ borderRadius: 30, fontSize: 12 }}
              >
                {comment.comment}
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-white m-3 overflow-auto p-3"
          style={{ height: 130, borderRadius: 30 }}
        >
          <div className="d-flex my-1 col-12 align-items-start justify-content-start">
            <img
              className="rounded-circle bg-purple"
              src={
                avatar
                  ? avatar
                  : "https://avatoon.me/wp-content/uploads/2021/09/Cartoon-Pic-Ideas-for-DP-Profile11.png"
              }
              width="30px"
              height="30px"
              alt={user}
            />
            <textarea
              rows="3"
              className="bg-hash col-10 px-3 py-1 border-0 ms-2"
              onChange={(e) =>
                setDispatchData({ ...dispatchData, comment: e.target.value })
              }
              style={{ borderRadius: 20, fontSize: 12 }}
            />
          </div>
          {alert && (
            <div className="mt-1 col-12 text-center px-4">
              <Alert
                className="mx-auto p-0 col-12 col-lg-10 "
                severity="error"
                style={{ fontSize: 10 }}
              >
                Your Comment can't be empty!
              </Alert>
            </div>
          )}
          <div className="d-flex my-1 col-12 align-items-center justify-content-end px-3 ">
            <div
              className="rounded px-md-2 px-lg-4fw-bold text-center mx-3"
              style={{
                border: "2px solid #a11cf9",
                color: "#a11cf9",
                fontSize: 12,
              }}
            >
              Cancel
            </div>
            <div
              className="bg-purple rounded fw-bold px-md-2 px-lg-4 text-center"
              style={{ border: "2px solid #a11cf9", fontSize: 12 }}
              onClick={() => {
                dispatchData.comment != ""
                  ? handlePostComments(dispatchData)
                  : setAlert(true);
              }}
            >
              Post
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
