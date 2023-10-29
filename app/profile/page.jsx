"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import AuthRouteGuard from "@components/AuthRouteGuard";
const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this prompt?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = posts.filter((item) => item._id !== post.id);

        setPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/user/${session?.user.id}/post`);
      const promptData = await response.json();
      setPosts(promptData);
    };

    if (session?.user.id) fetchPosts();
  }, []);
  return (
    <AuthRouteGuard>
      <Profile
        name="My"
        desc="welcome to your personalized profle page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </AuthRouteGuard>
  );
};

export default MyProfile;
