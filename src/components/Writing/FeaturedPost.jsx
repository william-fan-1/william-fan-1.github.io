import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                Principles of Long-Term Yields
            </h3>
            <p>
                Understanding the sell-off in long-term government debt and why the Treasury's proposed buyback won't help.
            </p>
            <a
                href="https://williamfan2.substack.com/p/margin-notes-5?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=post%20viewer"
                className="external-link"
                target="_blank"
                rel="noopener noreferrer"
            >
                Read on Substack
                <FiArrowUpRight />
            </a>

        </article>
    );
}