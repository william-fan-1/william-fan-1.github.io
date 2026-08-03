const posts = [
    {
        title: "Making Sense of the Bond Market",
        date: "July 2026",
        description:
            "Examining the structural forces driving today's bond market, from fiscal deficits and Treasury supply to investor confidence.",
        link: "https://open.substack.com/pub/williamfan2/p/margin-notes-2?r=8s84mj&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true",
    },
    {
        title: "Leveraged ETFs and Portfolio Insurance",
        date: "July 2026",
        description:
            "Discussing the mechanics and risks of leveraged ETFs and offering a historical comparison.",
        link: "https://substack.com/home/post/p-207799513",
    },
];

export default function RecentPosts() {
    return (
        <div className="recent-posts">

            <h3>
                Recent Writing
            </h3>

            <div>
                {posts.map((post) => (
                    <a
                        key={post.title}
                        href={post.link}
                        className="post-row"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div>
                            <h4>
                                {post.title}
                            </h4>

                            <p>
                                {post.description}
                            </p>
                        </div>

                        <span>
                            {post.date}
                        </span>

                    </a>
                ))}
            </div>

        </div>
    );
}