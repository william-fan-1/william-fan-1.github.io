import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                A Rate Hike Soliloquoy
            </h3>
            <p>
                Commentary on the upcoming FOMC meeting, what I believe is coming, and why I think caution is worthwhile.
            </p>
            <a
                href="https://williamfan2.substack.com/p/margin-notes-7?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=post%20viewer"
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