import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                The Cost of Knowing Less
            </h3>
            <p>
                Examining the SEC's proposed disclosure changes through the lens of the Efficient Market Hypothesis and what they imply for transparency, price discovery, and investors.
            </p>
            <a
                href="https://open.substack.com/pub/williamfan2/p/margin-notes-3?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=post%20viewer"
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