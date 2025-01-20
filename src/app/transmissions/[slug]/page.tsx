import SignUpForm from "@/ui/login-signup/signup-form";
import VoyagerLogo from "@/ui/voyager-logo";
import type { Metadata } from "next";

// TODO: dynamically import the blog post meta data
export const meta: Metadata = {
  title: "Blog Slug",
  description: "Description of the blog slug page",
};

export default function Page() {
  // TODO: Add breadcrumb to top of page
  // TODO: Add fetch to get blog post data
  // TODO: Add error handling for fetch
  return (
    <section className="items-left flex h-screen flex-col justify-start space-x-4 space-y-2">
      <div className={`items-left ms-4 flex items-baseline gap-5 space-y-2`}>
        <div className={`text-3xl text-gray-400`}>#21</div>
        <h1 className={`text-4xl font-bold`}>Blog Slug</h1>
      </div>
      <div className="flex flex-row items-baseline gap-3 text-slate-800">
        <span>Nov. 18</span>
        <span>|</span>
        <span>Captain Ryan Clegg</span>
      </div>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
          vestibulum
          <a href="/transmissions/1">dolor</a> sapien, nec aliquet ante
          vestibulum ac. Nullam nec ultricies lacus. Sed nec metus
          <a href="/transmissions/2">dolor</a>. Nam in nunc nec nunc
          <a href="/transmissions/3">dolor</a> tincidunt.
        </p>
      </article>
    </section>
  );
}
