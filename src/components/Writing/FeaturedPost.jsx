import { FiArrowUpRight } from "react-icons/fi";

export default function FeaturedPost() {
    return (
        <article className="featured-post">

            <p className="eyebrow">
                Featured Essay
            </p>
            <h3>
                Making Sense of the Bond Market
            </h3>
            <p>
                Examining the structural forces driving today's bond market, 
                from fiscal deficits and Treasury supply to investor confidence.
            </p>
            <a
                href="https://open.substack.com/pub/williamfan2/p/margin-notes-2?r=8s84mj&utm_campaign=post&utm_medium=web&showWelcomeOnShare=true"
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