import { useParams } from "react-router-dom";
import { PostGrid } from "./Profile.styles";
import { initialState as postData } from "../../Redux/PostData";

const ProfilePosts = () => {
  const { id } = useParams();
  let filteredPosts = postData.filter((post) => {
    return post.userID === id;
  });
  return (
    <PostGrid>
      {filteredPosts.length ? (
        filteredPosts.map((post, index) => {
          return (
            <div key={`${index}-${post.userID}`}>
              <img src={post.postLink} alt="post" />
            </div>
          );
        })
      ) : (
        <h2 className="empty-post-section">No Posts Yet!</h2>
      )}
    </PostGrid>
  );
};

export default ProfilePosts;
