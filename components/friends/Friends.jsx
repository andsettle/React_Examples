import React, { useEffect, useState } from "react";
import { getFriends } from "../../services/calls";
import FriendCard from "./FriendCard";
import debug from "sabio-debug";

const _logger = debug.extend("Friend");
const _loggerPage = _logger.extend("AlsoFriend");
function Friends() {
  useEffect(() => {
    getFriends().then(onGetSuccess).catch(onGetPeopleError);
  }, []);

  const [friends, setArrayOfFriends] = useState({ friendData: [] });

  const onGetSuccess = (response) => {
    const friends = response.data.items;
    _logger(friends);

    setArrayOfFriends((prevState) => {
      let friendDat = { ...prevState };
      friendDat.friendData = friends;

      return friendDat;
    });
  };

  const onGetPeopleError = (err) => {
    console.error(err);
  };

  const mapFriend = (friend) => {
    return (
      <React.Fragment key={"#friendContainer" + friend.id}>
        <FriendCard key={friend.id} friendObj={friend} />
      </React.Fragment>
    );
  };

  const showFriendsClicked = (e) => {
    e.preventDefault();
    _loggerPage("Show Friends Clicked");
  };

  return (
    <React.Fragment>
      <div className="row pt-3 pb-3 text-align: center">
        <button
          style={{ width: 200 }}
          className="btn btn-primary mx-auto"
          onClick={showFriendsClicked}
        >
          Show Friends
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="card-group">{friends.friendData.map(mapFriend)}</div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Friends;
