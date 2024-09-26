import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Blog</h1>
      <br></br>
      <p className="mt-10"> No posts yet</p>
    </div>
  );
}
