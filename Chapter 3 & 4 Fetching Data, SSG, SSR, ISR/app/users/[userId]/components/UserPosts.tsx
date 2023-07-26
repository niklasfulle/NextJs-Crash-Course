import React from "react";

type Props = {
  promise: Promise<Post[]>;
};

export default async function UserPosts({ promise }: Props) {
  const posts: Post[] = await promise;

  const content = posts.map((post) => {
    return (
      <>
        <article key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <br />
        </article>
      </>
    );
  });

  return content;
}
