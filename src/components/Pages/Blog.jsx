import Header from "../Header";
import SectionAbout from "../SectionAbout";
import { blogContent } from "../../data";
import { FaUser } from "react-icons/fa";
import { FaCommentAlt } from "react-icons/fa";
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
        <article className="flex flex-col bg-[#f2f2f2] group rounded-[10px]">
          <figure className="overflow-hidden relative">
            <img
              src={src}
              alt="car"
              className=" transition-transform duration-[0.5s] w-full object-center object-cover rounded-t-[10px] group-hover:scale-[1.1] group-hover:blur-[1px] brightness-95"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-700/60 to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none"></div>
          </figure>
          <div className="flex flex-col relative p-6  group-hover:shadow-2xl transition-shadow duration-[0.5s]">
            <span className="absolute bg-primary text-white rounded-[10px] py-3 px-6 -translate-y-1/2 left-4 top-0">
              {date}
            </span>
            <div className="flex items-center justify-between my-4">
              <div className="flex items-center justify-between gap-2">
                {" "}
                <FaUser className="text-primary font-bold text-[0.875em]" />
                <span>{personName}</span>
              </div>
              <div className="flex items-center justify-between gap-2">
                {" "}
                <FaCommentAlt className="text-primary font-bold text-[0.875em]" />{" "}
                <span>{commentsCount} comments</span>
              </div>
            </div>
            <h4 className="mb-4 text-dark font-medium">
              <a href="/blog/post-slug">{blogTitle}</a>
            </h4>
            <p className="mb-4 text-light">{blogDesc}</p>
            <footer>
              <a
                href="/blog/post-slug"
                className="read-more text-primary hover:text-[#bb0018] transition-colors duration-[0.5s]"
              >
                Read More →
              </a>
            </footer>
          </div>
        </article>
      </>
    );
  };
  return (
    <>
      <Header pageTitle="Blog & News" />
      <section className="main-section">
        <div className="main-section">
          <SectionAbout
            title="Blog & News"
            desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,"
          />
        </div>
        <section className="flex gap-6 mt-6 flex-wrap items-center justify-center lg:flex-nowrap">
          {blogContent.map(
            ({ src, personName, blogDesc, blogTitle, date, commentsCount }) => (
              <BlogCard
                src={src}
                personName={personName}
                blogDesc={blogDesc}
                date={date}
                commentsCount={commentsCount}
                blogTitle={blogTitle}
              />
            )
          )}
        </section>
      </section>
    </>
  );
};

export default Blog;
