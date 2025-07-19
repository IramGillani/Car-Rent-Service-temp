import Header from "../Header";
import SectionAbout from "../SectionAbout";
import { blogContent } from "../../data";
const Blog = () => {
  const BlogCard = ({
    personName,
    src,
    blogTitle,
    blogDesc,
    date,
    commentsCount,
  }) => {
    return (
      <>
        <article class="blog-card">
          <header>
            <h2>
              <a href="/blog/post-slug">Blog Post Title</a>
            </h2>
            <p>
              by <span class="author">Author Name</span> on{" "}
              <time datetime="2025-07-18">July 18, 2025</time>
            </p>
          </header>

          <figure>
            <img src="thumbnail.jpg" alt="Description of blog post image" />
            <figcaption>Image Caption (optional)</figcaption>
          </figure>

          <p class="excerpt">
            This is a short summary or introduction of the blog post to
            encourage readers to click and read more...
          </p>

          <footer>
            <a href="/blog/post-slug" class="read-more">
              Read More →
            </a>
          </footer>
        </article>
      </>
    );
  };
  return (
    <>
      <Header pageTitle="Blog & News" />
      <div className="main-section">
        <SectionAbout
          title="Blog & News"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
        />
      </div>
      <section className="flex flex-wrap">
        <BlogCard />
      </section>
    </>
  );
};

export default Blog;
