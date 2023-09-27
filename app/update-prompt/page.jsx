"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";
import AuthRouteGuard from "@components/AuthRouteGaurd";
const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const PromptId = searchParams.get("id");

  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(`/api/prompt/${PromptId}`);
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (PromptId) getPromptDetails();
  }, [PromptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!PromptId) return alert("Prompt Id not found");
    try {
      const response = await fetch(`/api/prompt/${PromptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AuthRouteGuard>
      <Form
        type="Update"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </AuthRouteGuard>
  );
};

export default UpdatePrompt;
