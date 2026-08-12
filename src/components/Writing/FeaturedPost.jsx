import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                What the Yentervention Signals
            </h3>
            <p>
                Breaking down the recent intervention in yen depreciation and what it means for global markets.
            </p>
            <a
                href="https://williamfan2.substack.com/p/margin-notes-4?r=8s84mj&utm_campaign=post-expanded-share&utm_medium=web"
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