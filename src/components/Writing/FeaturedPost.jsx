import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                The AI Dichotomy in Financial Markets
            </h3>
            <p>
                Analyzing the inversion in relative valuations between stocks and bonds and understanding what's driving markets right now.
            </p>
            <a
                href="https://substack.com/@williamfan2/note/p-213335914?r=8s84mj&utm_source=notes-share-action&utm_medium=web"
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