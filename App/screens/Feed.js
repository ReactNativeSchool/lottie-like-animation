import React from "react";
import { FlatList, View } from "react-native";

import { Post, Separator } from "../components/Post";

export const Feed = ({ navigation }) => {
  const [feed, setFeed] = React.useState([
    {
      _id: "1",
      user: {
        avatarUri: "https://picsum.photos/id/237/200",
        name: "Jane Doe",
        username: "jane_doe",
      },
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      isLiked: false,
    },
    {
      _id: "2",
      user: {
        avatarUri: "https://picsum.photos/id/238/200",
        name: "John Doe",
        username: "john_doe",
      },
      text: "Vivamus sodales ex a nisl pellentesque laoreet.",
      isLiked: false,
    },
  ]);

  return (
    <FlatList
      style={{ backgroundColor: "#fff" }}
      data={feed}
      renderItem={({ item }) => (
        <Post
          {...item}
          onLikePost={(_id) =>
            setFeed((f) => {
              return feed.map((post) => {
                if (post._id === _id) {
                  return { ...post, isLiked: !post.isLiked };
                }

                return post;
              });
            })
          }
          onRowPress={() => console.log("Not implemented...")}
        />
      )}
      ItemSeparatorComponent={() => <Separator />}
      keyExtractor={(item) => item._id}
      ListFooterComponent={<View style={{ flex: 1, marginBottom: 60 }} />}
    />
  );
};
