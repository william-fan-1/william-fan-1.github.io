const posts = [
    {
        title: "Principles of Long-Term Yields",
        date: "August 2026",
        description:
            "Understanding the sell-off in long-term government debt and why the Treasury's proposed buyback won't help.",
        link: "https://williamfan2.substack.com/p/margin-notes-4?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=web",
    },
    {
        title: "What the Yentervention Signals",
        date: "August 2026",
        description:
            "Breaking down the recent intervention in yen depreciation and what it means for global markets.",
        link: "https://williamfan2.substack.com/p/margin-notes-4?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=web",
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